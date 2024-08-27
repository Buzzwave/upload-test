import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';

import { UserService } from '../services/user.service';

export const userLoggedInGuard: CanActivateFn = (route, state) => {
  const userService: UserService = inject(UserService);
  return userService.userLoggedIn$;
};
