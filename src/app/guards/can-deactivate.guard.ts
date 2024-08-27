import { CanDeactivateFn } from '@angular/router';
import { CanComponentDeactivate } from '../shared/interfaces/can-component-deactivate.interface';

export const canDeactivateGuard: CanDeactivateFn<CanComponentDeactivate> = (component: CanComponentDeactivate) => {
  return component.canDeactivate ? component.canDeactivate() : true;
};