import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { ItemsPage } from '../items/items';
@Component({
    selector: 'page-categories',
    templateUrl: 'categories.html',
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
export class CategoriesPage {
    categories: Category[];
    constructor(public navCtrl: NavController, private loadingCtrl: LoadingController) {
        this.categories = [{
            image: 'assets/img/computer.jpg',
            content: 'Máy tính xách tay'
        }, {
            image: 'assets/img/printer.jpg',
            content: 'Máy in văn phòng'
        }, {
            image: 'assets/img/keyboard.jpg',
            content: 'Bàn phím chơi game'
        }]
    }

    onCardClick(card: Category): void {

        let loader = this.loadingCtrl.create({
            content: "Đang xử lý..."
        });
        loader.present();
        setTimeout(() => {
            loader.dismiss();
            this.navCtrl.push(ItemsPage);
        }, 1000)
    }
}

class Category {
    image: string;
    content: string;
}