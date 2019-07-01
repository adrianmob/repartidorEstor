import { Component, ViewChild, ElementRef } from '@angular/core';
import { Platform, ModalController,ToastController, MenuController } from '@ionic/angular';
import { Environment, GoogleMap, GoogleMaps, GoogleMapsEvent, MyLocation, GoogleMapsAnimation, Marker, ILatLng, Polyline } from '@ionic-native/google-maps';
import { AlertaPage } from '../pages/alerta/alerta.page';
import { AngularFireDatabase } from '@angular/fire/database';
import { LocationTrackerService } from '../services/LocationTracker/location-tracker.service';;
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';
import { InfoPedidoPage } from '../pages/info-pedido/info-pedido.page';

declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('map') mapElement : ElementRef;
  private map: GoogleMap;
  marketPosition = { lat: 0, lng: 0};
  pedidosSuscribe:any;
  pedido:any;
  clientPosition = {lat : 0, lng: 0};
  id:any;
  estado:any = 0;
  rumboCliente = false;
  markerPositionRepartidor: Marker;
  mpMarker: Marker;
  mpCliente: Marker;
  private googleDirectionService = new google.maps.DirectionsService();
  ruta : Polyline;
 

  constructor(
    private platform: Platform,
    public modalCtrl: ModalController,
    private afdb: AngularFireDatabase,
    public toastController: ToastController,
    public locationTracker: LocationTrackerService,
    public launc: LaunchNavigator,
    private menu: MenuController,

  ) {
    
    
  }

  toggleSideMenu() {
    this.menu.toggle('menu');
  }

  async infoPedido(){
    console.log(this.pedido);
    const modal = await this.modalCtrl.create({
      component: InfoPedidoPage,
      componentProps: {
        pedido: this.pedido
      }
    });
    
    await modal.present();
    const data = await modal.onDidDismiss();
    if(data.data){
      if (data.data.cancelado){
        this.ruta.remove();
        this.pedido = undefined;
        this.estado = 0;
        this.mpMarker.remove();
        this.rumboCliente = false; 
        this.listenPedidos();
      }
    }
  
}

  ionViewWillEnter(){
    let val = JSON.parse(localStorage.getItem("user_Data"));
    this.id = val.id_repartidor;
    this.mapElement = this.mapElement.nativeElement;
    this.loadMap();
  }

  async loadMap(){
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyAFp-V89r2lYDTrvFf0wfEb0qT5ceJ76NM',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyAFp-V89r2lYDTrvFf0wfEb0qT5ceJ76NM'
    });

    this.map = GoogleMaps.create(this.mapElement);
    await this.map.one(GoogleMapsEvent.MAP_READY);
    this.addOrigin();
  }

  async addOrigin(){
    const myLocation: MyLocation = await this.map.getMyLocation();
    console.log(myLocation);

    await this.map.moveCamera({
      target: myLocation.latLng,
      zoom: 18
    });

    this.markerPositionRepartidor = this.map.addMarkerSync({
      icon: '#000000',
      animation: GoogleMapsAnimation.BOUNCE,
      position: myLocation.latLng
    });

    this.listenPedidos();
    this.tracker();

  }

  tracker(){
    this.locationTracker.startTracking();
    this.cambiarMarker();
  }

  async cambiarMarker(){
    this.afdb.object("ubicacion/"+this.id).valueChanges().subscribe((data)=>{
      if(this.estado != 0){

        if(this.estado == 1){
          this.getDistance({lat: data['lat'],lng: data['lng']},this.mpMarker.getPosition());

        }
        else if(this.estado == 2){
          this.getDistance({lat: data['lat'],lng: data['lng']},this.mpCliente.getPosition());

        }

      }

      this.markerPositionRepartidor.setPosition({
        lat: data['lat'],
        lng: data['lng']
      })

      // this.map.moveCamera({
      //   target: {
      //     lat: data['lat'],
      //     lng: data['lng']
      //   },
      //   zoom: 18
      // });

    });
    
  }

  listenPedidos(){
    this.pedidosSuscribe =  this.afdb.object("pedidos/"+this.id).snapshotChanges().subscribe(data=>{
      this.pedido = data.payload.val();
      if(this.pedido){
        if(this.pedido['status'] == 1){
          this.newPedido();
          }
        }
    });
  }

  async newPedido(){
    const modal =  await this.modalCtrl.create({
      component: AlertaPage,
      cssClass: "alertaModal",
      backdropDismiss: false

    });

    modal.present();

    let aceptado = await modal.onDidDismiss();
    if(aceptado.data){
      console.log(this.pedido);
      if(this.pedido['tipo'] == "dash"){
        this.marketPosition.lat = this.pedido.dirOri.lat;
        this.marketPosition.lng = this.pedido.dirOri.lng;
  
        this.clientPosition.lat = this.pedido.dirDest.lat;
        this.clientPosition.lng = this.pedido.dirDest.lat;
      }
      else{
        this.marketPosition.lat = parseFloat(this.pedido.productos[0].latitud);
        this.marketPosition.lng = parseFloat(this.pedido.productos[0].longitud);
  
        this.clientPosition.lat = this.pedido['ubicacionCliente'][0]['lat'];
        this.clientPosition.lng = this.pedido['ubicacionCliente'][0]['lng'];
      }

      // this.repartidoresUnsubscribe();

      this.pedidosSuscribe.unsubscribe();

      this.estado = 1;

      this.mpMarker = this.map.addMarkerSync({
        icon: '#000000',
        animation: GoogleMapsAnimation.BOUNCE,
        position: {
          lat: this.marketPosition.lat,
          lng: this.marketPosition.lng
        }
      });

      this.googleDirectionService.route({
        origin: this.markerPositionRepartidor.getPosition(),
        destination: this.mpMarker.getPosition(),
        travelMode: 'DRIVING'
      }, results =>{
        if(results.status == "OK"){
          let points = new Array<ILatLng>();
          const routes = results.routes[0].overview_path;

          for (let i= 0; i < routes.length; i++){
            points[i] = {
              lat: routes[i].lat(),
              lng: routes[i].lng()
            }
          }

          this.direction(points);
        }
      });    
    }
    else{
      this.pedido = undefined;
    }

    
  }


  async direction(ruta){
    this.ruta = this.map.addPolylineSync({
      points: ruta,
      color: "#000",
      width: 3
    });

    this.map.moveCamera({
      target: ruta
    });
  }

  async directionCliente(){


    this.ruta.remove();
    this.rumboCliente = false;
    
    this.estado = 2;

      this.mpCliente = this.map.addMarkerSync({
        icon: '#000000',
        animation: GoogleMapsAnimation.BOUNCE,
        position: {
          lat: this.clientPosition.lat,
          lng: this.clientPosition.lng
        }
      });

      console.log(this.clientPosition.lat);
      console.log(this.clientPosition.lng);


      this.googleDirectionService.route({
        origin: this.markerPositionRepartidor.getPosition(),
        destination: this.mpCliente.getPosition(),
        travelMode: 'DRIVING'
      }, results =>{
        if(results.status == "OK"){
          let points = new Array<ILatLng>();
          const routes = results.routes[0].overview_path;

          for (let i= 0; i < routes.length; i++){
            points[i] = {
              lat: routes[i].lat(),
              lng: routes[i].lng()
            }
          }

          this.direction(points);
        }
      });    

  }

  async centrar(){
    let myLocation: MyLocation = await this.map.getMyLocation();
    await this.map.moveCamera({
      target: myLocation.latLng,
      zoom: 19
    });
  }

  getDistance(origin, destination) {
    let service = new google.maps.DistanceMatrixService;
      service.getDistanceMatrix({
        origins: [origin],
        destinations: [destination],
        travelMode: 'DRIVING',
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false
      }, (response, status) => {
        console.log(response);
        console.log(status);
        if (status == 'OK') {
          if (response.rows[0].elements[0].status != 'ZERO_RESULTS') {
            console.log(response.rows[0].elements[0]['distance']['value']);
            if(response.rows[0].elements[0]['distance']['value'] < 250){
                this.rumboCliente = true;
              }
              else{
                this.rumboCliente = false;

              }
            }
        }
      });
  }

  finalizarPedido(){
    this.estado = 0;
    this.rumboCliente = false; 
    this.listenPedidos();

  }

  launch(){
    if(this.estado == 1){
      this.launc.navigate([this.marketPosition.lat,this.marketPosition.lng],{
        appSelection:{
          androidTheme: 0,
          dialogHeaderText: "Selecciona una app de navegacion",
          cancelButtonText: "Cancelar",
          rememberChoice: {
            prompt: {
              headerText: "¿Recordamos tu seleccion?",
              bodyText: 'Usaremos la misma aplicación para navegar la siguente vez',
              yesButtonText: 'Si',
              noButtonText: 'No'
          }

        }
      }
      });
    }
    else if(this.estado == 2){
      this.launc.navigate([this.clientPosition.lat,this.clientPosition.lng],{
        appSelection:{
          androidTheme: 0,
          dialogHeaderText: "Selecciona una app de navegacion",
          cancelButtonText: "Cancelar",
          rememberChoice: {
            prompt: {
              headerText: "¿Recordamos tu seleccion?",
              bodyText: 'Usaremos la misma aplicación para navegar la siguente vez',
              yesButtonText: 'Si',
              noButtonText: 'No'
          }

        }
      }
      });      
    }
  }

}
