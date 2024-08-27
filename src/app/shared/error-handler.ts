import { ErrorHandler, Injectable } from "@angular/core";
import { SnackbarService } from '../services/snackbar.service';
import { SnackbarType } from './enums/snackbar-type.enum';

@Injectable({
    providedIn: 'root'
  })
export class MyErrorHandler implements ErrorHandler {

    constructor(private snackbarService: SnackbarService) { }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleError = (error: any) => {
        const user = localStorage.getItem('buzzwaveadmin-userInfo');

        if (user !== null) {
            const isDevMode = (JSON.parse(user).loginId as string ?? '').endsWith('@buzzwave.io');

            if (isDevMode) {
                console.error('An error occurred:', error);

                if (error && error.message && error.locations && error.path && error.extensions) {
                    // GraphQLFormattedError error
                    this.snackbarService.openSnackBar(SnackbarType.Error, 'An error occurred: ' + error.message + '. Path: ' + error.path, 'Close');
                } else {
                    this.snackbarService.openSnackBar(SnackbarType.Error, 'An error occurred: ' + error.message, 'Close');
                }
            } else {
                this.snackbarService.openSnackBar(SnackbarType.Error, 'An error occurred. Please try again!', 'Close');
                console.error(error);
            }
        } else {
            this.snackbarService.openSnackBar(SnackbarType.Error, 'An error occurred. Please try again!', 'Close');
            console.error(error);
        }
    }
}
