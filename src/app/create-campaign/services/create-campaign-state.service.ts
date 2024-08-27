import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ICampaignDetailsForm } from '../../shared/interfaces/campaign-details-form.interface';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CreateCampaignStateService {

  private _progressDisabled$ = new BehaviorSubject<boolean>(false);
  private _showFillForm$ = new BehaviorSubject<boolean>(false);
  private _hasUnsavedChanges$ = new BehaviorSubject<boolean>(false);
  private _modalIncentiveText = new BehaviorSubject<string>('');
  private _campaignFormGroup = new Subject<FormGroup<ICampaignDetailsForm>>();

  get progressDisabled$(): BehaviorSubject<boolean> {
    return this._progressDisabled$;
  }

  get showFillForm$(): BehaviorSubject<boolean> {
    return this._showFillForm$;
  }

  get hasUnsavedChanges$(): BehaviorSubject<boolean> {
    return this._hasUnsavedChanges$;
  }

  get modalIncentiveText$(): BehaviorSubject<string> {
    return this._modalIncentiveText;
  }

  get campaignFormGroup$(): Subject<FormGroup<ICampaignDetailsForm>> {
    return this._campaignFormGroup;
  }

  setProgressDisabled(progressDisabled: boolean): void {
    this._progressDisabled$.next(progressDisabled);
  }

  setShowFillForm(showFillForm: boolean): void {
    this._showFillForm$.next(showFillForm);
  }

  setHasUnsavedChanges(hasUnsavedChanges: boolean): void {
    this._hasUnsavedChanges$.next(hasUnsavedChanges);
  }

  setModalIncentiveText(modalIncentiveText: string): void {
    this._modalIncentiveText.next(modalIncentiveText);
  }

  setCampaignFormGroup(campaignFormGroup: FormGroup<ICampaignDetailsForm>): void {
    this._campaignFormGroup.next(campaignFormGroup);
  }
}
