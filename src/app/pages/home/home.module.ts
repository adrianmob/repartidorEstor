import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { AlertaPage } from '../alerta/alerta.page';
import { AlertaPageModule } from '../alerta/alerta.module';
import { InfoPedidoPage } from '../info-pedido/info-pedido.page';
import { InfoPedidoPageModule } from '../info-pedido/info-pedido.module';

@NgModule({
  entryComponents: [
    InfoPedidoPage,
    AlertaPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoPedidoPageModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    AlertaPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}