import {Component, OnInit} from '@angular/core';
import {FaceSnap} from '../models/face-snap';
import {Comp1} from '../comp1/comp1';
import {FaceSnapsService} from '../services/face-snaps.service';
import {Button} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';

@Component({
  selector: 'app-face-snap-list',
  imports: [Comp1, Button, InputTextModule],
  templateUrl: './face-snap-list.html',
  styleUrl: './face-snap-list.scss',
})
export class FaceSnapList implements OnInit{

  facesSnap!: FaceSnap[];
  filteredfacesSnap!: FaceSnap[];

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit() {
    this.facesSnap = this.faceSnapsService.getSnapFaces();
    this.filteredfacesSnap = this.facesSnap;
  }

  filtrerRes(nb: number) {
    if(!nb){
      this.filteredfacesSnap = this.facesSnap;
    }else{
      this.filteredfacesSnap = this.faceSnapsService.getSnapFaces().filter(elt => elt.snaps > nb);
    }
  }


  filtrerResNom(event: Event, value: string) {
    event.stopPropagation();
    if(!value || value === '') {
      this.filteredfacesSnap = this.facesSnap;
    }else{
      this.filteredfacesSnap = this.faceSnapsService.getSnapFaces().filter(elt => elt.title.toLowerCase().includes(value.toLowerCase()));
    }
  }

  protected readonly Number = Number;
}
