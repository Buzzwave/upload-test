import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, shareReplay, takeUntil, tap } from 'rxjs/operators';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { routes } from '../app.routes';
import { UserService } from '../services/user.service';
import { PageSpinnerComponent } from "../shared/components/page-spinner/page-spinner.component";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  standalone: true,
  imports: [
    AsyncPipe,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterLink,
    RouterLinkActive,
    PageSpinnerComponent
]
})
export class LayoutComponent implements OnInit, OnDestroy {
  protected onDestroy$ = new Subject();

  private breakpointObserver = inject(BreakpointObserver);

  public rootRoutesTop = routes
    .filter(r => r.path && r.data?.['showInMenu'] === true && r.data?.['showAtTop'] === true)
    .map(r => ({ path: r.path as string, title: r.title, fontIcon: r.data?.['fontIcon'] ?? '', iconClass: r.data?.['iconClass'] ?? '' }));
  public rootRoutesBottom = routes
    .filter(r => r.path && r.data?.['showInMenu'] === true && r.data?.['showAtBottom'] === true )
    .filter(r => r.path && r.data?.['adminOnly'] === false || (r.data?.['adminOnly'] === true && this.userService.userInfo.isAdmin === true ))
    .map(r => ({ path: r.path as string, title: r.title, fontIcon: r.data?.['fontIcon'] ?? '', iconClass: r.data?.['iconClass'] ?? '' }));

  @ViewChild('drawer', { static: false }) drawer!: MatDrawer;

  public fullWidth$ = new BehaviorSubject<boolean>(true);

  public userHasCompletedFullSignup$ = new BehaviorSubject<boolean>(false);

  public isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Tablet, Breakpoints.Handset])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(public userService: UserService) {
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(null);
    this.onDestroy$.complete();
  }

  ngOnInit(): void {
    this.userService.userRegistered$.pipe(
      tap(registered => {
        this.userHasCompletedFullSignup$.next(registered);
        this.fullWidth$.next(registered);
      }),
      takeUntil(this.onDestroy$)
    ).subscribe();
  }

  public toggle() {
    this.drawer?.toggle();
  }

  public async signOut(): Promise<void> {
    try {
      this.userService.signOut();
      // this.authenticator.signOut();
    } catch (error) {
      console.error(error);
    }
  }

  public sideNavClass(): string {
    return this.fullWidth$.value ? '' : 'max-width-centered';
  }
}
