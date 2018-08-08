import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) { }

  private condition: boolean = false;

  showAlert() {
    this.condition = this.condition === false ? true : false;
  }
}
