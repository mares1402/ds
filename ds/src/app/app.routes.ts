import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { AuthComponent } from './auth/auth';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'auth', component: AuthComponent }
];