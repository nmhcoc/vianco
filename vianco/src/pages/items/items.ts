import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
@Component({
    selector: 'page-categories',
    templateUrl: 'items.html',
    styles: [`
    .card-title{
        text-align: center;
        background-color: rgba(0, 0, 0, 0.36);
        position: absolute;
        bottom: 0;
        width: 100%;
        color: white;
        padding: 10px 0px;
    }
    .card{position: relative;}
    `]
})
export class ItemsPage {
    items: Item[];
    constructor(public navCtrl: NavController, private loadingCtrl: LoadingController) {
        this.items = [{
            image: 'assets/img/computer.jpg',
            name: 'Máy tính xách tay',
            price: 10000,
            id: '1'
        }, {
            image: 'assets/img/printer.jpg',
            name: 'Máy in văn phòng',
            price: 500000,
            id: '1'
        }, {
            image: 'assets/img/keyboard.jpg',
            name: 'Bàn phím chơi game',
            price: 1000000,
            id: '1'
        }]
    }

    onCardClick(card: Item): void {

        let loader = this.loadingCtrl.create({
            content: "Đang xử lý..."
        });
        loader.present();
        setTimeout(() => {
            loader.dismiss();
            this.navCtrl.push(DetailPage);
        }, 1000)
    }
}

class Item {
    image: string;
    name: string;
    price: number;
    id: string;
}