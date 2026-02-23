import {Component, OnInit} from '@angular/core';
import {TableModule} from 'primeng/table';
import {PanierService} from '../services/panier.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FaceSnap} from '../models/face-snap';
import {Rating} from 'primeng/rating';
import {Button} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import {DolarPipe} from '../DolarPipe';
import {DatePipe} from '@angular/common';
import {AutoComplete} from 'primeng/autocomplete';
import {IconField} from 'primeng/iconfield';
import {InputIcon} from 'primeng/inputicon';
import {InputText} from 'primeng/inputtext';
import {SplitButton} from 'primeng/splitbutton';
import {Panier} from '../models/Panier';

@Component({
  selector: 'app-panier',
  imports: [
    TableModule,
    Rating,
    Button,
    FormsModule,
    DolarPipe,
    DatePipe,
  ],
  templateUrl: './panier.html',
  styleUrl: './panier.scss',
})
export class panier implements OnInit {
  protected p!: Panier;
  protected art!: FaceSnap[];

  constructor(private panierServ: PanierService,private route: ActivatedRoute, private routeBack: Router) {
  }

  ngOnInit() {
    const panierid = this.route.snapshot.params['idUser'];
    this.p = this.panierServ.getPanierId(panierid);
    this.art = this.p.getArticles();
  }


}
