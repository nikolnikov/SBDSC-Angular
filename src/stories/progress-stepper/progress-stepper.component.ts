import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    Renderer2
} from '@angular/core';

@Component({
    selector: 'qds-progress-stepper',
    template: `
        <div
            class="ds-progress-stepper"
            [class.--vertical]="isVertical"
            [class]="customClasses"
        >
            <div
                *ngFor="let step of steps; let i = index"
                class="ds-step"
                [class.completed]="step.status === 'completed'"
                [class.error]="step.status === 'error'"
                [class.sent-back]="step.status === 'sent-back'"
                [class.current]="step.status === 'current'"
                tabindex="-1"
                aria-label="step"
            >
                <span class="ds-flex --start-center">
                    <span class="--dash"></span>
                    <span class="--dot">
                        <ng-container *ngIf="!hideNumbers">
                            {{ i + 1 }}
                        </ng-container>
                    </span>
                    <span class="--dash"></span>
                </span>

                <label
                    *ngIf="!hideLabels"
                    class="ds-step__label ds-flex --column"
                    [ngClass]="isVertical ? '--start-start' : '--center-center'"
                >
                    <span [attr.aria-label]="step.label">
                        {{ step.label }}
                    </span>

                    <div
                        *ngIf="step.subLabel"
                        class="--sub-label"
                        [attr.aria-label]="step.subLabel"
                    >
                        {{ step.subLabel }}
                    </div>
                </label>
            </div>
        </div>
    `
})
export class QDSProgressStepperComponent implements AfterViewInit {
    @Input() customClasses: string = '';
    @Input() hideLabels: boolean = false;
    @Input() hideNumbers: boolean = false;
    @Input() isVertical: boolean = false;
    @Input() steps: any[] = [];
    @Input() status:
        | 'current'
        | 'completed'
        | 'error'
        | 'warning'
        | 'cancelled'
        | '' = '';

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
