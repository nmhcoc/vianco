import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private loadCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  username:string;
  password:string;
  rePassword:string;

  signUp():void{
    let loading = this.loadCtrl.create({
      content:'Đang xử lý'
    });
    loading.present();
    setTimeout(() =>{
      loading.dismiss();
      this.navCtrl.push(TabsPage);
    }, 5000);
  }
}
