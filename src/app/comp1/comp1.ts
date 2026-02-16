import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from '../models/face-snap';
import {DatePipe, DecimalPipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe} from '@angular/common';
import {FaceSnapsService} from '../services/face-snaps.service';

@Component({
  selector: 'app-comp1',
  imports: [NgStyle, NgClass, UpperCasePipe, TitleCasePipe, DatePipe, DecimalPipe, PercentPipe],
  templateUrl: './comp1.html',
  styleUrl: './comp1.scss',
})
export class Comp1 implements OnInit{

  constructor(private snapsService: FaceSnapsService) {
  }

  @Input() faceSnap!: FaceSnap;

  snapButton!: string;
  snapOrNot!: boolean;

  ngOnInit(): void {
    this.snapOrNot = false;
    this.snapButton = "snaps"
  }

  onAddSnap() :void{
    if(this.snapOrNot === false){
      this.snapsService.snapFaceById(this.faceSnap.id,'snap');
      this.snapOrNot = true;
      this.snapButton = "UnSnap";
    }else{
      this.snapsService.snapFaceById(this.faceSnap.id,'unsnap');
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
