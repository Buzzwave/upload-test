import { ApplicationConfig, ErrorHandler, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';

import { routes } from './app.routes';
import { SnackbarService } from './services/snackbar.service';
import { MyErrorHandler } from './shared/error-handler';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideMomentDateAdapter(undefined, {strict: true}),
    provideAnimationsAsync(),
    {
      provide: ErrorHandler,
      useClass: MyErrorHandler,
      deps: [
        SnackbarService
      ]
    }
  ]
};
