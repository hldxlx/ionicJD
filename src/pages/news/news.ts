import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

//引入请求数据的模块
import { Http, Jsonp} from '@angular/http';

//新闻详情
import { NewscontentPage } from '../newscontent/newscontent';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  //list用于存放数据
  public list = [];


  public NewscontentPage=NewscontentPage;   /*新闻详情页面*/
  public page = 1;


  constructor(public navCtrl: NavController,public http: Http,public jsonp: Jsonp) {
      this.requestData("");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');

  }

  requestData(infiniteScroll){
    var that = this;
    var url='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page='+this.page;
    this.http.get(url).subscribe((res)=>{
        let resData = JSON.parse(res['_body']).result;
        this.list= this.list.concat(resData);
        console.log(this.list);
        that.page++;

        if(infiniteScroll){
          infiniteScroll.complete();   /*请求完成数据更新页面*/
          if(resData<20){   /*没有数据 禁用上拉更新*/
            infiniteScroll.enable(false);
          }
        }


    })
  }

  doInfinite(infiniteScroll){
    this.requestData(infiniteScroll);
  }




}
