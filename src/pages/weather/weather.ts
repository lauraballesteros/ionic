// import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {
  nombre: any;
  temp_actual;

  data: Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.getData();
  }
  getData() {
    var url = 'https://api.openweathermap.org/data/2.5/weather?zip=111821,co&APPID=f3309ebb4797b1c040018c63493a0615&units=metric';
    this.data = this.http.get(url);
    this.data.subscribe(data => {
      console.log(data);
      console.log(data.name);
      console.log(data.main.temp);
      this.nombre =data.name;
      this.temp_actual=data.main.temp;
    });
  }
}
