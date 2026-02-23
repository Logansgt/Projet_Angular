import { Routes } from '@angular/router';
import {FaceSnapList} from './face-snap-list/face-snap-list';
import {Comp1} from './comp1/comp1';
import {HubPage} from './hub-page/hub-page';
import {SingleFaceSnap} from './single-face-cnap/single-face-snap';
import {from} from 'rxjs';
import {CreerCompte} from './creer-compte/creer-compte';
import {panier} from './panier/panier';


export const routes: Routes = [
  {path: 'facesnaps/panier/:idUser', component: panier},
  {path: 'creerUser', component: CreerCompte},
  {path: 'facesnaps/:id', component: SingleFaceSnap}, // La route avec l'id du snap afficher
  {path: 'facesnaps', component: FaceSnapList}, // Affichage de la liste des composants avec le bouton pour modif la route
  {path: '', component: HubPage},
];
