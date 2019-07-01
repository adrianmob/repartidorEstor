import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { AlertaPage } from '../pages/alerta/alerta.page';
import { AlertaPageModule } from '../pages/alerta/alerta.module';
import { InfoPedidoPageModule } from '../pages/info-pedido/info-pedido.module';
import { InfoPedidoPage } from '../pages/info-pedido/info-pedido.page';



@NgModule({
  entryComponents: [
    AlertaPage,
    InfoPedidoPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    AlertaPageModule,
    InfoPedidoPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
