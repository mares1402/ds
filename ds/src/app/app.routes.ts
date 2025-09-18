import { Routes } from '@angular/router';
import { LoginComponent } from '../app/login/login';
import { AuthComponent } from '../app/auth/auth';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'auth', component: AuthComponent }
];