import  {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from '../models/face-snap';
import {DatePipe, DecimalPipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe} from '@angular/common';
import {FaceSnapsService} from '../services/face-snaps.service';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {StarPipe} from '../PipeTest';
import {Button} from 'primeng/button';
import {Checkbox} from 'primeng/checkbox';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-single-face-snap',
  imports: [NgStyle, NgClass, UpperCasePipe, TitleCasePipe, DatePipe, DecimalPipe, PercentPipe, RouterLink, StarPipe, Button, Checkbox, FormsModule],
  templateUrl: './single-face-snap.html',
  styleUrl: './single-face-snap.scss',
})
export class SingleFaceSnap implements OnInit{

  constructor(private snapsService: FaceSnapsService,
  private route: ActivatedRoute) {
  }

  faceSnap!: FaceSnap;
  snapButton!: string;
  snapOrNot!: boolean;
  Nombre!: boolean;
  Pourcent !: boolean;

  ngOnInit(): void {
    this.snapOrNot = false;
    this.snapButton = "snaps";
    this.Pourcent = false;
    this.Nombre = false;

    const faceSnapId = this.route.snapshot.params['id']; // Récup le face snap qui correspond a l'id dans l'url
    this.faceSnap = this.snapsService.getSnapById(faceSnapId); // On va récup le faceSnap qui correspond a cette id pour l'afficher
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
