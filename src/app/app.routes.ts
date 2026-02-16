import { Routes } from '@angular/router';
import {FaceSnapList} from './face-snap-list/face-snap-list';
import {Comp1} from './comp1/comp1';
import {HubPage} from './hub-page/hub-page';

export const routes: Routes = [
  {path: 'facesnaps', component: FaceSnapList},
  {path: '', component: HubPage},
];
