import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { CreateCampaignPageComponent } from '../../create-campaign-page.component';

@Component({
  selector: 'app-confirm-unsaved-changes',
  templateUrl: 'confirm-unsaved-changes.component.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmUnsavedChangesComponent {
  readonly dialogRef = inject(MatDialogRef<CreateCampaignPageComponent>);
}