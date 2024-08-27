import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { Campaign, Event } from '../../helpers/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CampaignStateService {

  private _events$ = new BehaviorSubject<Event[]>([]);
  private _campaigns$ = new BehaviorSubject<Campaign[]>([]);
  private _loading$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  get events$(): Observable<Event[]> {
    return this._events$.asObservable();
  }

  get campaigns$(): Observable<Campaign[]> {
    return this._campaigns$.asObservable();
  }

  get loading$(): Observable<boolean> {
    return this._loading$.asObservable();
  }

  setEvents(events: Event[]): void {
    this._events$.next(events);
  }

  setCampaigns(campaigns: Campaign[]): void {
    this._campaigns$.next(campaigns);
  }

  setLoading(loading: boolean): void {
    this._loading$.next(loading);
  }

  reset(): void {
    this._events$.next([]);
    this._campaigns$.next([]);
    this._loading$.next(false);
  }
}
