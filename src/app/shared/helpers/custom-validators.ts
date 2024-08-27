/* eslint-disable @typescript-eslint/no-unused-vars */
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import isUrl from 'is-url';

export class CustomValidators {
    static validUrl: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
        try {
            const url = new URL(control.value);
            if (!isUrl(url.href)) {
                return { invalidUrl: true };
            }
            return null;
        } catch (_) {
            return { invalidUrl: true };
        }
    }
    
    static validUrlWithDomain: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
        try {
            const domain = control.parent?.value.modalDomainPath + '/';
            const url = new URL(domain + control.value);
            if (!isUrl(url.href)) {
                return { invalidUrl: true };
            }
            return null;
        } catch (_) {
            return { invalidUrl: true };
        }
    }
}
