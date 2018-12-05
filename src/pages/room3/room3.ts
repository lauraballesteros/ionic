import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WeatherPage } from '../weather/weather';
import {ActivityPage} from '../activity/activity';

/**
 * Generated class for the Room3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-room3',
  templateUrl: 'room3.html',
})
export class Room3Page {
  temperatura3;
  event3;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Room3Page');
  }
  goClimate3():void{
    this.navCtrl.push(WeatherPage);
  }
  goActivity3():void{
    this.navCtrl.push(ActivityPage);
  }
  rangeChanged3(event3){
    console.log("Temperatura1: ",event3);
    console.log("Temperatura2: ",this.temperatura3);
  }
}
