import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safePipe', standalone: true })

export class SafePipe implements PipeTransform {

    constructor(protected sanitizer: DomSanitizer) { }

    transform(value: string | null | undefined) {
        if (!value) {
            return '';
        }
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
}