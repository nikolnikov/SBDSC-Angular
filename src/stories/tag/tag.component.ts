import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    Output,
    Renderer2
} from '@angular/core';

@Component({
    selector: 'qds-tag',
    template: `
        <button
            [ngClass]="['ds-tag', customClasses]"
            [class.--selected]="isSelected"
            [class.--disabled]="isDisabled"
            [attr.aria-label]="label"
            [disabled]="isDisabled"
            [attr.tabindex]="isDisabled ? -1 : 0"
            (click)="handleClick($event)"
        >
            {{ label }}
            <span
                *ngIf="showClose"
                class="ds-icon--close"
                role="button"
                aria-label="Dismiss"
                (click)="handleHide($event)"
            ></span>
        </button>
    `
})
export class QDSTagComponent implements AfterViewInit {
    @Input() customClasses: string = '';
    @Input() label: string = '';
    @Input() isDisabled: boolean = false;
    @Input() showClose: boolean = false;
    @Input() isSelected: boolean = false;

    @Output() clickHandler = new EventEmitter<MouseEvent>();
    @Output() hideHandler = new EventEmitter<MouseEvent>();

    handleClick(event: MouseEvent): void {
        if (!this.isDisabled) {
            this.isSelected = !this.isSelected;
            this.clickHandler.emit(event);
        }
    }

    handleHide(event: MouseEvent): void {
        event.stopPropagation();
        if (!this.isDisabled) {
            this.isSelected = !this.isSelected;
            this.hideHandler.emit(event);
        }
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
