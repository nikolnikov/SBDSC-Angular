import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    Renderer2
} from '@angular/core';

@Component({
    selector: 'qds-loader',
    template: `
        <mat-spinner
            class="ds-loading"
            [ngClass]="customClasses"
            [class.--center]="isCentered"
            [class.--fixed]="isFixed"
            [strokeWidth]="12"
        ></mat-spinner>
    `
})
export class QDSLoaderComponent implements AfterViewInit {
    @Input() customClasses: string = '';
    @Input() isCentered: boolean = false;
    @Input() isFixed: boolean = false;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2
    ) {}

    ngAfterViewInit() {
        const attrs = this.el.nativeElement.getAttributeNames();
        attrs.forEach((attr: string) =>
            this.renderer.removeAttribute(this.el.nativeElement, attr)
        );
    }
}
