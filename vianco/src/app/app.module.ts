import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ProfilePage } from '../pages/profile/profile';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { CategoriesPage } from '../pages/categories/categories';
import { ItemsPage } from '../pages/items/items';
import { DetailPage } from '../pages/detail/detail';

// modal
import { ConfirmModal } from '../pages/confirm/confirm';
import { UserInfoPage } from '../pages/userInfo/userInfo';

// services
import { CommonHelper } from '../shared/commonHelper';
import { UserService } from '../shared/userService';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignupPage } from '../pages/signup/signup'; 
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password'; 


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
    ForgotPasswordPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
    ForgotPasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CommonHelper,
    UserService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
