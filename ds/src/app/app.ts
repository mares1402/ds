import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  error: string = '';

  constructor(private router: Router) {}

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
        // Opcional: guardar token para futuras validaciones
        // localStorage.setItem('token', data.token);

        this.router.navigate(['/auth']); //  redirección válida
      } else {
        this.error = 'Usuario o contraseña incorrectos';
      }
    })
    .catch(err => {
      console.error('Error al conectar con el backend:', err);
      this.error = 'Error de conexión con el servidor';
    });
  }
}