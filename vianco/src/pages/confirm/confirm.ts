import { Component } from '@angular/core';
import { NavController, ViewController,NavParams } from 'ionic-angular';

@Component({
    selector: 'modal-comfirm',
    templateUrl: 'confirm.html'
})
export class ConfirmModal {
    payload:any={
        title:'Xác nhận',
        content:'',
        labelOK:'Xác nhận',
        labelCancel:'Đóng'
    };
    ok():void{
        this.viewCtrl.dismiss();
        if(this.onOk) this.onOk();
    }
    cancel():void{
        this.viewCtrl.dismiss();
        if(this.onCancel) this.onCancel();        
    }
    onOk():void{
        
    };
    onCancel():void{
        
    };
    constructor(
        private viewCtrl:ViewController,
        private navParams:NavParams
    ){
        let {title,content,labelOK,labelCancel,cb,onOK,onCancel} = navParams.data;
        if(title) this.payload.title = title;
        if(content) this.payload.content = content;
        if(labelOK) this.payload.labelOK = labelOK;
        if(labelCancel) this.payload.labelCancel = labelCancel;
        if(onOK) this.onOk = onOK;
        if(onCancel) this.onCancel = onCancel;
    }
}