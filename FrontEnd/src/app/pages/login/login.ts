import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  email = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    if (this.email === 'admin@example.com' && this.password === '1234') {
      alert('Inicio de sesión exitoso');
      this.router.navigate(['/home']);
    } else {
      alert('Credenciales incorrectas');
    }
  }
}
