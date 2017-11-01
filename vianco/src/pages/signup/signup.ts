import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';

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
  name:string;
  phone:string;
  birth:Date;
  gender:string = '1';
  type:string = 'single';



  signUp():void{
   
    let loading = this.loadCtrl.create({
      content:'Đang xử lý'
    });
    loading.present();
    setTimeout(() =>{
      loading.dismiss();
      this.navCtrl.push(ProfilePage);
    }, 5000);
  }

  changeType(type):void{
    this.type = type;
  }
}
