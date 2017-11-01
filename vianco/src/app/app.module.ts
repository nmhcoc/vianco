import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {
  GoogleMaps
} from '@ionic-native/google-maps';
import { ProfilePage } from '../pages/profile/profile';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { CategoriesPage } from '../pages/categories/categories';
import { ItemsPage } from '../pages/items/items';
import { DetailPage } from '../pages/detail/detail';
import { Camera } from '@ionic-native/camera';
import { SearchPage } from '../pages/search/search';
import { SignPage } from '../pages/sign/sign';
// modal
import { ConfirmModal } from '../pages/confirm/confirm';
import { MsgBoxPage } from '../pages/msg-box/msg-box';
import { DetailOrderPage } from '../pages/detail-order/detail-order';
import { UserInfoPage } from '../pages/userInfo/userInfo';

// services
import { CommonHelper } from '../shared/commonHelper';
import { UserService } from '../shared/userService';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignupPage } from '../pages/signup/signup'; 
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password'; 
import { MapPage } from '../pages/map/map';
import { PayPage } from '../pages/pay/pay';

import { PayInfoPage } from '../pages/pay-info/pay-info';
import { ListOrderPage } from '../pages/list-order/list-order';
import { CategoryPage } from '../pages/category/category';
import { NewsPage } from '../pages/news/news';

import { DataService } from '../shared/dataService';
import { HttpModule,Http } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
@NgModule({
  declarations: [
    MyApp,
    ProfilePage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    CategoriesPage,
    ItemsPage,
    DetailPage,
    ConfirmModal,
    UserInfoPage,
    SignupPage,
    ForgotPasswordPage,
    MapPage,
    PayPage,
    PayInfoPage,
    ListOrderPage,
    CategoryPage,
    NewsPage,
    MsgBoxPage,
    DetailOrderPage,
    SearchPage,
    SignPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      mode :'md'
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    CategoriesPage,
    ItemsPage,
    DetailPage,
    ConfirmModal,
    UserInfoPage,
    SignupPage,
    ForgotPasswordPage,
    MapPage,
    PayPage,
    PayInfoPage,
    ListOrderPage,
    CategoryPage,
    NewsPage,
    MsgBoxPage,
    DetailOrderPage,
    SearchPage,
    SignPage
  ],
  providers: [
    DataService,
    Camera,
    GoogleMaps,
    StatusBar,
    SplashScreen,
    CommonHelper,
    UserService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
