import { Routes } from '@angular/router';

export const routes: Routes = [
  // Redirección inicial
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Página de inicio de sesión
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login').then(m => m.LoginComponent)
  },

  // Página de recuperación de contraseña
  {
    path: 'forgot',
    loadComponent: () =>
      import('./pages/forgot/forgot').then(m => m.Forgot)
  },

  // Página de selección de rol (se mostrará después del login)
  {
    path: 'select-role',
    loadComponent: () =>
      import('./pages/select-role/select-role').then(m => m.SelectRoleComponent)
  },

  // Página de error o ruta no encontrada
  { path: '**', redirectTo: 'login' }
];
