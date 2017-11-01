import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { UserInfoPage } from '../userInfo/userInfo';
import { DataService } from '../../shared/dataService';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  styles: [`
  .avatar{
    max-width: 100%;
    border: 0;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    margin: auto;
    display: block;
  },
  `]
})
export class ProfilePage {

  constructor(
    public navCtrl: NavController,
    private modalCtrl: ModalController,
    private dsv: DataService,
    private camera:Camera
  ) {
  }
  takePicture(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
      console.log('====================================');
      console.log(imageData);
      console.log('====================================');
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }
  onUserInfoClick(): void {

    let modal = this.modalCtrl.create(UserInfoPage);
    modal.present();
  }

}
