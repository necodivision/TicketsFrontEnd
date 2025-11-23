import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [RouterModule, FormsModule, CommonModule]
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (!this.email.trim() || !this.password.trim()) {
      this.errorMessage = 'Debes completar todos los campos.';
      return;
    }

    if (this.authService.login(this.email, this.password)) {
      this.errorMessage = '';
      this.router.navigate(['/select-role']);
      return;
    }

    this.errorMessage = 'Correo o contraseña incorrectos';
  }
}




