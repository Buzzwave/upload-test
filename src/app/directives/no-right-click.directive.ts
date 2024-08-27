/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoRightClick]'
})
export class NoRightClickDirective {

  constructor() { }

  @HostListener('contextmenu', ['$event'])
  onRightClick(event: { preventDefault: () => void; }) {
    event.preventDefault();
  }
}
