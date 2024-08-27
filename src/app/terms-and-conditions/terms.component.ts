import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
    selector: 'app-terms',
    templateUrl: 'terms.component.html',
    standalone: true,
    imports: [MatDialogModule, MatButtonModule],
  })
  export class TermsComponent {}