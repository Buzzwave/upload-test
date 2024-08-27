import { FormControl } from '@angular/forms';

export interface IRegisterForm {
    firstName: FormControl<string>,
    lastName: FormControl<string>,
    jobTitle: FormControl<string>,
    mobilePhoneCountryCode: FormControl<string>,
    mobilePhone: FormControl<string>,
    email: FormControl<string>,
    
    companyName: FormControl<string>,
    industry: FormControl<string>,
    annualEventCount: FormControl<string>,
    averageEventAttendance: FormControl<string>,
    defaultCurrency: FormControl<string>,

    acceptedTerms: FormControl<boolean>,
    accaptedTermsVersion: FormControl<string>
}