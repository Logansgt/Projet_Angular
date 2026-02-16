import { Component } from '@angular/core';
import {RouterLink,Router} from '@angular/router';

@Component({
  selector: 'app-hub-page',
  imports: [RouterLink],
  templateUrl: './hub-page.html',
  styleUrl: './hub-page.scss',
})
export class HubPage {

  constructor(private router: Router) {
  }

  onContinue(): void {
    this.router.navigateByUrl('facesnaps');
  }

}
