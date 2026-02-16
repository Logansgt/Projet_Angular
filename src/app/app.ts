import {Component, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Comp1 } from './comp1/comp1';
import {FaceSnap} from './models/face-snap';
import {FaceSnapList} from './face-snap-list/face-snap-list';
import {Header} from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App{

}
