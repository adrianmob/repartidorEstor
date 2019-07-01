import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-info-pedido',
  templateUrl: './info-pedido.page.html',
  styleUrls: ['./info-pedido.page.scss'],
})
export class InfoPedidoPage implements OnInit {

  pedido:any = {
    tipo: ""
  };

  constructor(public modalController: ModalController,
    public navParams: NavParams,
    private afDB: AngularFireDatabase) { }

    ngOnInit() {
      console.log(this.navParams.get('pedido'));
      this.pedido = this.navParams.get('pedido');
      if(!this.pedido){
        this.pedido = {
          tipo: ""
        };
      }
    }
  
    cerrarModal(){
      this.modalController.dismiss();
    }

    cancelar(){
      let val = JSON.parse(localStorage.getItem("user_Data"));
      this.afDB.database.ref("pedidos/"+val.id_repartidor).set({
        cancelado: true
      });
      this.pedido = {
        tipo: ""
      };
      this.modalController.dismiss({
        cancelado: true
      });
    }

}
