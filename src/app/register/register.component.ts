import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import { BehaviorSubject, tap } from 'rxjs';

import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterModule } from '@angular/router';
import { AuthenticatorService } from '@aws-amplify/ui-angular';

import { Schema } from '../../../amplify/data/resource';
import outputs from '../../../amplify_outputs.json';
import { isNullOrUndefined } from '../helpers/helper-functions';
import { UserService } from '../services/user.service';
import { averageAttendeeCountOptions } from '../shared/constants/average-attendee-count-options';
import { averageEventCountOptions } from '../shared/constants/average-event-count-options';
import { countryCodes } from '../shared/constants/country-codes';
import { currencyOptions } from '../shared/constants/currency-options';
import { IRegisterForm } from '../shared/interfaces/register-form.interface';
import { User } from '../shared/user';
import { TermsComponent } from '../terms-and-conditions/terms.component';
import { fetchAuthSession } from 'aws-amplify/auth';

Amplify.configure(outputs);

const client = generateClient<Schema>();

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule,
    CommonModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  public userInfo$ = new BehaviorSubject<User | undefined>(undefined);
  public showFillForm$ = new BehaviorSubject<boolean>(false);
  public registerForm!: FormGroup;
  public mobileCountryCode$ = new BehaviorSubject<string>('');
  public countryCodes = countryCodes;
  public currencyOptions = currencyOptions;
  public averageAttendeeCountOptions = averageAttendeeCountOptions;
  public averageEventCountOptions = averageEventCountOptions;

  constructor(public userService: UserService, private router: Router, public authenticator: AuthenticatorService) { }

  ngOnInit(): void {
    this.userInfo$.next(this.userService.userInfo);

    const userInfo = this.userService.userInfo;

    if (isNullOrUndefined(userInfo)) {
      this.router.navigate(['/login']);
      return;
    }

    const loginId = userInfo?.loginId ?? '';

    this.showFillForm$.next(loginId.endsWith('@buzzwave.io'));

    this.registerForm = new FormGroup<IRegisterForm>({
      firstName: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),
      lastName: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),
      jobTitle: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),
      mobilePhoneCountryCode: new FormControl<string>('', { validators: [], nonNullable: true }),
      mobilePhone: new FormControl<string>('', { validators: [], nonNullable: true }),
      email: new FormControl<string>(loginId, { validators: [Validators.required], nonNullable: true }),

      companyName: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),
      industry: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),
      annualEventCount: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),
      averageEventAttendance: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),
      defaultCurrency: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),

      acceptedTerms: new FormControl<boolean>(false, { validators: [Validators.requiredTrue], nonNullable: true }),
      accaptedTermsVersion: new FormControl<string>('1.0', { validators: [Validators.required], nonNullable: true })
    });

    this.registerForm.controls['email'].disable();

    this.registerForm.controls['mobilePhoneCountryCode'].valueChanges.pipe(
      tap(value => {
        this.mobileCountryCode$.next(value);
      })
    ).subscribe();
  }

  private dialog: MatDialog = inject(MatDialog);

  hasUnitNumber = false;

  async submit(): Promise<void> {
    if (this.registerForm.valid) {

      const model = this.registerForm.getRawValue();

      const { data: createAccountResponse, errors } = await client.mutations.CreateAccount({
        companyName: model.companyName,
        industry: model.industry,
        annualEventCount: model.annualEventCount,
        averageEventAttendance: model.averageEventAttendance,
        currencyCode: model.defaultCurrency,
        userId: this.userService.userInfo.userId,
        givenName: model.firstName,
        familyName: model.lastName,
        jobTitle: model.jobTitle,
        email: model.email,
        mobilePhoneCountryCode: model.mobilePhoneCountryCode,
        mobilePhone: model.mobilePhone
      });

      if (errors) {
        errors.forEach(error => {
          throw error;
        });
        return;
      }

      if (isNullOrUndefined(createAccountResponse)) {
        throw new Error('User is null or undefined');
      } else {
        await fetchAuthSession({ forceRefresh: true });
        const createAccount = JSON.parse(JSON.parse(createAccountResponse as string).body);
        this.userService.userRegisteredChange(true);
        this.userService.userInfoChange({
          loginId: createAccount?.email ?? '',
          userId: createAccount?.userId ?? '',
          clientAccountId: createAccount?.clientAccountId,
          isAdmin: createAccount?.email.endsWith('@buzzwave.io'),
        });
        this.router.navigate(['/home']);
      }
    }
  }

  showTerms(): void {
    const dialogRef = this.dialog.open(TermsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  submitDisabled(): boolean {
    return !this.registerForm.valid;
  }

  fillForm(): void {
    this.registerForm.patchValue({
      firstName: 'John',
      lastName: 'Doe',
      jobTitle: 'CEO',
      companyName: 'Doe Enterprises',
      industry: 'Software',
      annualEventCount: '1-5',
      averageEventAttendance: '1-500',
      defaultCurrency: 'USD',
      acceptedTerms: true,
      mobilePhoneCountryCode: '+44',
      mobilePhone: '7123456789',
    });
  }
}
