import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cart_item } from '../../shared/models/card_item';
import { PayInfoPage } from '../pay-info/pay-info';

/**
 * Generated class for the PayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pay',
  templateUrl: 'pay.html',
  styles: [
    'pay.scss'
  ]
})
export class PayPage {
  list_item: Cart_item[] = [
    new Cart_item()
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayPage');
  }
  changeAmount(type): void {
    if (type == '+') {
      this.list_item[0].amount++;
    } else if (this.list_item[0].amount != 1) {
      this.list_item[0].amount--;
    }
  }

  gotoPayInfo(): void {
    this.navCtrl.push(PayInfoPage);
  }
}
