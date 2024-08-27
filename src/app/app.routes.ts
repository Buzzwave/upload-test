import { Routes } from '@angular/router';

import { userLoggedInAndRegisteredGuard as UserLoggedInAndRegisteredGuard } from './guards/user-logged-in-and-registered.guard';
import { userLoggedInGuard as UserLoggedInGuard } from './guards/user-logged-in.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminGuard } from './guards/admin.guard';
import { canDeactivateGuard } from './guards/can-deactivate.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'register',
    title: 'Buzwave - Register',
    data: { showInMenu: false, showAtTop: true },
    loadComponent: () =>
      import('./register/register.component').then(
        (c) => c.RegisterComponent
      ),
    canActivate: [UserLoggedInGuard]
  },
  {
    path: 'home',
    title: 'Home',
    data: { showInMenu: true, showAtTop: true, fontIcon: 'home' },
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
    canActivate: [UserLoggedInAndRegisteredGuard]
  },
  {
    path: 'campaigns',
    title: 'Campaigns',
    data: { showInMenu: true, showAtTop: true, fontIcon: 'campaign', iconClass: 'campaignIcon' },
    loadComponent: () =>
      import('./campaign/campaign-page.component').then(
        (c) => c.CampaignPageComponent
      ),
    canActivate: [UserLoggedInAndRegisteredGuard],
  },
  {
    path: 'campaigns/create',
    title: 'Campaign Create',
    loadComponent: () =>
      import('./create-campaign/create-campaign-page.component').then(
        (c) => c.CreateCampaignPageComponent
      ),
    canActivate: [UserLoggedInAndRegisteredGuard],
    canDeactivate: [canDeactivateGuard]
  },
  {
    path: 'settings',
    title: 'Settings',
    data: { showInMenu: true, showAtBottom: true, fontIcon: 'settings', adminOnly: false },
    loadComponent: () =>
      import('./settings/settings.component').then(
        (c) => c.SettingsComponent
      ),
    canActivate: [UserLoggedInAndRegisteredGuard]
  },
  {
    path: 'admin',
    title: 'Admin',
    data: { showInMenu: true, showAtBottom: true, fontIcon: 'admin_panel_settings', adminOnly: true },
    loadComponent: () =>
      import('./admin/admin.component').then(
        (c) => c.AdminComponent
      ),
    canActivate: [AdminGuard]
  },

  // To be removed
  {
    path: 'address',
    title: 'Address',
    data: { showInMenu: false },
    loadComponent: () =>
      import('./zzExamples/address-form/address-form.component').then(
        (c) => c.AddressFormComponent
      ),
    canActivate: [UserLoggedInAndRegisteredGuard]
  },
  {
    path: 'table',
    data: { showInMenu: false },
    loadComponent: () =>
      import('./zzExamples/table/table.component').then(
        (c) => c.TableComponent
      ),
    title: 'Table',
    canActivate: [UserLoggedInAndRegisteredGuard]
  },
  {
    path: 'tree',
    data: { showInMenu: false },
    loadComponent: () =>
      import('./zzExamples/tree/tree.component').then(
        (c) => c.TreeComponent
      ),
    title: 'Tree',
    canActivate: [UserLoggedInAndRegisteredGuard]
  },
  {
    path: 'drag-drop',
    data: { showInMenu: false },
    loadComponent: () =>
      import('./zzExamples/drag-drop/drag-drop.component').then(
        (c) => c.DragDropComponent
      ),
    title: 'Drag-Drop',
    canActivate: [UserLoggedInAndRegisteredGuard]
  },
  {
    path: 'signout',
    data: { showInMenu: false },
    loadComponent: () =>
      import('./sign-out/sign-out.component').then(
        (c) => c.SignOutComponent
      )
  },
  {
    path: '**',
    component: NotFoundComponent,
    pathMatch: 'full'
  }
];
