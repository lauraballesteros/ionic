import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {WeatherPage} from '../weather/weather';
import {ActivityPage} from '../activity/activity';
/**
 * Generated class for the Room2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-room2',
  templateUrl: 'room2.html',
})
export class Room2Page {
  temperatura2;
  event2;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Room2Page');
  }
  goClimate2():void{
    this.navCtrl.push(WeatherPage);
  }
  goActivity2():void{
    this.navCtrl.push(ActivityPage);
  }
  rangeChanged2(event2){
    console.log("Temperatura1: ",event2);
    console.log("Temperatura2: ",this.temperatura2);
  }
}
