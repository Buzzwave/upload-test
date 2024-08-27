import { FormControl } from '@angular/forms';

export interface ICampaignDetailsForm {
    eventName: FormControl<string>,
    campaignName: FormControl<string>,
    location: FormControl<string>,
    logoImageUrl: FormControl<string>,
    openingDate: FormControl<Date | null>,
    closingDate: FormControl<Date | null>,
    attendeeCount: FormControl<number | null>,
    valuePerPost: FormControl<number | null>,
    valuePerClick: FormControl<number | null>,
    valuePerAcquisition: FormControl<number | null>
}