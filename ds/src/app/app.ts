import { Component, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

export class Login {
  protected readonly title = signal('ds');

  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const datos = {
      correo: this.email,
      contrasena: this.password
    };

    this.http.post('http://localhost:3000/api/auth/login', datos)
      .subscribe({
        next: (res: any) => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/hola']);
        },
        error: () => {
          alert('Credenciales incorrectas');
        }
      });
  }
}