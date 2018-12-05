import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {WeatherPage} from '../weather/weather';
import { ActivityPage } from '../activity/activity';
@IonicPage()
@Component({
  selector: 'page-room1',
  templateUrl: 'room1.html',
})
export class Room1Page {
  temperatura;
  event;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Room1Page');
  }
  goClimate():void{
    this.navCtrl.push(WeatherPage);
  }
  goActivity():void{
    this.navCtrl.push(ActivityPage);
  }
  rangeChanged(event){
    console.log("Temperatura1: ",event);
    console.log("Temperatura2: ",this.temperatura);
  }
}
