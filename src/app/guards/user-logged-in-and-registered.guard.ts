import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { UserService } from '../services/user.service';
import { catchError, combineLatest, map, of } from 'rxjs';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const userLoggedInAndRegisteredGuard: CanActivateFn = (route, state) => {
  const userService: UserService = inject(UserService);
  const router: Router = inject(Router);

  return combineLatest([userService.userLoggedIn$, userService.userLoggedInAndRegistered$]).pipe(
    map(([userLoggedIn, userLoggedInAndRegistered]) => {
      if (userLoggedInAndRegistered) {
        return true;
      } else if (userLoggedIn) {
        router.navigate(['/register']);
        return false;
      } else {
        return true;
      }
    }),
    catchError(() => {
      router.navigate(['/']);
      return of(false);
    })
  );
};
