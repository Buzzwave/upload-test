import { BehaviorSubject, Subject, takeUntil, tap } from 'rxjs';

import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatProgressBarModule, ProgressBarMode } from '@angular/material/progress-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { Campaign } from '../../../helpers/interfaces';
import { CampaignStateService } from '../../services/campaign-state.service';

@Component({
  selector: 'app-campaign-grid',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButton,
    MatIcon,
    MatProgressBarModule
  ],
  templateUrl: './campaign-grid.component.html',
  styleUrl: './campaign-grid.component.scss'
})
export class CampaignGridComponent implements OnInit, OnDestroy {

  public displayedColumns: string[] = ['eventName', 'campaignName', 'description', 'location', 'openingDate', 'closingDate'];
  public campaignGridLoadingMode: ProgressBarMode = 'indeterminate';
  public campaignGridLoadingValue = 0;
  public isLoading$ = new BehaviorSubject<boolean>(true);
  protected onDestroy$ = new Subject();

  public campaigns$ = new BehaviorSubject<MatTableDataSource<Campaign>>(new MatTableDataSource<Campaign>());

  constructor(private state: CampaignStateService) { }

  ngOnInit(): void {

    this.state.loading$.pipe(
      tap((loading) => {
        this.isLoading$.next(loading);
        if (loading === true) {
          const dataSource = new MatTableDataSource<Campaign>();
          this.campaigns$.next(dataSource);
        }
      }),
      takeUntil(this.onDestroy$)
    ).subscribe();

    this.state.campaigns$.pipe(
      tap((campaigns) => {
        const dataSource = new MatTableDataSource<Campaign>();
        dataSource.data = campaigns ?? [];
        dataSource.data.sort((a, b) => {
          const dateA = new Date(a.event?.openingDate ?? '');
          const dateB = new Date(b.event?.openingDate ?? '');
          return dateA.getTime() - dateB.getTime();
        });
        this.campaigns$.next(dataSource);
      }),
      takeUntil(this.onDestroy$)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(null);
    this.onDestroy$.complete();
  }
}
