import { Injectable, NgZone } from '@angular/core';
import { BackgroundGeolocation, BackgroundGeolocationEvents } from '@ionic-native/background-geolocation/ngx';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { AngularFireDatabase } from '@angular/fire/database';
import 'rxjs/add/operator/filter';

@Injectable({
  providedIn: 'root'
})
export class LocationTrackerService {

  public watch: any;    
  public lat: number = 0;
  public lng: number = 0;
  public id;

  constructor(public zone: NgZone,
    private backgroundGeolocation: BackgroundGeolocation,
    private afdb: AngularFireDatabase,
    private geolocation: Geolocation) { 
      let val = JSON.parse(localStorage.getItem("user_Data"));
      this.id = val.id_repartidor;
    }

  startTracking() {
     // Background Tracking

     let config = {
      desiredAccuracy: 0,
      stationaryRadius: 20,
      distanceFilter: 10, 
      debug: false,
      interval: 2000 
    };

    this.backgroundGeolocation.configure(config).then(()=>{
      this.backgroundGeolocation.on(BackgroundGeolocationEvents.location).subscribe((location)=>{
        console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);
  
        // Run update inside of Angular's zone
        this.zone.run(() => {
          this.lat = location.latitude;
          this.lng = location.longitude;
          this.afdb.database.ref("ubicacion/"+this.id).set({
            lat: this.lat,
            lng: this.lng
          });
        });

        this.backgroundGeolocation.finish(); // FOR IOS ONLY
  
      }, (err) => {
  
        console.log(err);
  
      });
      
    });

    // Turn ON the background-geolocation system.
    this.backgroundGeolocation.start();


    // Foreground Tracking

  let options = {
    frequency: 3000, 
    enableHighAccuracy: true
  };

  this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {

    console.log(position);

    // Run update inside of Angular's zone
    this.zone.run(() => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      this.afdb.database.ref("ubicacion/"+this.id).set({
        lat: this.lat,
        lng: this.lng
      });
    });

  });


  }

  stopTracking() {

    console.log('stopTracking');

    this.backgroundGeolocation.finish();
    this.watch.unsubscribe();
  }
}
