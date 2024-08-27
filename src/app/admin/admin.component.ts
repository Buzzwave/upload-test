import { generateClient } from 'aws-amplify/api';
import { BehaviorSubject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { Schema } from '../../../amplify/data/resource';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { SnackbarService } from '../services/snackbar.service';
import { SnackbarType } from '../shared/enums/snackbar-type.enum';
import { FillFormHelper } from '../shared/helpers/fill-form-helper';
import { campaignGroups } from '../shared/constants/campaign-group-options';

const client = generateClient<Schema>();

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule,
    MatIcon,
    MatButton,
    MatProgressSpinnerModule,
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  public createCampaignBtnDisabled$ = new BehaviorSubject<boolean>(false);
  public createPixelInstallationBtnDisabled$ = new BehaviorSubject<boolean>(false);

  private clientAccountId = this.userService.userInfo.clientAccountId ?? '';

  constructor(
    public userService: UserService,
    private snackbarService: SnackbarService) { }

  async createCampaign() {
    this.createCampaignBtnDisabled$.next(true);
    const eventId = uuidv4();
    const campaignId = uuidv4();

    const sixMonthsFromNow = new Date();
    sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6);
    const oneMonthFromNow = new Date();
    oneMonthFromNow.setMonth(oneMonthFromNow.getMonth() + 1);
    const randomDate = new Date(Math.random() * (sixMonthsFromNow.getTime() - oneMonthFromNow.getTime()) + oneMonthFromNow.getTime());
    randomDate.setHours(10, 0, 0, 0);

    const randomCity = FillFormHelper.randomCity();

    const randomKitchenObjectName1 = FillFormHelper.randomKitchenObjectName();
    const randomKitchenObjectName2 = FillFormHelper.randomKitchenObjectName(randomKitchenObjectName1);
    const eventName = `${randomKitchenObjectName1} & ${randomKitchenObjectName2}fest ${randomDate.getUTCFullYear()}`;
    
    const randomCampaignGroup = campaignGroups[Math.floor(Math.random() * campaignGroups.length)];
    
    const event = {

      eventId: eventId,

      // Attributes
      name: eventName,
      description: 'desc',
      websiteUrl: 'https://www.buzzwave.io',
      logoImageUrl: 'https://www.buzzwave.io/logo.png',
      openingDate: `${randomDate.toISOString()}`,
      closingDate: `${new Date(randomDate.getTime() + 1000 * 60 * 60 * 24 * 2 + 1000 * 60 * 60 * 3).toISOString()}`,
      location: randomCity,

      // Foreign Keys
      clientAccountId: this.clientAccountId,

      // Audit
      createdBy: this.userService.userInfo.userId,
      updatedBy: this.userService.userInfo.userId,
      disabled: false
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data: newEvent, errors: eventCreateErrors } = await client.models.Event.create(event);


    if (eventCreateErrors) {
      eventCreateErrors.forEach(error => {
        throw error;
      });
    }

    const campaign = {

      campaignId: campaignId,
      eventId: eventId,

      // Attributes
      name: `${randomCampaignGroup} Campaign`,
      description: '',

      // Foreign Keys
      clientAccountId: this.clientAccountId,

      // Audit
      createdBy: this.userService.userInfo.userId,
      updatedBy: this.userService.userInfo.userId,
      disabled: false
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data: updatedUser, errors: userCreateErrors } = await client.models.Campaign.create(campaign);

    if (userCreateErrors) {
      userCreateErrors.forEach(error => {
        throw error;
      });
    } else {
      this.snackbarService.openSnackBar(SnackbarType.Success, 'Campaign created', 'Close');
    }
    this.createCampaignBtnDisabled$.next(false);
  }

  public async createPixelInstallation(): Promise<void> {
    this.createPixelInstallationBtnDisabled$.next(true);
    const domains = ['buzzwave.io', 'buzzwave.com', 'buzzwave.net', 'buzzwave.org', 'buzzwave.co', 'buzzwave.app', 'buzzwave.dev', 'buzzwave.tech', 'buzzwave.xyz', 'buzzwave.space'];
    const domain = `https://${domains[Math.floor(Math.random() * domains.length)]}`;

    const pixelInstallation = {
      pixelInstallationTrackingId: uuidv4(),
      clientAccountId: this.clientAccountId,
      domain: domain,
      createdBy: this.userService.userInfo.userId,
      updatedBy: this.userService.userInfo.userId,
      disabled: false
    };
  }
}
