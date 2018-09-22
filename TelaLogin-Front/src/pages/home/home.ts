import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public NavParams: NavParams) {}

    //this.navCtrl.setRoot(LoginPage);
  ionViewDidLoad(){
    console.log(this.NavParams.get('message'));
  }

}
