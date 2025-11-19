import { Routes } from '@angular/router';
import { adminGuard } from './guards/admin.guard';
import { staffGuard } from './guards/staff.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // LOGIN
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login').then(m => m.LoginComponent)
  },
  {
    path: 'forgot',
    loadComponent: () =>
      import('./pages/login/forgot/forgot').then(m => m.Forgot)
  },
  {
    path: 'select-role',
    loadComponent: () =>
      import('./pages/login/select-role/select-role').then(m => m.SelectRoleComponent)
  },

  // USER
  {
    path: 'user',
    loadComponent: () =>
      import('./pages/user/user').then(m => m.User),

    children: [
      {
        path: 'panel',
        loadComponent: () =>
          import('./pages/user/user-panel/user-panel').then(m => m.UserPanel)
      },

      {
        path: 'my-tickets',
        loadComponent: () =>
          import('./pages/user/my-tickets/my-tickets').then(m => m.MyTickets)
      },

      {
        path: 'ticket/:id',
        loadComponent: () =>
          import('./pages/user/tickets-detail/tickets-detail')
            .then(m => m.TicketsDetailComponent)
      },

      { path: '', redirectTo: 'panel', pathMatch: 'full' }
    ]
  },

  // STAFF
  {
    path: 'staff',
    loadComponent: () =>
      import('./pages/staff/staff').then(m => m.Staff),
    canActivateChild: [staffGuard],
    children: [
      {
        path: 'panel',
        loadComponent: () =>
          import('./pages/staff/staff-panel/staff-panel').then(m => m.StaffPanel)
      },
            {
        path: 'mis-tickets',
        loadComponent: () =>
          import('./pages/staff/staff-mis-tickets/staff-mis-tickets').then(m => m.StaffMisTickets)
      },

      { path: '', redirectTo: 'panel', pathMatch: 'full' }
    ]
  },

  // ADMIN
  {
    path: 'admin',
    loadComponent: () =>
      import('./pages/admin/admin').then(m => m.Admin),
    canActivateChild: [adminGuard],
    children: [
      {
        path: 'panel',
        loadComponent: () =>
          import('./pages/admin/admin-panel/admin-panel').then(m => m.AdminPanel)
      },
      {
        path: 'mis-tickets',
        loadComponent: () =>
          import('./pages/admin/admin-mis-tickets/admin-mis-tickets').then(m => m.AdminMisTickets)
      },
      {
        path: 'estadisticas',
        loadComponent: () =>
          import('./pages/admin/admin-estadisticas/admin-estadisticas').then(m => m.AdminEstadisticas)
      },
      {
        path: 'equipo',
        loadComponent: () =>
          import('./pages/admin/admin-equipo/admin-equipo').then(m => m.AdminEquipo)
      },
      { path: '', redirectTo: 'panel', pathMatch: 'full' }
    ]
  },

  { path: '**', redirectTo: 'login' }
];
