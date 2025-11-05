import { Routes } from '@angular/router';
import { Admin } from './pages/admin/admin';
import { Staff } from './pages/staff/staff';
import { User } from './pages/user/user';

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
      import('./pages/login/forgot/forgot').then(m => m.Forgot)
  },

  // Página de selección de rol (se mostrará después del login)
  {
    path: 'select-role',
    loadComponent: () =>
      import('./pages/login/select-role/select-role').then(m => m.SelectRoleComponent)
  },

  // Página de usuario
  { path: 'user', component:User },

  // Página de staff
  { path: 'staff', component:Staff },
    
  // Página de administrador
  { path: 'admin', component:Admin },
  
    // Página de super-administrador
  { path: 'super', component:Admin },

  // Página de error o ruta no encontrada
  { path: '**', redirectTo: 'login' }
];
