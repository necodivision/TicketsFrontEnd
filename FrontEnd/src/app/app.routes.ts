import { Routes } from '@angular/router';

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

  // STAFF / ADMIN
  {
    path: 'staff',
    loadComponent: () =>
      import('./pages/staff/staff').then(m => m.Staff)
  },

  {
    path: 'admin',
    loadComponent: () =>
      import('./pages/admin/admin').then(m => m.Admin)
  },

  {
    path: 'super',
    loadComponent: () =>
      import('./pages/admin/admin').then(m => m.Admin)
  },

  { path: '**', redirectTo: 'login' }
];