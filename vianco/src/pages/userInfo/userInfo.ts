import { Component } from '@angular/core';
import { NavController, ViewController, LoadingController } from 'ionic-angular';
import { UserService } from '../../shared/userService';
import { CommonHelper } from '../../shared/commonHelper';
import { User } from '../../shared/models/user';

@Component({
  selector: 'page-user-info',
  templateUrl: 'userInfo.html',
  styles: [`
  .avatar{
    max-width: 100%;
    border: 0;
    border-radius: 50%;
    width: 100px;
    margin: auto;
    display: block;
  }
  `]
})
export class UserInfoPage {
  data: User;
  constructor(public navCtrl: NavController, private viewCtrl: ViewController, private userService: UserService,
    private common: CommonHelper,
    private loadingCtrl: LoadingController) {
    this.data = this.userService.getUserInfo();
  }
  dismiss(): void {
    this.viewCtrl.dismiss();
  }

  onSaveClick(): void {
    this.common.confirm("Bạn có chắc muốn lưu thông tin?").then(() => {
      console.log('you click ok');
      let loader = this.loadingCtrl.create({
        content: "Đang xử lý..."
      });
      loader.present();
      setTimeout(() => {
        loader.dismiss();
        this.common.alert("Lưu thông tin thành công");
      }, 1000);
    }, () => {
      console.log('you click no');
    })
  }
}
