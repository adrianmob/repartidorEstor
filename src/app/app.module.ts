import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';


import { GoogleMaps } from '@ionic-native/google-maps';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';

import { BackgroundGeolocation } from '@ionic-native/background-geolocation/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';

import { Camera } from '@ionic-native/camera/ngx';


export const firebaseConfig = {
  apiKey: "AIzaSyBBpfZ5-RiG2fGwpWFCSimR2CFtXXnTGJI",
  authDomain: "el-estor.firebaseapp.com",
  databaseURL: "https://el-estor.firebaseio.com",
  projectId: "el-estor",
  storageBucket: "el-estor.appspot.com",
  messagingSenderId: "524940257833",
  appId: "1:524940257833:web:c54ca1c9550dc4c9"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BackgroundGeolocation,
    Geolocation,
    LaunchNavigator,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GoogleMaps,
    Camera,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
