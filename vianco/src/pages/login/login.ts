import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
    styles: [`
    .title{
        text-align: center;
    }
    `]
})
export class LoginPage {

    constructor(public navCtrl: NavController, private loadingCtrl: LoadingController) {

    }

    onLoginClick(): void {

        let loader = this.loadingCtrl.create({
            content: "Đang xử lý..."
        });
        loader.present();
        setTimeout(() => {
            loader.dismiss();
            this.navCtrl.push(TabsPage);
        }, 1000)
    }

}
