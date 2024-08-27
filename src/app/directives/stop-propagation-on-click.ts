import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[appStopPropagationOnClick]'
})
export class StopPropagationOnClickDirective {
    @HostListener('click', ['$event'])
    public onClick(event: MouseEvent): void {
        event.stopPropagation();
    }
}
