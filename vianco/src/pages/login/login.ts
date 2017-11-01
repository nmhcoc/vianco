import { Component } from '@angular/core';
import { NavController, LoadingController, ModalController } from 'ionic-angular';
// import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { HomePage } from '../home/home';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ConfirmModal } from '../confirm/confirm';
import { MsgBoxPage } from '../msg-box/msg-box';
import { OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { UserService } from '../../shared/userService';
import { DataService } from '../../shared/dataService';
import { CommonHelper } from '../../shared/commonHelper';
// background: url(assets/img/login-bg.jpg) no-repeat center center fixed; 
// -webkit-background-size: cover;
// -moz-background-size: cover;
// -o-background-size: cover;
// background-size: cover;
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
    styles: [`
    .title{
        text-align: center;
        color:black;
        padding-bottom:50px
    }
    .login-bg{
        
    }
    .item-md{
        background-color: transparent;
    }
    .input-has-focus .label-md[floating]{
        color:white;
    }
    .list-md .item-input{
        color:white;
    }
    .item-input .label-md{
        color: white;
        opacity: 0.9;
    }
    .item-md.item-input.item-input-has-focus .item-inner,
    .item-md.item-input.input-has-focus .item-inner{
        border-bottom-color: #dedede;

    }
    .list-md .item-input {
        border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    },
    login.scss
    `]
})
export class LoginPage implements OnInit {
    username: string;
    password: string;
    constructor(
        public navCtrl: NavController,
        private loadingCtrl: LoadingController,
        private camera: Camera,
        private modalCtrl: ModalController,
        private storage: Storage,
        private user: UserService,
        private dsv: DataService,
        private UI: CommonHelper
    ) {
        // this.forgotPassword()
    }
    ngOnInit() {


        // this.storage.get('userInfo').then(rs => {
        //     if (rs) {
        //         if (rs.refreshToken) {
        //             console.log('====================================');
        //             console.log(rs);
        //             console.log('====================================');
        //             let loader = this.loadingCtrl.create({
        //                 content: "Đang xử lý..."
        //             });
        //             loader.present();
        //             this.dsv.refreshToken(rs.refreshToken)
        //                 .then(rs => {
        //                     let res: any = rs;
        //                     loader.dismiss();

        //                     if (res.err == 0) {
        //                         this.user.setUserInfo(res.user);
        //                         this.navCtrl.push(HomePage);
        //                         this.storage.set('userInfo', {
        //                             ...res.user, token: res.token, refreshToken: res.refreshToken
        //                         });
        //                     } else {
        //                         this.UI.alert('Loi toe loe', 'Thong bao');
        //                     }
        //                 })
        //         }
        //     }
        // });

    }
    signup = () => {
        this.navCtrl.push(SignupPage);
    }
    forgotPassword(): void {
        // const msg = this.modalCtrl.create(ConfirmModal,{
        //     title:'Xac nhan',
        //     content:'May muon gi',
        //     onOK:()=>{
        //         console.log('====================================');
        //         console.log('ok');
        //         console.log('====================================');
        //     },
        //     onCancel():void{
        //         console.log('====================================');
        //         console.log('cancel');
        //         console.log('====================================');
        //     }
        // });

        // msg.present();
        this.navCtrl.push(ForgotPasswordPage);
    }
    signin = () => {
        // const options: CameraOptions = {
        //     quality: 100,
        //     destinationType: this.camera.DestinationType.DATA_URL,
        //     encodingType: this.camera.EncodingType.JPEG,
        //     mediaType: this.camera.MediaType.PICTURE
        //   }

        //   this.camera.getPicture(options).then((imageData) => {
        //    // imageData is either a base64 encoded string or a file URI
        //    // If it's base64:
        //    let base64Image = 'data:image/jpeg;base64,' + imageData;
        //   }, (err) => {
        //    // Handle error
        //   });
        // // if(!(this.username && this.password)) return alert(this.username);
        let loader = this.loadingCtrl.create({
            content: "Đang xử lý..."
        });
        loader.present();
        this.dsv.login('caugiay', '123456').then(rs => {
            console.log('====================================');
            console.log(rs);
            console.log('====================================');
            let res: any = rs;
            loader.dismiss();
            if (res.err == 0) {
                this.user.setUserInfo(res.user);
                this.navCtrl.push(HomePage);
                this.storage.set('userInfo', {
                    ...res.user, token: res.token, refreshToken: res.refreshToken
                });
            } else {
                this.UI.alert('Loi toe loe', 'Thong bao');
            }
        })
    }

}
