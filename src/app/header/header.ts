import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {Button} from 'primeng/button';
import {Avatar} from 'primeng/avatar';
import {ToggleSwitch} from 'primeng/toggleswitch';
import {FormsModule} from '@angular/forms';
import {colorScheme} from '@primeuix/themes/aura/tag';
import {PrimeNG} from 'primeng/config';
import {ColorPicker} from 'primeng/colorpicker';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, Button, Avatar, ToggleSwitch, FormsModule, ColorPicker],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {

  modeSombre = false;
  color!: string;
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
    this.color = "#FFFFF";
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
