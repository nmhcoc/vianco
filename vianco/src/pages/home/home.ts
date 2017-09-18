import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { ItemsPage } from '../items/items';
import { DetailPage } from '../detail/detail';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styles: [`
  .notification-btn{
    padding: 0 10px;
  }
  .badge{
    background-color: red;
    border-radius: 2px;
    padding: 3px 5px;
    font-size: 12px;
    line-height: 12px;
    position: absolute;
    margin-top: -10px;
    margin-left: 10px;
  }
  .card{
    position: relative;
  }
  .card img{
    -webkit-filter: blur(5px); /* Safari */
    filter: blur(5px);
  }
  p.card-title{
    position: absolute;
    margin: auto;
    display: block;
    width: 100%;
    text-align: center;
    top: 0;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.29);
    color: white;
    font-size: 36px;
    padding-bottom: 50%;
  }
  `]
})
export class HomePage {
  data: ItemDetail;
  tab = 'main'; //categories
  categories: Category[];
  constructor(public navCtrl: NavController, private loadingCtrl: LoadingController) {
    this.data = {
      images: ['assets/img/computer.jpg', 'assets/img/printer.jpg', 'assets/img/keyboard.jpg', 'assets/img/computer.jpg', 'assets/img/printer.jpg', 'assets/img/keyboard.jpg'],
      name: 'Máy tính xách tay',
      price: 10000,
      id: '1',
      info: 'Máy tính cấu hình cao cho việc choi game. Chơi tốt các game như dota, lol'
    };
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
  notification = 5;

  onItemClick(): void {
    this.navCtrl.push(DetailPage);
  }
  onCardClick(card: Category): void {

    let loader = this.loadingCtrl.create({
      content: "Đang xử lý..."
    });
    loader.present();
    setTimeout(() => {
      loader.dismiss();
      this.navCtrl.push(ItemsPage);
    }, 0)
  }
}

class ItemDetail {
  images: string[];
  name: string;
  price: number;
  id: string;
  info: string;
}
class Category {
  image: string;
  content: string;
}