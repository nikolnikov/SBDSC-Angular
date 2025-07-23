import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    Renderer2
} from '@angular/core';

@Component({
    selector: 'qds-badge',
    template: `
        <div
            class="ds-badge"
            [class]="customClasses"
            [ngClass]="getStatus()"
            [class.--secondary]="secondary"
            [class.--neutral]="!status"
            role="status"
        >
            <span
                [ngClass]="'ds-icon--' + icon"
                *ngIf="icon"
                [attr.aria-label]="icon"
                role="img"
            ></span>
            {{ label }}
        </div>
    `
})
export class QDSBadgeComponent implements AfterViewInit {
    @Input() customClasses: string = '';
    @Input() icon: string = '';
    @Input() label: string = '';
    @Input() secondary: boolean = false;
    @Input() status:
        | 'neutral'
        | 'informative'
        | 'success'
        | 'warning'
        | 'critical' = 'neutral';

    getStatus() {
        return `--${this.status}`;
    }

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
