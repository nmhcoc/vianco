import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { DetailPage } from '../pages/detail/detail';
import { CategoryPage } from '../pages/category/category';
import { ListOrderPage } from '../pages/list-order/list-order';
import { PayInfoPage } from '../pages/pay-info/pay-info';
import { ProfilePage } from '../pages/profile/profile';
import { DetailOrderPage } from '../pages/detail-order/detail-order';
import { SignPage } from '../pages/sign/sign'

// import { CartPage } from '../pages/cart/cart';


// import { ProfilePage } from '../pages/profile/profile';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = SignPage;//LoginPage;//TabsPage;//HomePage

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
