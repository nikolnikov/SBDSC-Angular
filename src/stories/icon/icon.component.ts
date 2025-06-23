import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    Renderer2
} from '@angular/core';

@Component({
    selector: 'qds-icon',
    template: `
        <ng-container *ngIf="isIllustrativeType(); else spanTemplate">
            <img
                [class]="customClasses"
                [src]="getImgSrc()"
                [alt]="name"
                [style.width]="size"
                [style.height]="'auto'"
            />
        </ng-container>
        <ng-template #spanTemplate>
            <span
                [class]="getIconClasses()"
                [attr.aria-label]="name"
                role="img"
            ></span>
        </ng-template>
    `
})
export class QDSIconComponent implements AfterViewInit {
    @Input() customClasses: string = '';
    @Input() color: string = '';
    @Input() matPrefix: boolean = false;
    @Input() matSuffix: boolean = false;
    @Input() name: string = '';
    @Input() size: string = '';
    @Input() type: '' | 'illustrative' | 'illustrativeWhite' | 'billing' = '';

    isIllustrativeType(): boolean {
        return (
            this.type === 'illustrative' ||
            this.type === 'illustrativeWhite' ||
            this.type === 'billing'
        );
    }

    getImgSrc(): string {
        return `https://ds.cdn.questdiagnostics.com/assets/ds-icons/ds-icon${
            this.type === 'illustrative' ? '--illustrative-green' : ''
        }${this.type === 'illustrativeWhite' ? '--illustrative-white' : ''}--${
            this.name
        }.svg`;
    }

    getIconClasses() {
        return {
            [`ds-icon--${this.name}`]: !!this.name,
            [this.customClasses]: !!this.customClasses,
            [this.getColor()]: !!this.color,
            [this.getSize()]: !!this.size,
            [`matPrefix`]: !!this.matPrefix,
            [`matSuffix`]: !!this.matSuffix
        };
    }

    getColor() {
        return `ds-${this.color}`;
    }

    getSize() {
        return `ds-font-${this.size}`;
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
