import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

}
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  error: string = '';

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
        window.location.href = '/auth'; // o usa Router si lo inyectas
      } else {
        this.error = 'Usuario o contraseña incorrectos';
      }
    })
    .catch(() => {
      this.error = 'Error de conexión con el servidor';
    });
  }
}