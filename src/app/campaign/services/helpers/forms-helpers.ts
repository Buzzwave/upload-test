import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ICampaignDetailsForm } from '../../../shared/interfaces/campaign-details-form.interface';
import { CustomValidators } from '../../../shared/helpers/custom-validators';
import { ISocialPostForm } from '../../../shared/interfaces/social-post-form.interface';

export const campaignFormGroup = new FormGroup<ICampaignDetailsForm>({
    eventName: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),
    campaignName: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),
    location: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),
    logoImageUrl: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),
    openingDate: new FormControl<Date | null>(null, { validators: [Validators.required], nonNullable: true }),
    closingDate: new FormControl<Date | null>(null, { validators: [Validators.required], nonNullable: true }),
    attendeeCount: new FormControl<number | null>(null, { validators: [Validators.required], nonNullable: true }),
    valuePerPost: new FormControl<number | null>(null, { validators: [Validators.required], nonNullable: true }),
    valuePerClick: new FormControl<number | null>(null, { validators: [Validators.required], nonNullable: true }),
    valuePerAcquisition: new FormControl<number | null>(null, { validators: [Validators.required], nonNullable: true }),
  });

  export const socialPostFormGroup = new FormGroup<ISocialPostForm>({
    postText: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),
    postImageUrl: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),
    postForwardUrl: new FormControl<string | null>(null, { validators: [Validators.required, CustomValidators.validUrl], nonNullable: true }),
  });

  export const activationFormGroup = new FormGroup({
    modalTitle: new FormControl<string>(`You're confirmed! Let's get your connections involved!`, { validators: [Validators.required], nonNullable: true }),
    modalText: new FormControl<string>('Events are better with colleagues and friends. Let your network know in just two clicks.', { validators: [Validators.required], nonNullable: true }),
    modalButtonText: new FormControl<string>('Share Now', { validators: [Validators.required], nonNullable: true }),
    modalIncentiveText: new FormControl<string>(''),
    modalIncentiveTCs: new FormControl<string>('', [CustomValidators.validUrl]),
    modalDomainPath: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),
    modalPatternLocation: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),
    modalPattern: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),
    useIncentive: new FormControl<string>('true')
  });
  