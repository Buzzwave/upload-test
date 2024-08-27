import { generateClient } from 'aws-amplify/api';
import { BehaviorSubject, Subject } from 'rxjs';

import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { Schema } from '../../../amplify/data/resource';
import { formatIsoString } from '../helpers/helper-functions';
import { Campaign, Event } from '../helpers/interfaces';
import { UserService } from '../services/user.service';
import { CampaignGridComponent } from './components/campaign-grid/campaign-grid.component';
import { CampaignStateService } from './services/campaign-state.service';
import { Router, RouterOutlet } from '@angular/router';

const client = generateClient<Schema>();

@Component({
  selector: 'app-campaign-page',
  standalone: true,
  imports: [
    CommonModule,
    CampaignGridComponent,
    MatIcon,
    MatButton,
    MatProgressSpinnerModule,
    RouterOutlet
  ],
  templateUrl: './campaign-page.component.html',
  styleUrl: './campaign-page.component.scss'
})
export class CampaignPageComponent implements OnInit, OnDestroy {

  public createCampaignBtnDisabled$ = new BehaviorSubject<boolean>(false);
  private clientAccountId = this.userService.userInfo.clientAccountId;
  private readonly onDestroy$ = new Subject();

  constructor(
    public userService: UserService,
    public state: CampaignStateService,
    private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.state.setLoading(true);
    const { data: campaignData, errors } = await client.models.Campaign.list({ filter: { clientAccountId: { eq: this.clientAccountId } } });
    const { data: eventData, errors: eventErrors } = await client.models.Event.list({ filter: { clientAccountId: { eq: this.clientAccountId } } });

    const allErrors = [...errors ?? [], ...eventErrors ?? []];

    if (allErrors?.length > 0) {
      allErrors.forEach(error => {
        this.state.setLoading(false);
        throw error;
      });
      return;
    }

    const events: Event[] = [];

    eventData.forEach(event => {
      events.push({
        eventId: event.eventId,
        name: event.name ?? undefined,
        description: event.description ?? undefined,
        openingDate: event.openingDate ?? undefined,
        closingDate: event.closingDate ?? undefined,
        location: event.location ?? undefined,
        openingDateLocalTimezone: event.openingDate ? formatIsoString(event.openingDate) : undefined,
        closingDateLocalTimezone: event.closingDate ? formatIsoString(event.closingDate) : undefined
      });
    });

    this.state.setEvents(events);

    const campaigns: Campaign[] = [];

    campaignData.forEach(campaign => {
      campaigns.push({
        campaignId: campaign.campaignId,
        name: campaign.name ?? undefined,
        description: campaign.description ?? undefined,
        modalTitle: campaign.modalTitle ?? undefined,
        modalText: campaign.modalText ?? undefined,
        modalIncentiveText: campaign.modalIncentiveText ?? undefined,
        modalIncentiveTCs: campaign.modalIncentiveTCs ?? undefined,
        modalPattern: campaign.modalPattern ?? undefined,
        modalPatternLocationEnum: campaign.modalPatternLocationEnum ?? undefined,
        postText: campaign.postText ?? undefined,
        postImageUrl: campaign.postImageUrl ?? undefined,
        postForwardUrl: campaign.postForwardUrl ?? undefined,
        event: events.find(event => event.eventId === campaign.eventId)
      });
    });

    this.state.setCampaigns(campaigns);
    this.state.setLoading(false);
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(null);
    this.onDestroy$.complete();
    this.state.reset();
  }

  public createCampaign() {
    this.router.navigate(['/campaigns/create']);
    // this.createCampaignBtnDisabled$.next(true);
    // setTimeout(() => {
    //   this.createCampaignBtnDisabled$.next(false);
    //   throw new Error('Failed to create campaign');
    // }, 2000);
  }
}
