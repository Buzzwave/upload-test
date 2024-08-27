import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/data';
import { Hub } from 'aws-amplify/utils';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterOutlet } from '@angular/router';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';

import { Schema } from '../../amplify/data/resource';
import outputs from '../../amplify_outputs.json';
import { isNullOrUndefined } from './helpers/helper-functions';
import { LayoutComponent } from './layout/layout.component';
import { UserService } from './services/user.service';
import { AuthUser } from 'aws-amplify/auth';
import { PageSpinnerComponent } from './shared/components/page-spinner/page-spinner.component';

Amplify.configure(outputs);
const client = generateClient<Schema>();

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AmplifyAuthenticatorModule,
    LayoutComponent,
    MatButtonModule,
    MatToolbarModule,
    CommonModule,
    RouterOutlet,
    PageSpinnerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title = 'Buzzwave';

  constructor(public authenticator: AuthenticatorService, public userService: UserService, private router: Router) {
    // Amplify.configure(outputs);

    Hub.listen('auth', async (data) => {
      if (data.payload.event === 'signedIn') {
    
        this.userService.userLoggedInChange(true);
        const authInfo = data.payload.data as AuthUser;
    
        const { data: user, errors } = await client.models.User.get({ userId: authInfo.userId });

        if (errors) {
          errors.forEach(error => {
            throw error;
          });
          return;
        }

        this.userService.userInfoChange({
          loginId: authInfo.signInDetails?.loginId ?? '',
          userId: authInfo.userId,
          clientAccountId: user?.clientAccountId ?? '',
          isAdmin: authInfo.signInDetails?.loginId?.endsWith('@buzzwave.io') ?? false,
        });

        if (isNullOrUndefined(user)) {
          this.userService.userRegisteredChange(false);
          this.router.navigate(['/register']);
        }
        else {
          this.userService.userRegisteredChange(true);
          this.router.navigate(['/home']);
        }
      }
    });
  }
}
