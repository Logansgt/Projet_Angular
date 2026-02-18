import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {providePrimeNG} from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import Nora from '@primeuix/themes/nora';
import Lara from '@primeuix/themes/lara';
import Material from '@primeuix/themes/material';
import myPreset from './MyPreset';

export const appConfig: ApplicationConfig = {

  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme:{
        preset: myPreset,
        options: {
          prefix: 'p',
          darkModeSelector: '.my-app-dark',
          cssLayer: false
        }
      },
      ripple: true,
      csp:{
        nonce: '...'
      },
    })
  ]
};
