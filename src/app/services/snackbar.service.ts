import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarType } from '../shared/enums/snackbar-type.enum';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackBar: MatSnackBar) { }

  public openSnackBar(type: SnackbarType, message: string, action?: string, duration?: number): void {
    switch (type) {
      case SnackbarType.Error:
        if (duration) {
          this._snackBar.open(message, action, { duration: duration, panelClass: ['error-snackbar'] });
        } else {
          this._snackBar.open(message, action, { panelClass: ['error-snackbar'] });
        }
        break;
      case SnackbarType.Success:
        this._snackBar.open(message, action, { duration: 5000, panelClass: ['success-snackbar'] });
        break;
      case SnackbarType.Warning:
        this._snackBar.open(message, action, { duration: 5000, panelClass: ['warning-snackbar'] });
        break;
      case SnackbarType.Info:
        this._snackBar.open(message, action, { duration: 5000, panelClass: ['info-snackbar'] });
        break;
      default:
        this._snackBar.open(message, action);
        break;
    }
  }
}
