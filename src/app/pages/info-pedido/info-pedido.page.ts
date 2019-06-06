import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-info-pedido',
  templateUrl: './info-pedido.page.html',
  styleUrls: ['./info-pedido.page.scss'],
})
export class InfoPedidoPage implements OnInit {

  constructor(public modalController: ModalController,
    public navParams: NavParams) { }

  ngOnInit() {
    console.log(this.navParams.data);
  }

  cerrarModal(){
    this.modalController.dismiss();
  }

}
