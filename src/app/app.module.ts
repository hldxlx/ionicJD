import { NgModule, ErrorHandler } from '@angular/core';


import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
//引入请求数据的模块
import { HttpModule, JsonpModule } from '@angular/http';
import { MyApp } from './app.component';


import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { NewsPage } from '../pages/news/news';
import { TabsPage } from '../pages/tabs/tabs';


import { NewscontentPage } from '../pages/newscontent/newscontent';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {RefreshPage} from "../pages/refresh/refresh";


@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    NewsPage,
    TabsPage,
    NewscontentPage,
    RefreshPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    // IonicModule.forRoot(MyApp)
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: 'true', //隐藏全部子页面 tabs
      backButtonText: '返回' /*配置返回按钮*/
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    NewsPage,
    TabsPage,
    NewscontentPage,
    RefreshPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
