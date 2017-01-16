import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { FbdbService } from '../../providers/fbdb-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myList: FirebaseListObservable<any[]>;
  myObject: FirebaseObjectObservable<any>;

  constructor(public navCtrl: NavController, public fbdb: FbdbService) {
    
  }

  ionViewDidLoad() {
    //Here is a reasonable place to load stuff from Firebase via FbdbService
    //this.myList = this.fbdb.getMyList();
    //this.myObject = this.fbdb.getMyObject();
  }


}
