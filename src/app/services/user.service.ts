import { Injectable } from '@angular/core';
import { User } from '../shared/user';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { signOut } from 'aws-amplify/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router, public authenticator: AuthenticatorService) { }

  private _userLoggedIn$ = new BehaviorSubject<boolean>(false);
  private _userRegistered$ = new BehaviorSubject<boolean>(false);

  public get userLoggedIn$(): Observable<boolean> {
    const userLoggedIn = localStorage.getItem('buzzwaveadmin-userLoggedIn') ?? 'false';
    this._userLoggedIn$.next(userLoggedIn === 'true');
    return this._userLoggedIn$;
  }

  public get userRegistered$(): Observable<boolean> {
    const userRegistered = localStorage.getItem('buzzwaveadmin-userRegistered') ?? 'false';
    this._userRegistered$.next(userRegistered === 'true');
    return this._userRegistered$;
  }

  public get userLoggedInAndRegistered$(): Observable<boolean>  {
    const userLoggedIn = localStorage.getItem('buzzwaveadmin-userLoggedIn') ?? 'false';
    const userRegistered = localStorage.getItem('buzzwaveadmin-userRegistered') ?? 'false';
    return of(userLoggedIn === 'true' && userRegistered === 'true');
  }

  public get userInfo(): User {
    const user = localStorage.getItem('buzzwaveadmin-userInfo') ?? '{}';
    return JSON.parse(user);
  }

  public userLoggedInChange(value: boolean) {
    if (value) {
      localStorage.setItem('buzzwaveadmin-userLoggedIn', value.toString());
    } else {
      localStorage.removeItem('buzzwaveadmin-userLoggedIn');
      localStorage.removeItem('buzzwaveadmin-userRegistered');
    }
  }

  public userRegisteredChange(value: boolean) {
    localStorage.setItem('buzzwaveadmin-userRegistered', value.toString());
    this._userRegistered$.next(value);
  }

  public userInfoChange(value: User) {
    localStorage.setItem('buzzwaveadmin-userInfo', JSON.stringify(value));
  }

  public async signOut() {
    localStorage.removeItem('buzzwaveadmin-userLoggedIn');
    localStorage.removeItem('buzzwaveadmin-userRegistered');
    localStorage.removeItem('buzzwaveadmin-userInfo');
    this.router.navigate(['/']);
    await signOut();
  }
}
