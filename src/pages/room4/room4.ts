import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WeatherPage } from '../weather/weather';
import {ActivityPage} from '../activity/activity';

/**
 * Generated class for the Room4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-room4',
  templateUrl: 'room4.html',
})
export class Room4Page {
  temperatura4;
  event4;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Room4Page');
  }
  goClimate4():void{
    this.navCtrl.push(WeatherPage);
  }
  goActivity4():void{
    this.navCtrl.push(ActivityPage);
  }
  rangeChanged4(event4){
    console.log("Temperatura1: ",event4);
    console.log("Temperatura2: ",this.temperatura4);
  }
}
