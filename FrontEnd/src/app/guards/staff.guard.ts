import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const staffGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const role = auth.getUserRole();

  const allowed = role === 'Staff';

  if (!allowed) {
    auth.logout();
    router.navigate(['/login']);
  }

  return allowed;
};
