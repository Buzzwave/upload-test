import { generateClient } from 'aws-amplify/api';
import { BehaviorSubject, map, shareReplay, Subject } from 'rxjs';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepper, MatStepperModule, StepperOrientation } from '@angular/material/stepper';

import { Schema } from '../../../amplify/data/resource';
import { SnackbarService } from '../services/snackbar.service';
import { UserService } from '../services/user.service';
import { PageSpinnerService } from '../shared/components/page-spinner/services/page-spinner.service';
import { CanDeactivateType } from '../shared/interfaces/can-component-deactivate.interface';
import { SnackbarType } from '../shared/enums/snackbar-type.enum';
import { ConfirmUnsavedChangesComponent } from './components/confirm-unsaved-changes/confirm-unsaved-changes.component';
import { isNullOrUndefined, isNullOrWhiteSpace } from '../helpers/helper-functions';
import { FillFormHelper } from '../shared/helpers/fill-form-helper';
import { CustomValidators } from '../shared/helpers/custom-validators';
import { activationFormGroup, campaignFormGroup, socialPostFormGroup } from '../campaign/services/helpers/forms-helpers';
import { uploadData } from 'aws-amplify/storage';
import { v4 as uuidv4 } from 'uuid';

const client = generateClient<Schema>();

@Component({
  selector: 'app-create-campaign-page',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatDividerModule,
    MatSlideToggleModule
  ],
  templateUrl: './create-campaign-page.component.html',
  styleUrl: './create-campaign-page.component.scss'
})
export class CreateCampaignPageComponent implements OnInit {
  readonly dialog = inject(MatDialog);

  public campaignFormGroup = campaignFormGroup;
  public socialPostFormGroup =  socialPostFormGroup;
  public activationFormGroup = activationFormGroup;

  public modalPatternLocations = [
    { value: 'Endswith', displayName: 'Ends with' },
    { value: 'Contains', displayName: 'Contains' },
    { value: 'Equals', displayName: 'Equals' }
  ];

  public isEditable = true;
  public orientation$ = new BehaviorSubject<StepperOrientation>('horizontal');
  public showFillForm$ = new BehaviorSubject<boolean>(false);
  public progressDisabled$ = new BehaviorSubject<boolean>(false);
  public postText$ = new BehaviorSubject<string>('Your post text here');
  public postForwardUrl$ = new BehaviorSubject<string>('');
  public tcUrl$ = new BehaviorSubject<string>('');

  public logoImageDimensionsAccepted$ = new BehaviorSubject<string>('');
  public logoImageSizeAccepted$ = new BehaviorSubject<string>('');
  public logoImageFormatAccepted$ = new BehaviorSubject<string>('');

  public imageDimensionsAccepted$ = new BehaviorSubject<string>('');
  public imageSizeAccepted$ = new BehaviorSubject<string>('');
  public imageFormatAccepted$ = new BehaviorSubject<string>('');

  public domains$ = new BehaviorSubject<string[]>([]);
  public showExampleUrls$ = new BehaviorSubject<boolean>(false);
  public useIncentive$ = new BehaviorSubject<boolean>(true);
  public exampleUrls$ = new BehaviorSubject<string[]>([]);
  public modalPatternPrefix$ = new BehaviorSubject<string>('');
  public hasUnsavedChanges = false;

  private breakpointObserver = inject(BreakpointObserver);
  private logoImageSrc: any;
  private postImageSrc: any;
  private clientAccountId = this.userService.userInfo.clientAccountId;
  private eventId: string;
  private campaignId: string;

  static urlMatch: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const domain = control.parent?.value.modalDomainPath;
    const confirmUrl = control.parent?.value.modalPattern;

