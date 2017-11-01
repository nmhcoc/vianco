import { Component } from '@angular/core';
import { NavController, LoadingController,ModalController } from 'ionic-angular';
import { ItemsPage } from '../items/items';
import { DetailPage } from '../detail/detail';
import { MapPage } from '../map/map';
import { UserInfoPage } from '../userInfo/userInfo';
import { PayPage } from '../pay/pay';
import { ListOrderPage } from '../list-order/list-order';
import { NewsPage } from '../news/news';
import { UserService } from '../../shared/userService';
import { OnInit } from '@angular/core';
import { CategoryPage } from '../category/category';
import { SearchPage } from '../search/search';
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
  `, 'home.scss']
})
export class HomePage implements OnInit {
  data: ItemDetail;
  tab = 'main'; //categories
  categories: Category[];
  category: number = 0;
  constructor(
    public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private user: UserService,
    private modalCtrl:ModalController
  ) {
    this.data = {
      images: ['assets/img/computer.jpg', 'assets/img/printer.jpg', 'assets/img/keyboard.jpg', 'assets/img/computer.jpg', 'assets/img/printer.jpg', 'assets/img/keyboard.jpg'],
      name: 'Máy tính xách tay',
      price: 10000,
      id: '1',
      info: 'Máy tính cấu hình cao cho việc choi game. Chơi tốt các game như dota, lol'
    };
    this.categories = [{
      image: 'http://www.egro.vn/upload/images/10a-bong-den-compact-philips-5w-3u-vanggenie-warm-white.jpg',
      content: 'Bóng đèn'
    }, {
      image: 'http://www.egro.vn/upload/images/10a-bong-den-compact-philips-5w-3u-vanggenie-warm-white.jpg',
      content: 'Công tắc'
    }, {
      image: 'http://www.egro.vn/upload/images/10a-bong-den-compact-philips-5w-3u-vanggenie-warm-white.jpg',
      content: 'Aptomat'
    }, {
      image: 'http://www.egro.vn/upload/images/10a-bong-den-compact-philips-5w-3u-vanggenie-warm-white.jpg',
      content: 'Cầu chì'
    }, {
      image: 'http://www.egro.vn/upload/images/10a-bong-den-compact-philips-5w-3u-vanggenie-warm-white.jpg',
      content: 'Cầu dao'
    }, {
      image: 'http://www.egro.vn/upload/images/10a-bong-den-compact-philips-5w-3u-vanggenie-warm-white.jpg',
      content: 'Ổ cắm'
    }

    ]
  }
  notification = 5;

  ngOnInit() {
    console.log('====================================');
    console.log(this.user.getUserInfo());
    console.log('====================================');
  }
  gotoCart(): void {
    this.navCtrl.push(PayPage);
  }
  gotoUserInfo(): void {
    this.navCtrl.push(UserInfoPage);
  }
  gotoMap(): void {
    this.navCtrl.push(MapPage);
  }
  onItemClick(): void {
    this.navCtrl.push(DetailPage);
  }
  exit(): void {
    this.navCtrl.pop();
  }
  gotoNews(): void {
    this.navCtrl.push(NewsPage);
  }
  gotoListOrder(): void {
    this.navCtrl.push(ListOrderPage);
  }
  gotoCategory(e) {
    this.category = 0;
    this.navCtrl.push(CategoryPage);
  }
  gotoSearch(){
    let s = this.modalCtrl.create(SearchPage);
    s.present();
    s.onDidDismiss(data=>{
      console.log('====================================');
      console.log(data);
      console.log('====================================');
    })
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