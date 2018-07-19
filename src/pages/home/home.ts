import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
  name: 'HomePage',
  priority: 'high'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onAbout(): void {
    this.navCtrl.push('About-Page', {
      id: 10
    });
  }

}
