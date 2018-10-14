import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RefreshPage } from '../refresh/refresh';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public refreshPage = RefreshPage;



  constructor(public navCtrl: NavController) {



  }


}
