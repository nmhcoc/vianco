import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { PayPage } from '../pay/pay';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  items:Array<any>=[
    {
      img:'https://tamsucongai.net/wp-content/uploads/2017/04/full-bo-anh-nude-tho-dan-cuc-shock-cua-hotgirl-hua-pham-linda-2.png',
      name:'Bong den 24 W',
      price:'25000'
    },
    {
      img:'https://tamsucongai.net/wp-content/uploads/2017/04/full-bo-anh-nude-tho-dan-cuc-shock-cua-hotgirl-hua-pham-linda-2.png',
      name:'Bong den 24 W',
      price:'25000'
    },
    {
      img:'https://tamsucongai.net/wp-content/uploads/2017/04/full-bo-anh-nude-tho-dan-cuc-shock-cua-hotgirl-hua-pham-linda-2.png',
      name:'Bong den 24 W',
      price:'25000'
    },
    {
      img:'https://tamsucongai.net/wp-content/uploads/2017/04/full-bo-anh-nude-tho-dan-cuc-shock-cua-hotgirl-hua-pham-linda-2.png',
      name:'Bong den 24 W',
      price:'25000'
    },
    {
      img:'https://tamsucongai.net/wp-content/uploads/2017/04/full-bo-anh-nude-tho-dan-cuc-shock-cua-hotgirl-hua-pham-linda-2.png',
      name:'Bong den 24 W',
      price:'25000'
    },
    {
      img:'https://tamsucongai.net/wp-content/uploads/2017/04/full-bo-anh-nude-tho-dan-cuc-shock-cua-hotgirl-hua-pham-linda-2.png',
      name:'Bong den 24 W',
      price:'25000'
    },
    {
      img:'https://tamsucongai.net/wp-content/uploads/2017/04/full-bo-anh-nude-tho-dan-cuc-shock-cua-hotgirl-hua-pham-linda-2.png',
      name:'Bong den 24 W',
      price:'25000'
    },
    {
      img:'https://tamsucongai.net/wp-content/uploads/2017/04/full-bo-anh-nude-tho-dan-cuc-shock-cua-hotgirl-hua-pham-linda-2.png',
      name:'Bong den 24 W',
      price:'25000'
    },
    {
      img:'https://tamsucongai.net/wp-content/uploads/2017/04/full-bo-anh-nude-tho-dan-cuc-shock-cua-hotgirl-hua-pham-linda-2.png',
      name:'Bong den 24 W',
      price:'25000'
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }
  viewDetail():void{
    this.navCtrl.push(DetailPage);
  }

  gotoCart():void{
    this.navCtrl.push(PayPage);
  }
}
