import {SnapType} from './snap-type.type';
import {FormControl, FormGroup} from '@angular/forms';
import {Rating} from 'primeng/rating';

export class FaceSnap {

  location?: string;
  id: string;

  constructor(public title: string,
              public description: string,
              public prix:number,
              public createdAt: Date,
              public snaps: number,
              public url: string,
              public rating: number) {
    this.id = crypto.randomUUID();
  }

  snap(snapType: SnapType){
    if(snapType === 'snap'){
      this.addSnap()
    }else{
      this.delSnap();
    }
  }

  addSnap() {
    this.snaps++;
  }

  delSnap(){
    this.snaps--;
  }

  setLocation(location: string) {
    this.location = location;
  }

  withLocation(location: string): FaceSnap{
      this.setLocation(location);
      return this;
    }

}
