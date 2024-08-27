import { Component, ViewEncapsulation } from '@angular/core';
import { PageSpinnerService } from './services/page-spinner.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-spinner',
  standalone: true,
  imports: [
    MatProgressSpinnerModule,
    CommonModule
  ],
  templateUrl: './page-spinner.component.html',
  styleUrl: './page-spinner.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})

export class PageSpinnerComponent {

  public loadingMessages = [
    'Whisking eggs...',
    'Chopping onions...',
    'Heating frying pot...',
    'Boiling water...',
    'Slicing tomatoes...',
    'Grating cheese...',
    'Washing salad...',
    'Mixing ingredients...',
    'Brewing coffee...',
    'Pouring tea...',
  ];

  constructor(public loader: PageSpinnerService) { }
}
