import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[dateInputMask]'
})
export class DateInputMaskDirective {
    constructor(private el: ElementRef<HTMLInputElement>) {}

    @HostListener('input', ['$event'])
    onInput(): void {
        let input = this.el.nativeElement.value.replace(/\D/g, '');

        if (input.length > 8) {
            input = input.substring(0, 8);
        }

        let formatted = '';
        if (input.length > 0) {
            formatted += input.substring(0, 2);
        }
        if (input.length >= 3) {
            formatted += '/' + input.substring(2, 4);
        }
        if (input.length >= 5) {
            formatted += '/' + input.substring(4, 8);
        }

        this.el.nativeElement.value = formatted;
    }

    @HostListener('blur')
    onBlur(): void {
        const value = this.el.nativeElement.value;
        if (value && !/^\d{2}\/\d{2}\/\d{4}$/.test(value)) {
            this.el.nativeElement.value = ''; // Clear invalid
        }
    }
}
