import { Component } from '@angular/core';

import { Platform, MenuController, Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { FuncionesGlobalesService } from './services/global/funciones-globales.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  userData;
  foto: any;


  constructor(
    private globalFunctions: FuncionesGlobalesService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private menu: MenuController,
    private _sanitizer: DomSanitizer,
    public events: Events

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      let data = localStorage.getItem('user_Data');
      if(data){
      this.userData = JSON.parse(data);
      this.foto = this._sanitizer.bypassSecurityTrustUrl("data:Image/*;base64,"+this.userData.fotografia);
      this.router.navigateByUrl('/home');
      this.events.subscribe('emitUserData', (user) => {
        this.userData = user;
        this.foto = this.globalFunctions.convertToBase64(user.fotografia);
      });
    }
    });
  }

  verPerfil() {
    this.router.navigateByUrl('/updateprofile');
    this.menu.close('menu');
  }


  salir(){
    // this.storage.clear().then(()=>{
    //   this.menu.close('menu');
    //   this.navCtrl.navigateRoot('session');
    // });

    localStorage.removeItem('user_Data');
    this.menu.close('menu');
    this.router.navigateByUrl('/session');
  }

  
}
