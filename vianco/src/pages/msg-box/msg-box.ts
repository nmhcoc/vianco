import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the MsgBoxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-msg-box',
  templateUrl: 'msg-box.html',
})
export class MsgBoxPage {

  payload:any={
    title:'',
    content:''
};
cb:any;
constructor(
    private viewCtrl:ViewController,
    private navParams:NavParams
){
    this.payload = navParams.data;
    this.cb = navParams.data.cb;
}

dismiss():void{
    this.viewCtrl.dismiss();
    this.cb();
}

}
