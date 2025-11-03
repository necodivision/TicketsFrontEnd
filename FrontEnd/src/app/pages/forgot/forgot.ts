// src/app/pages/forgot/forgot.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forgot.html',
  styleUrls: ['./forgot.css']
})
export class Forgot {
  email = '';
  loading = false;
  message = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  submit() {
    this.error = '';
    this.message = '';
    if (!this.email) {
      this.error = 'Ingresa tu correo.';
      return;
    }
    this.loading = true;
    this.auth.requestPasswordReset(this.email).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.ok) {
          this.message = res.message;
          // esperar 1.2s y volver a login (opcional)
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 1200);
        } else {
          this.error = res.message;
        }
      },
      error: () => {
        this.loading = false;
        this.error = 'Error al intentar enviar. Intenta nuevamente más tarde.';
      }
    });
  }
}
