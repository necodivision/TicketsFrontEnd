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

    // Log para verificar el usuario logueado
    //console.log('Usuario logueado en select-role:', this.user);

    // Si no hay usuario logueado, redirigir al login
    if (!this.user) {
      this.router.navigate(['/login']);
    }
  }

  continue() {
    const role = this.user.role;

    // Log para verificar el rol y la redirección
    //console.log('Rol del usuario:', role);

    // Simulación: cada tipo de rol te lleva a una ruta distinta
    switch (role) {
      case 'Administrador':
        //console.log('Redirigiendo a /admin/panel');
        this.router.navigate(['/admin/panel']);
        break;
      case 'Staff':
        //console.log('Redirigiendo a /staff/panel');
        this.router.navigate(['/staff/panel']);
        break;
      case 'Usuario':
        //console.log('Redirigiendo a /user/panel');
        this.router.navigate(['/user/panel']);
        break;
      default:
        //console.log('Rol desconocido, redirigiendo a /login');
        this.router.navigate(['/login']);
    }
  }

  logout() {
    this.authService.logout();
  }
}