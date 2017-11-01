import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap, CameraPosition, GoogleMapsEvent, LatLng,GoogleMapOptions
} from '@ionic-native/google-maps';
/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  map: GoogleMap;
  mapElement: HTMLElement;
  screen:any={
    height:800,
    width:480
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps, private platform: Platform) {
    platform.ready().then(readySource=>{
      this.screen = {
        height:platform.height(),
        width:platform.width()
      }
    })

  }
  ionViewDidLoad() {
    this.platform.ready().then(payload => {
      this.loadMap();
    });
  }
  loadMap = () => {
   this.mapElement = document.getElementById('map');
   let mapOptions: GoogleMapOptions = {
    camera: {
      target: {
        lat: 43.0741904,
        lng: -89.3809802
      },
      zoom: 18,
      tilt: 30
    }
  };
    
  this.map = this.googleMaps.create(this.mapElement, mapOptions);
  this.map.one(GoogleMapsEvent.MAP_READY)
  .then(payload=>{
    alert('1')
    console.log('====================================');
    console.log('success');
    console.log('====================================');
  }).catch(err=>{
    alert(err)
    console.log('====================================');
    console.log(err);
    console.log('====================================');
  })
  }
}
