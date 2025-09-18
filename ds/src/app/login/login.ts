import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  error: string = '';
  private router = inject(Router); // ✅ usa el router de Angular

  login() {
    const usuario = (document.getElementById('email') as HTMLInputElement)?.value.trim();
    const password = (document.getElementById('password') as HTMLInputElement)?.value;

    if (!usuario || !password) {
      this.error = 'Por favor ingresa tu correo y contraseña';
      return;
    }

    fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ usuario, password })
    })
    .then(res => res.json())
    .then(data => {
      if (data.token) {
        this.router.navigate(['/auth']); // redirección sin recargar
      } else {
        this.error = 'Usuario o contraseña incorrectos';
      }
    })
    .catch(() => {
      this.error = 'Error de conexión con el servidor';
    });
  }
}