import { TestBed } from '@angular/core/testing';

import { CampaignStateService } from './campaign-state.service';

describe('CampaignStateService', () => {
  let service: CampaignStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampaignStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
