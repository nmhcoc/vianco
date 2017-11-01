import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PayPage } from '../pay/pay';
import { DetailOrderPage } from '../detail-order/detail-order';
/**
 * Generated class for the ListOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-order',
  templateUrl: 'list-order.html',
})
export class ListOrderPage {
  items:Array<any>=[
    {
      name:'Bong den',
      price:'1000',
      paid:true
    },
    {
      name:'Bong den',
      price:'1000',
      paid:false
    },
    {
      name:'Bong den',
      price:'1000',
      paid:true
    },
    {
      name:'Bong den',
      price:'1000',
      paid:false
    },
    ,
    {
      name:'Bong den',
      price:'1000',
      paid:false
    },
    {
      name:'Bong den',
      price:'1000',
      paid:true
    },
    {
      name:'Bong den',
      price:'1000',
      paid:false
    },,
    {
      name:'Bong den',
      price:'1000',
      paid:false
    },
    {
      name:'Bong den',
      price:'1000',
      paid:true
    },
    {
      name:'Bong den',
      price:'1000',
      paid:false
    },,
    {
      name:'Bong den',
      price:'1000',
      paid:false
    },
    {
      name:'Bong den',
      price:'1000',
      paid:true
    },
    {
      name:'Bong den',
      price:'1000',
      paid:false
    },,
    {
      name:'Bong den',
      price:'1000',
      paid:false
    },
    {
      name:'Bong den',
      price:'1000',
      paid:true
    },
    {
      name:'Bong den',
      price:'1000',
      paid:false
    },,
    {
      name:'Bong den',
      price:'1000',
      paid:false
    },
    {
      name:'Bong den',
      price:'1000',
      paid:true
    },
    {
      name:'Bong den',
      price:'1000',
      paid:false
    },
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  gotoCart():void{
    this.navCtrl.push(PayPage);
  }
  gotoDetailOrder():void{
    this.navCtrl.push(DetailOrderPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ListOrderPage');
  }

}
