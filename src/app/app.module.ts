import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {Firebase} from '@ionic-native/firebase/ngx';
import { FcmService } from './services/fcm.service';
const firebase={

    apiKey:"AIzaSyB6bXLx1v9uFovtna4OfpraysQQqt3WKjE",
    authDomain:"grand-appliance-208410.firebaseapp.com",
    databaseURL:"https://grand-appliance-208410.firebaseio.com",
    projectId:"grand-appliance-208410",
    storageBucket:"grand-appliance-208410.appspot.com",
    messagingSenderId:"674526248197"

}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFireModule.initializeApp(firebase),AngularFirestoreModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FcmService,
    Firebase
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
