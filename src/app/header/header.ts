import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {Button} from 'primeng/button';
import {Avatar} from 'primeng/avatar';
import {ToggleSwitch} from 'primeng/toggleswitch';
import {FormsModule} from '@angular/forms';
import {colorScheme} from '@primeuix/themes/aura/tag';
import {PrimeNG} from 'primeng/config';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, Button, Avatar, ToggleSwitch, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {

  modeSombre = false;
  constructor(private primeng :PrimeNG) {
  }


  protected toggleDarkMode() {
    const element = document.querySelector('html');
    if(element !== null){
      element.classList.toggle('my-app-dark');
    }
  }

  ngOnInit() {
    this.primeng.ripple.set(true);
  }

  switchLight = {
    handle: {
      borderRadius: '4px'
    },
    colorScheme:{
      light: {
        root: {
          borderRadius: '4px',
          color: '{violet.500}'
        }
      },
      dark: {
        root: {
          borderRadius: '4px'
        },
      }
    }
  };

}
