import { Component } from '@angular/core';
import { FcmService } from '../services/fcm.service';
import { ToastController, ModalController } from '@ionic/angular';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public fcm: FcmService, public toastCtrl: ToastController, public mdalCtrl: ModalController) { }

  ionViewDidLoad() {
    this.fcm.getToken();
    this.fcm.listenToNotifications().pipe(
      tap(msg => {

        this.toastCtrl.create({
          message: msg.body,
          duration: 3000

        }).then(res => {
          res.present();
        });

        console.log(msg);

      })
    ).subscribe();
  }

}
