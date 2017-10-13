import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
    styles: [`
    .title{
        text-align: center;
        color:white;
    }
    .login-bg{
        background: url(assets/img/login-bg.jpg) no-repeat center center fixed; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
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
    }
    `]
})
export class LoginPage {

    constructor(public navCtrl: NavController, private loadingCtrl: LoadingController) {

    }

    onLoginClick=()=> {

        let loader = this.loadingCtrl.create({
            content: "Đang xử lý..."
        });
        loader.present();
        setTimeout(() => {
            loader.dismiss();
            this.navCtrl.push(TabsPage);
        }, 0)
    }

}
