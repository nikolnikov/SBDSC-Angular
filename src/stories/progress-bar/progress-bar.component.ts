import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    Renderer2
} from '@angular/core';

@Component({
    selector: 'qds-progress-bar',
    template: `
        <div
            class="ds-progress-wrap"
            [class]="customClasses"
            role="progressbar"
            aria-label="Progress"
        >
            <div class="ds-progress-bar --rounded">
                <div
                    class="--fill"
                    [ngStyle]="{ width: progressValue + '%' }"
                ></div>
            </div>

            <span class="percentage" *ngIf="showPercentage">
                {{ progressValue }} %
            </span>
        </div>
    `
})
export class QDSProgressBarComponent implements AfterViewInit {
    @Input() customClasses: string = '';
    @Input() progressValue: string = '50';
    @Input() showPercentage: boolean = true;

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
