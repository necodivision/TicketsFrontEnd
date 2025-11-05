import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Usuarios de prueba (mock)
  private mockUsers = [
    { email: 'admin@example.com', password: '123456', role: 'Administrador' },
    { email: 'super@example.com', password: '123456', role: 'Super Administrador' },
    { email: 'staff@example.com', password: '123456', role: 'Staff' },
    { email: 'user@example.com', password: '123456', role: 'Usuario' }
  ];

  private loggedUser: any = null;

  constructor(private router: Router) {}

  /**
   * Verifica si el usuario y contraseña existen.
   * Retorna true si el login es exitoso.
   */
  login(email: string, password: string): boolean {
    const user = this.mockUsers.find(
      u => u.email === email && u.password === password
    );

    if (user) {
      this.loggedUser = user;
      localStorage.setItem('loggedUser', JSON.stringify(user)); // guarda sesión
      return true;
    }
    return false;
  }

  /**
   * Simula una solicitud de recuperación de contraseña.
   * Retorna un observable con un mensaje de éxito o error.
   */
  requestPasswordReset(email: string): Observable<{ ok: boolean; message: string }> {
    const user = this.mockUsers.find(u => u.email === email);

    if (user) {
      // Simula un retardo de red de 1 segundo
      return of({
        ok: true,
        message: `Se ha enviado un correo de recuperación a ${email}.`
      }).pipe(delay(1000));
    }

    return of({
      ok: false,
      message: 'El correo no se encuentra registrado.'
    }).pipe(delay(1000));
  }

  /**
   * Obtiene el usuario logueado desde memoria o localStorage
   */
  getLoggedUser() {
    if (!this.loggedUser) {
      const stored = localStorage.getItem('loggedUser');
      if (stored) this.loggedUser = JSON.parse(stored);
    }
    return this.loggedUser;
  }

  /**
   * Devuelve el tipo de cuenta (rol) del usuario actual
   */
  getUserRole(): string | null {
    const user = this.getLoggedUser();
    return user ? user.role : null;
  }

  /**
   * Cierra la sesión del usuario
   */
  logout() {
    this.loggedUser = null;
    localStorage.removeItem('loggedUser');
    this.router.navigate(['/login']);
  }

  /**
   * Verifica si hay sesión activa
   */
  isLoggedIn(): boolean {
    return !!this.getLoggedUser();
  }
}
