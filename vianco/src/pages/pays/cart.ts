import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cart_item } from '../../shared/models/card_item';
/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
  styles:[`
    cart.scss
  `]
})
export class CartPage {
  list_item:Cart_item[] = [
    new Cart_item()
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }
  changeAmount(type):void{
    if(type == '+'){
      this.list_item[0].amount ++;
    }else if(this.list_item[0].amount != 1){
      this.list_item[0].amount --;      
    }
  }
}
