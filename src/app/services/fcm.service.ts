import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase/ngx'
import { Platform } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';


@Injectable({
  providedIn: 'root'
})
export class FcmService {

  constructor(private firebaseNative: Firebase, private platform: Platform, private angularFireStore: AngularFirestore) { }

  async getToken() {
    let token;
    if (this.platform.is('android')) {
      token = await this.firebaseNative.getToken();
    }
    return this.saveTokenToFirestore(token);
  }


  private saveTokenToFirestore(token) {

    if (!token) return;
    const deviceRef = this.angularFireStore.collection('order');

    const docData = {
      token,
      orderid: 'GR123456',
      status: 'order confirmed'

    }
    return deviceRef.doc(token).set(docData);
  }


  listenToNotifications(){
    return this.firebaseNative.onNotificationOpen();
  }

}
