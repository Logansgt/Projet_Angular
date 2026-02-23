import {Component, input, OnInit} from '@angular/core';
import {FaceSnap} from '../models/face-snap';
import {Comp1} from '../comp1/comp1';
import {FaceSnapsService} from '../services/face-snaps.service';
import {Button} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {AutoComplete} from 'primeng/autocomplete';
import {FormsModule} from '@angular/forms';
import {FloatLabel} from 'primeng/floatlabel';
import {IconField} from 'primeng/iconfield';
import {InputIcon} from 'primeng/inputicon';
import {SplitButton} from 'primeng/splitbutton';
import {MenuItem} from 'primeng/api';
import {ToggleButton} from 'primeng/togglebutton';
import {TableModule} from 'primeng/table';
import {DatePipe} from '@angular/common';
import {Rating} from 'primeng/rating';
import {DolarPipe} from '../DolarPipe';
import {Paginator} from 'primeng/paginator';
import {Router} from '@angular/router';
import {PanierService} from '../services/panier.service';

@Component({
  selector: 'app-face-snap-list',
  imports: [DolarPipe, Comp1, Button, InputTextModule, AutoComplete, FormsModule, IconField, InputIcon, SplitButton, ToggleButton, TableModule, DatePipe, Rating, DolarPipe, Paginator],
  templateUrl: './face-snap-list.html',
  styleUrl: './face-snap-list.scss',
})
export class FaceSnapList implements OnInit{

  facesSnap!: FaceSnap[];
  filteredfacesSnap!: FaceSnap[];
  expandedRows: { [key: string]: boolean } = {};
  filtrerNom!: string;
  items!: any[];
  VueTable!: boolean
  first: number = 0;
  rows: number = 3;
  expanded: boolean = false;
  mail!: string;
  infos: any[] = [
    {id : 1 , Nomstock: "Logan Saget", nbstock: 4},
    {id : 2 , Nomstock: "Logan Saget", nbstock: 10},
    {id : 3 , Nomstock: "Logan Saget", nbstock: 3},
    {id : 4 , Nomstock: "Logan Saget", nbstock: 64},
    {id : 5 , Nomstock: "Logan Saget", nbstock: 35},
    {id : 6 , Nomstock: "Logan Saget", nbstock: 21}
  ];

  constructor(private faceSnapsService: FaceSnapsService, protected router: Router, private panierServ: PanierService) {}

  ngOnInit() {
    this.facesSnap = this.faceSnapsService.getSnapFaces();
    this.filteredfacesSnap = this.facesSnap;
    this.items = this.facesSnap;
    this.filtrerNom  ="";

    this.items2=[
      {
        label : "Copier",
        icon: "pi pi-copy",
        command: () => {
          this.copierNom();
        }
      },
      {
        label: "Coller",
        icon: "pi pi-clipboard",
        command: ()=>{
          this.collerNom();
        }
      }
    ]
  }

  onPageChange(event: any){
    this.first = event.first;
    this.rows = event.rows;
  }

  onRowToggle(event: any) {
    this.expandedRows = {};
    for (let row of event.rows) {
      this.expandedRows[row.id] = true;
    }
  }

  getPaginatedSnaps() {
    return this.filteredfacesSnap.slice(this.first, this.first + this.rows);
  }

  copierNom(){
    if(!this.filtrerNom)
      return;
    else{
      navigator.clipboard.writeText(this.filtrerNom); // Ecrit dans le presse papier
    }
  }

  collerNom() {
    navigator.clipboard.readText().then(
      text => {
        this.filtrerNom = text;   // met à jour le ngModel aussi
      });
  }

  filtrerRes(nb: number) {
    if(!nb){
      this.filteredfacesSnap = this.facesSnap;
    }else{
      this.filteredfacesSnap = this.faceSnapsService.getSnapFaces().filter(elt => elt.snaps > nb);
    }
  }

  search(event: any) {
    const query = event.query.toLowerCase(); // récupère le contenur

    this.items = this.facesSnap
      .map(face => face.title) // Remplace tous les face par leur titre
      .filter(title => title.toLowerCase().includes(query)); // filtre
  }


  filtrerResNom(event: Event, value: string) {
    event.stopPropagation();
    if(!value || value === '') {
      this.filteredfacesSnap = this.facesSnap;
    }else{
      this.filteredfacesSnap = this.faceSnapsService.getSnapFaces().filter(elt => elt.title.toLowerCase().includes(value.toLowerCase()));
    }
  }

  protected onview(id:number) {
    this.router.navigateByUrl('facesnaps/'+id); // Méthode pour inclure l'id choisi dans l'url
  }

  protected readonly Number = Number;
  protected items2: MenuItem[] | undefined;
  protected readonly Comp1 = Comp1;

  protected readonly onemptied = onemptied;

  protected goPanier() {
    this.router.navigateByUrl("facesnaps/panier/1")
  }

  protected ajouterPanier(FaceSnap: FaceSnap) {
    const email = prompt("Entrez votre email :");

    if (email) {
      const panier = this.panierServ.getPanierId(email);
      panier.ajouter(FaceSnap);
    }
  }
}
