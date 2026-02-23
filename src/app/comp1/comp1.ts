import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from '../models/face-snap';
import {
  DatePipe,
  DecimalPipe,
  NgClass,
  NgOptimizedImage,
  NgStyle,
  PercentPipe,
  TitleCasePipe,
  UpperCasePipe
} from '@angular/common';
import {FaceSnapsService} from '../services/face-snaps.service';
import {Router, RouterLink} from '@angular/router';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {InputText} from 'primeng/inputtext';
import {Card} from 'primeng/card';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-comp1',
  imports: [NgClass, TitleCasePipe, RouterLink, FormsModule, ReactiveFormsModule, NgOptimizedImage, NgStyle, InputText, Card, Button, DatePipe],
  templateUrl: './comp1.html',
  styleUrl: './comp1.scss',
})
export class Comp1{

  constructor(private router: Router){}

  @Input() faceSnap!: FaceSnap;


  protected onview() {
   this.router.navigateByUrl('facesnaps/'+this.faceSnap.id); // Méthode pour inclure l'id choisi dans l'url
  }
}
