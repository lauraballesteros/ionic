import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddRoomPageModule } from '../pages/add-room/add-room.module';
import {Room1PageModule} from '../pages/room1/room1.module';
import {Room2PageModule} from '../pages/room2/room2.module';
import {Room3PageModule} from '../pages/room3/room3.module';
import {Room4PageModule} from '../pages/room4/room4.module';
import {WeatherPageModule} from '../pages/weather/weather.module';
import { ActivityPageModule } from '../pages/activity/activity.module';
import { HttpClientModule } from '@angular/common/http'; 
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AddRoomPageModule,
    Room1PageModule,
    Room2PageModule,
    Room3PageModule,
    Room4PageModule,
    WeatherPageModule,
    ActivityPageModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
