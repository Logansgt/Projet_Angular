export class FaceSnap {

  location?: string;

  constructor(public title: string,
              public description: string,
              public createdAt: Date,
              public snaps: number,
              public url: string) {}


  addSnap() {
    this.snaps++;
  }

  delSnap(){
    this.snaps--;
  }

  setLocation(location: string) {
    this.location = location;
  }
}
