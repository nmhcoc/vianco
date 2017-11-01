import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
    selector: 'page-detail',
    templateUrl: 'detail.html',
    styles: [`
        detail.scss
    `]
})
export class DetailPage {
    data: ItemDetail;
    comments: Comment[];
    tab = 'info';
    amount:number=1;
    star:number=1;
    constructor(public navCtrl: NavController) {
        this.data = {
            images: ['assets/img/computer.jpg', 'assets/img/printer.jpg', 'assets/img/keyboard.jpg'],
            name: 'Máy tính xách tay',
            price: 10000,
            id: '1',
            info: 'Máy tính cấu hình cao cho việc choi game. Chơi tốt các game như dota, lol'
        };
        this.comments = [{
            avatar: 'assets/img/avatar.png',
            content: 'Máy chạy nhanh, ổn định',
            date: '5/8/2018'
        }, {
            avatar: 'assets/img/avatar.png',
            content: 'Máy chạy nhanh, ổn định',
            date: '5/8/2018'
        }, {
            avatar: 'assets/img/avatar.png',
            content: 'Máy chạy nhanh, ổn định',
            date: '5/8/2018'
        }, {
            avatar: 'assets/img/avatar.png',
            content: 'Máy chạy nhanh, ổn định',
            date: '5/8/2018'
        }]
    }
    onItemClick():void{
        this.navCtrl.push(DetailPage);
    }
    changeStar(value):void{
        this.star = value;
    }
    changeAmount(value):void{
        if(value == '+'){
            this.amount ++;
        }else if (this.amount >1){
            this.amount --;
        }
    }
}

class ItemDetail {
    images: string[];
    name: string;
    price: number;
    id: string;
    info: string;
}

class Comment {
    avatar: string;
    content: string;
    date: string;
}