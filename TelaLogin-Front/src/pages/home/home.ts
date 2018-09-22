import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  //styleUrls: ['./alert-example.css'],
})

export class HomePage {

  constructor(public navCtrl: NavController, public NavParams: NavParams,
    //public alertController: AlertController
    ) {}

    //this.navCtrl.setRoot(LoginPage);

  ionViewDidLoad(){
    console.log(this.NavParams.get('message'));
  }

  /*async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: console.log(this.NavParams.get('message')),
      buttons: ['OK']
    });

    await alert.present();
  }*/

}
