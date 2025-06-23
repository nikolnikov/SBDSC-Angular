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
                *ngIf="status !== 'neutral'"
                [ngClass]="'ds-icon--' + icons[status]"
            ></span>
            {{ label }}
        </div>
    `
})
export class QDSBadgeComponent implements AfterViewInit {
    @Input() customClasses: string = '';
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

    icons = {
        success: 'check-circle',
        informative: 'info',
        warning: 'warning',
        critical: 'warning-octagon'
    };

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
