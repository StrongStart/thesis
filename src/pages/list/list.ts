import { Component } from '@angular/core';

import { NavController, NavParams, Platform } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { NativeAudio } from '@ionic-native/native-audio';
import { Geolocation } from '@ionic-native/geolocation';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage {
  platform: Platform
  plat: String = ''
  coord: Array<number> = [0, 0]
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation,
    platform:Platform,
    ) {
      this.plat = 'phone'
      if (this.plat === 'phone') {
        platform.ready().then(() => {
          let watch = this.geolocation.watchPosition();
          watch.subscribe((data) => {
            this.coord[0] = data.coords.latitude;
            this.coord[1] = data.coords.longitude;
          })
        })
      }
    }
}
