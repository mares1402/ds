import { Routes } from '@angular/router';
import { AppComponent } from '../app/app';
import { AuthComponent } from './auth/auth';

export const routes: Routes = [
  { path: '', component: AppComponent },       // login en app.html
  { path: 'auth', component: AuthComponent }   // destino después del login
];