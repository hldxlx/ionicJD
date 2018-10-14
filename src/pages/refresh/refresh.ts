import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RefreshPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-refresh',
  templateUrl: 'refresh.html',
})
export class RefreshPage {
  public list = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    this.show();
  }

  show(){
    for(var i=0;i<5;i++){
      this.list.push(`这是第${i}条数据`);
    }
  }

  doRefresh(refresher) {
    setTimeout(() => {
      for(var i=0;i<5;i++){
        this.list.unshift(`这是第${i}条数据`);
      }
      refresher.complete();
    }, 2000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RefreshPage');
  }


}
