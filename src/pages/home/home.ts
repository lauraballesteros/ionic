import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AddRoomPage } from '../add-room/add-room';
import {Room1Page} from '../room1/room1';
import{Room2Page} from '../room2/room2';
import{Room3Page} from '../room3/room3';
import{Room4Page} from '../room4/room4';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goAddRoom():void{
    this.navCtrl.push(AddRoomPage);
  }
  goRoom1():void{
    this.navCtrl.push(Room1Page);
  }
  goRoom2():void{
    this.navCtrl.push(Room2Page);
  }
  goRoom3():void{
    this.navCtrl.push(Room3Page);
  }
  goRoom4():void{
    this.navCtrl.push(Room4Page);
  }
}
