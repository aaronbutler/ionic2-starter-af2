import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import 'rxjs/add/operator/map';

@Injectable()
export class FbdbService {
    constructor(public af: AngularFire) {
        console.log('Hello FbdbService Provider');
    }

    getMyList(): FirebaseListObservable<any[]> {
        return this.af.database.list(`/myRootList`);
    }

    getMyObject(): FirebaseObjectObservable<any> {
        return this.af.database.object(`/myRootList/someObject`);
    }
}
