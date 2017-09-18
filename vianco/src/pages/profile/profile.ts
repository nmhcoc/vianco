import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { UserInfoPage } from '../userInfo/userInfo';
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController, private modalCtrl: ModalController) {


  }

  onUserInfoClick(): void {
    let modal = this.modalCtrl.create(UserInfoPage);
    modal.present();
  }

}
