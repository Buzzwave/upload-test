import { TestBed } from '@angular/core/testing';

import { CreateCampaignStateService } from './create-campaign-state.service';

describe('CreateCampaignStateService', () => {
  let service: CreateCampaignStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateCampaignStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
