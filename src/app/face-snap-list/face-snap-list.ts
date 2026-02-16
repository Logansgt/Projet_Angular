import {Component, OnInit} from '@angular/core';
import {FaceSnap} from '../models/face-snap';
import {Comp1} from '../comp1/comp1';
import {FaceSnapsService} from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  imports: [Comp1],
  templateUrl: './face-snap-list.html',
  styleUrl: './face-snap-list.scss',
})
export class FaceSnapList implements OnInit{

  facesSnap!: FaceSnap[];

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit() {
    this.facesSnap = this.faceSnapsService.getSnapFaces();
  }
}
