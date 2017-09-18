import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
@Injectable()
export class CommonHelper {
    constructor(private alertCtrl: AlertController) { }
    alert(content: string, title = 'Thông báo'): Promise<{}> {
        return new Promise<{}>((resolve, reject) => {
            this.alertCtrl.create({
                title,
                subTitle: content,
                buttons: [{
                    text: 'Đóng',
                    handler: () => {
                        resolve();
                    }
                }]
            }).present();
        })
    }
    confirm(message: string, title = 'Xác nhận', btns = ['Không', 'Có']): Promise<{}> {
        return new Promise<{}>((resolve, reject) => {
            this.alertCtrl.create({
                title,
                message,
                buttons: [
                    {
                        text: btns[0],
                        handler: () => {
                            reject();
                        }
                    },
                    {
                        text: btns[1],
                        handler: () => {
                            resolve();
                        }
                    }
                ]
            }).present();
        })
    }
}
