import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-select-role',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-role.html',
  styleUrls: ['./select-role.css']
})
export class SelectRoleComponent implements OnInit {
  user: any = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.user = this.authService.getLoggedUser();

    // Si no hay usuario logueado, redirigir al login
    if (!this.user) {
      this.router.navigate(['/login']);
    }
  }

  continue() {
    const role = this.user.role;

    // Simulación: cada tipo de rol te lleva a una ruta distinta
    switch (role) {
      case 'Super Administrador':
        this.router.navigate(['/dashboard-super']);
        break;
      case 'Administrador':
        this.router.navigate(['/admin']);
        break;
      case 'Staff':
        this.router.navigate(['/staff']);
        break;
      case 'Usuario':
        this.router.navigate(['/user/panel']);
        break;
      default:
        this.router.navigate(['/login']);
    }
  }

  logout() {
    this.authService.logout();
  }
}
