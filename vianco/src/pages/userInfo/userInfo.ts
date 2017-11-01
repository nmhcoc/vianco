import { Component } from '@angular/core';
import { NavController, ViewController, LoadingController } from 'ionic-angular';
import { UserService } from '../../shared/userService';
import { CommonHelper } from '../../shared/commonHelper';
import { User } from '../../shared/models/user';
import { DataService } from '../../shared/dataService';
import { OnInit } from '@angular/core';
@Component({
  selector: 'page-user-info',
  templateUrl: 'userInfo.html',
  styles: [`
  .avatar{
    max-width: 100%;
    border: 0;
    border-radius: 50%;
    margin: auto;
    display: block;
    width: 100px;
    height: 100px;
  },
  userinfo.scss
  `]
})
export class UserInfoPage implements OnInit{
  data: User;
  location:any= {
    districts:[],
    provinces:[],
    wards:[]
  }
  district :string;
  province:string;
  ward:string;
  districts :any[];
  wards:any[];
  constructor(
    public navCtrl: NavController,
    private viewCtrl: ViewController,
    private userService: UserService,
    private common: CommonHelper,
    private loadingCtrl: LoadingController,
    private dsv : DataService
  ) {
    this.data = this.userService.getUserInfo();
    this.data.avatar = 'https://i.ytimg.com/vi/R-3nQX8EE8o/maxresdefault.jpg'
  }

  ngOnInit(){
    this.dsv.get('locations.json').then(rs=>{
      console.log('====================================');
      console.log(rs);
      console.log('====================================');
      this.location = rs;
    })
  }
  dismiss(): void {
    this.viewCtrl.dismiss();
  }
  changeCity(id){
    this.province = id;
    this.districts = [];
    
    this.location.districts.map(el=>{
      if(el.parent == id){
        this.districts.push(el)
      }
    })
  }

  changeDistricts(id){
    this.district = id;
    this.wards = [];
    
    this.location.wards.map(el=>{
      if(el.parent == id){
        this.wards.push(el)
      }
    })
  }
  onSaveClick(): void {
    this.common.confirm("Bạn có chắc muốn lưu thông tin?").then(() => {
      console.log('you click ok');
      let loader = this.loadingCtrl.create({
        content: "Đang xử lý..."
      });
      loader.present();
      setTimeout(() => {
        loader.dismiss();
        this.common.alert("Lưu thông tin thành công");
      }, 1000);
    }, () => {
      console.log('you click no');
    })
  }
}
