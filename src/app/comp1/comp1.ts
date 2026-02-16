import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from '../models/face-snap';
import {NgClass, NgStyle} from '@angular/common';

@Component({
  selector: 'app-comp1',
  imports: [NgStyle, NgClass],
  templateUrl: './comp1.html',
  styleUrl: './comp1.scss',
})
export class Comp1 implements OnInit{
  @Input() faceSnap!: FaceSnap;

  snapButton!: string;
  snapOrNot!: boolean;

  ngOnInit(): void {
    this.snapOrNot = false;
    this.snapButton = "snaps"
  }

  onAddSnap() :void{
    if(this.snapOrNot === false){
      this.faceSnap.addSnap();
      this.snapOrNot = true;
      this.snapButton = "UnSnap";
    }else{
      this.faceSnap.delSnap();
      this.snapOrNot = false;
      this.snapButton = "snaps";
    }
  }

  changerCouleur():number{
    if(this.faceSnap.snaps <10){
      return 0;
    }else if(this.faceSnap.snaps <50){
      return 75;
    }else{
      return 150;
    }
  }
}