    return confirmUrl.length > domain.length && confirmUrl.startsWith(domain) ? null : { urlMatch: true };
  }

  constructor(public userService: UserService, public snackbar: SnackbarService, public spinner: PageSpinnerService) {
    this.eventId = uuidv4();
    this.campaignId = uuidv4();
  }

  async ngOnInit(): Promise<void> {
    this.breakpointObserver.observe([Breakpoints.Tablet, Breakpoints.Handset])
      .pipe(
        map(result => {
          this.orientation$.next(result.matches ? 'vertical' : 'horizontal');
          return result.matches;
        }),
        shareReplay()
      ).subscribe();

    const userInfo = this.userService.userInfo;
    const loginId = userInfo?.loginId ?? '';
    this.showFillForm$.next(loginId.endsWith('@buzzwave.io'));

    this.campaignFormGroup.valueChanges.subscribe(() => {
      this.hasUnsavedChanges = true;
      if (isNullOrWhiteSpace(this.activationFormGroup.value.modalIncentiveText ?? '')) {
        this.activationFormGroup.controls['modalIncentiveText'].setValue(
          `Share now and get free access to the ${this.campaignFormGroup.value.eventName ?? ''} Content Hub, with post-show access to session recordings, speaker presentations, and more!`,);
      }
    });

    this.socialPostFormGroup.valueChanges.subscribe((value) => {
      this.postText$.next(value.postText ?? 'Your post text here');
      this.postForwardUrl$.next(value.postForwardUrl ?? '');
    });

    this.activationFormGroup.valueChanges.subscribe(value => {
      if (!isNullOrWhiteSpace(value.modalDomainPath ?? '') && !isNullOrWhiteSpace(value.modalPatternLocation ?? '') && !isNullOrWhiteSpace(value.modalPattern ?? '')) {
        this.exampleUrls$.next(this.getExampleUrls(value.modalDomainPath ?? '', value.modalPatternLocation ?? '', value.modalPattern ?? ''));
        this.showExampleUrls$.next(this.exampleUrls$.value.length > 0);
      } else {
        this.showExampleUrls$.next(false);
      }
    });

    this.activationFormGroup.controls['modalPatternLocation'].valueChanges.subscribe((value) => {
      if (value === 'Equals') {
        this.modalPatternPrefix$.next(`${this.activationFormGroup.value.modalDomainPath ?? ''}/`);
        this.activationFormGroup.controls['modalPattern'].setValidators([Validators.required, CustomValidators.validUrlWithDomain]);
      } else {
        this.modalPatternPrefix$.next('');
        this.activationFormGroup.controls['modalPattern'].setValidators([Validators.required]);
      }
    });

    this.activationFormGroup.controls['modalIncentiveText'].setValidators([Validators.required]);

    this.activationFormGroup.controls['useIncentive'].valueChanges.subscribe((value) => {
      if (!isNullOrUndefined(value) && value) {
        this.useIncentive$.next(true);
        this.activationFormGroup.controls['modalIncentiveText'].setValidators([Validators.required]);
        this.activationFormGroup.controls['modalIncentiveText'].enable();
        this.activationFormGroup.controls['modalIncentiveTCs'].enable();
      } else {
        this.useIncentive$.next(false);
        this.activationFormGroup.controls['modalIncentiveText'].disable();
        this.activationFormGroup.controls['modalIncentiveTCs'].disable();
      }
    });

    this.activationFormGroup.controls['modalIncentiveTCs'].valueChanges.subscribe((value) => {
      if (!isNullOrWhiteSpace(value ?? '')) {
        this.tcUrl$.next(value ?? '');
      }
    });
  }

  getExampleUrls(modalDomainPath: string, modalPatternLocation: string, modalPattern: string): string[] {
    if (modalPattern.startsWith('/')) {
      modalPattern = modalPattern.substring(1);
    }
    switch (modalPatternLocation) {
      case 'Endswith':
        return [`${modalDomainPath}/my-event/${modalPattern}`, `${modalDomainPath}/some-other-event/${modalPattern}`];
      case 'Contains': {
        let endPadding = '';
        if (!modalPattern.endsWith('/')) {
          endPadding = '/';
        }
        return [`${modalDomainPath}/my-event/${modalPattern}`, `${modalDomainPath}/${modalPattern}${endPadding}my-event`];
      }
      case 'Equals':
        return [`${modalDomainPath}/${modalPattern}`];
      default:
        return [];
    }
  }

  canDeactivate(): CanDeactivateType {
    const deactivateSubject = new Subject<boolean>();
    if (this.hasUnsavedChanges) {

      const dialogRef = this.dialog.open(ConfirmUnsavedChangesComponent, {
        width: '250px'
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result === 'true') {
          deactivateSubject.next(true);
          return deactivateSubject;
        } else {
          deactivateSubject.next(false);
          return deactivateSubject;
        }
      });
      return deactivateSubject;
    }
    else {
      return true;
    }
  }

  public async logoUpload(fileInputEvent: any) {
    const file = fileInputEvent.target.files[0];

    if (file.size / 1024 / 1024 > 1) {
      this.snackbar.openSnackBar(SnackbarType.Error, 'Image size must be less than 1MB', undefined, 2000);
      this.logoImageSizeAccepted$.next('close');
      return;
    }

    if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/jpg' && file.type !== 'image/gif') {
      this.snackbar.openSnackBar(SnackbarType.Error, 'Only JPG, PNG or GIF files are allowed', undefined, 2000);
      this.logoImageFormatAccepted$.next('close');
      return;
    }

    this.logoImageSizeAccepted$.next('check');
    this.logoImageFormatAccepted$.next('check');

    if (file !== undefined) {
      this.campaignFormGroup.controls['logoImageUrl'].setValue(file.name);

      const reader = new FileReader();
      // reader.readAsArrayBuffer(file);

      reader.onload = async (e: any) => {
        const image = new Image();

        image.src = window.URL.createObjectURL(file);
        await image.decode();



        const xx = uploadData({
          data: e.target.result,
          path: `picture-submissions/${file.name}`,
          options: {
            bucket: 'amplifyTeamDrive',
          }
          // path: `picture-submissions/${this.campaignId}_1.png`
        });
          // options: {
          //   bucket: 'amplifyTeamDrive',
          // }
          // path: `picture-submissions/${this.campaignId}_1.png`
        // }).result;


        // const pic = await getUrl({
        //   path: "events/pic.jpeg",
        // });


        if (image.width < 250 || image.height < 250) {
          this.snackbar.openSnackBar(SnackbarType.Error, `Image dimensions must be at least 250x250. Image dimensions are ${image.width}x${image.height}`, undefined, 2000);
          this.logoImageDimensionsAccepted$.next('close');
          return;
        }
        if (image.width / image.height > 1.91 || image.width / image.height < 0.91) {
          this.snackbar.openSnackBar(SnackbarType.Error, `Image aspect ratio must closer be 1:1. Image dimensions are ${image.width}x${image.height}`, undefined, 2000);
          this.logoImageDimensionsAccepted$.next('close');
        }
        this.logoImageDimensionsAccepted$.next('check');
        this.logoImageSrc = e.target.result;
        const imgtag = document.getElementById("logo-preview");
        imgtag?.setAttribute('src', e.target.result);
      };

      // reader.readAsArrayBuffer(file);
      reader.readAsDataURL(fileInputEvent.target.files[0]);
    }
  }

  public async postImageUpload(fileInputEvent: any) {
    const file = fileInputEvent.target.files[0];

    if (file.size / 1024 / 1024 > 1) {
      this.snackbar.openSnackBar(SnackbarType.Error, 'Image size must be less than 1MB', undefined, 2000);
      this.imageSizeAccepted$.next('close');
      return;
    }

    if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/jpg' && file.type !== 'image/gif') {
      this.snackbar.openSnackBar(SnackbarType.Error, 'Only JPG, PNG or GIF files are allowed', undefined, 2000);
      this.imageFormatAccepted$.next('close');
      return;
    }

    this.imageSizeAccepted$.next('check');
    this.imageFormatAccepted$.next('check');

    if (file !== undefined) {
      this.socialPostFormGroup.controls['postImageUrl'].setValue(file.name);

      const reader = new FileReader();

      reader.onload = async (e: any) => {
        const image = new Image();

        image.src = window.URL.createObjectURL(file);
        await image.decode();


        if (image.width < 500 || image.height < 500) {
          this.snackbar.openSnackBar(SnackbarType.Error, `Image dimensions must be at least 500x500. Image dimensions are ${image.width}x${image.height}`, undefined, 2000);
          this.imageDimensionsAccepted$.next('close');
          return;
        }
        if (image.width / image.height > 1.91 || image.width / image.height < 0.91) {
          this.snackbar.openSnackBar(SnackbarType.Error, `Image aspect ratio must closer be 1:1. Image dimensions are ${image.width}x${image.height}`, undefined, 2000);
          this.imageDimensionsAccepted$.next('close');
        }
        this.imageDimensionsAccepted$.next('check');
        this.postImageSrc = e.target.result;
        const imgtag = document.getElementById("image-preview");
        imgtag?.setAttribute('src', e.target.result);
        const activationImgtag = document.getElementById("activation-image-preview");
        activationImgtag?.setAttribute('src', e.target.result);
      };

      reader.readAsDataURL(fileInputEvent.target.files[0]);
    }
  }

  public async saveCampaign(stepper: MatStepper) {
    if (this.hasUnsavedChanges) {
      this.spinner.showLoader();

      try {

        // try {
        // const result1 = await uploadData({
        //   // data: event.target.result,
        //   data: this.logoImageSrc,
        //   path: `picture-submissions/${this.campaignId}_1.png`
        // });
        // } catch (e) {
        //   console.log("error", e);
        // }


        const result = await uploadData({
          path: ({identityId}) => `media/${identityId}/1.jpg`,
          data: this.logoImageSrc,
          options: {
            onProgress: ({ transferredBytes, totalBytes }) => {
              if (totalBytes) {
                console.log(
                  `Upload progress ${Math.round(
                    (transferredBytes / totalBytes) * 100
                  )} %`
                );
              }
            },
          },
        }).result;
        console.log("Path from Response: ", result.path);
        this.spinner.hideLoader();
        this.hasUnsavedChanges = false;
        stepper.next();
        this.snackbar.openSnackBar(SnackbarType.Success, 'Event and campaign details saved', undefined, 2000);
      } catch (error) {
        this.spinner.hideLoader();
        console.log("Error : ", error);
      }




      // setTimeout(() => {
      //   this.spinner.hideLoader();
      //   stepper.next();
      //   this.hasUnsavedChanges = false;
      //   this.snackbar.openSnackBar(SnackbarType.Success, 'Event and campaign details saved', undefined, 2000);
      // }, 2000);
    }
  }

  public fillEventForm(): void {

    const randomKitchenObjectName1 = FillFormHelper.randomKitchenObjectName();
    const eventName = `${randomKitchenObjectName1}fest ${new Date().getUTCFullYear()}`;

    this.campaignFormGroup.patchValue({
      eventName: eventName,
      campaignName: 'Campaign Name',
      location: 'Location',
      logoImageUrl: 'icon.jpg',
      openingDate: new Date(),
      closingDate: new Date(),
      attendeeCount: 1000,
      valuePerPost: 10,
      valuePerClick: 10,
      valuePerAcquisition: 100
    });
  }

  public fillSocialForm(): void {
    this.socialPostFormGroup.patchValue({
      postText: 'Click here to find out more:',
      postForwardUrl: 'https://www.buzzwave.io',
      postImageUrl: 'image.jpg'
    });
  }
}
