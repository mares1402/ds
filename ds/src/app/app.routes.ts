import {  Routes } from '@angular/router';
import { AuthComponent } from './auth/auth';

export const routes: Routes = [


  {
    path: 'login',
   loadComponent() {
      return import('./login/login').then(m => m.Login);
   },

  }

];