import { generateClient } from 'aws-amplify/api';
import { BehaviorSubject } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { Schema } from '../../../amplify/data/resource';
import { UserService } from '../services/user.service';
import { User } from '../shared/user';
import { isNullOrUndefined } from '../helpers/helper-functions';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

const client = generateClient<Schema>();

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent implements OnInit {
  public userInfo$ = new BehaviorSubject<User | null>(null);
  public disableDeleteAccount$ = new BehaviorSubject<boolean>(false);
  
  constructor(public userService: UserService, private router: Router) {}
  
  ngOnInit(): void {
    this.userInfo$.next(this.userService.userInfo);
  }

  async deleteAccount() {
    this.disableDeleteAccount$.next(true);
      const { data: clientAccount, errors } = await client.models.ClientAccount.get({ clientAccountId: this.userInfo$.value?.clientAccountId ?? '' });

      if (errors) {
        errors.forEach(error => {
          throw error;
        });
        return;
      }

      // Delete client account if it exists
      if (!isNullOrUndefined(clientAccount)) {
        const { errors } = await client.models.ClientAccount.delete({ clientAccountId: clientAccount?.clientAccountId ?? ''});
        if (errors) {
          errors.forEach(error => {
            throw error;
          });
          return;
        }
      }

      // Delete user account
      const { errors: deleteUserErrors } = await client.models.User.delete({ userId: this.userInfo$.value?.userId ?? ''});
        if (deleteUserErrors) {
          deleteUserErrors.forEach(error => {
            throw error;
          });
          return;
        }
      
      this.userService.signOut();
  }
}
