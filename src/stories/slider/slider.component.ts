import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    OnInit,
    Renderer2,
    ViewChild
} from '@angular/core';

@Component({
    selector: 'qds-slider',
    template: `
        <ng-container *ngIf="doubleSlider; else singleSliderTemplate">
            <div
                class="ds-double-slider__wrap"
                [class]="customClasses"
                [class.disabled]="isDisabled"
            >
                <div class="ds-double-slider__assets">
                    <div class="--left-slider --value">
                        {{ leftSliderValue }}
                    </div>

                    <div class="ds-double-slider__tracks">
                        <div class="--static"></div>
                        <div
                            class="--right-slider --active"
                            [style.width.%]="rightSliderValue"
                        ></div>
                        <div
                            class="--left-slider --active"
                            [style.width.%]="leftSliderValue"
                        ></div>
                        <input
                            #leftSliderRef
                            class="ds-slider-double --left-slider"
                            type="range"
                            min="0"
                            max="100"
                            [value]="leftSliderValue"
                            [disabled]="isDisabled"
                            (input)="
                                doubleUpdatedSliderValue(
                                    $any($event.target).value,
                                    'left'
                                )
                            "
                        />
                        <input
                            #rightSliderRef
                            class="ds-slider-double --right-slider"
                            type="range"
                            min="0"
                            max="100"
                            [value]="rightSliderValue"
                            [disabled]="isDisabled"
                            (input)="
                                doubleUpdatedSliderValue(
                                    $any($event.target).value,
                                    'right'
                                )
                            "
                        />
                        <div class="focus-outline"></div>
                    </div>

                    <div class="--right-slider --value">
                        {{ rightSliderValue }}
                    </div>
                </div>
            </div>
        </ng-container>

        <ng-template #singleSliderTemplate>
            <div
                class="ds-slider__wrap"
                [class]="customClasses"
                [class.disabled]="isDisabled"
            >
                <div class="ds-slider__tracks">
                    <div class="--static"></div>
                    <div class="--active" [style.width.%]="sliderValue"></div>
                </div>

                <div class="ds-slider__controls">
                    <input
                        #sliderRef
                        class="ds-slider"
                        type="range"
                        min="0"
                        max="100"
                        [value]="sliderValue"
                        [disabled]="isDisabled"
                        (input)="
                            singleUpdatedSliderValue($any($event.target).value)
                        "
                    />
                    <div class="--value">{{ sliderValue }}</div>
                </div>
            </div>
        </ng-template>
    `
})
// Implement OnInit
export class QDSSliderComponent implements AfterViewInit, OnInit {
    @Input() customClasses: string = '';
    @Input() defaultValue: number = 0;
    @Input() doubleSlider: boolean = false;
    @Input() isDisabled: boolean = false;
    @Input() leftDefaultValue: number = 0;
    @Input() rightDefaultValue: number = 100;

    @ViewChild('sliderRef') sliderRef!: ElementRef;
    @ViewChild('leftSliderRef') leftSliderRef!: ElementRef;
    @ViewChild('rightSliderRef') rightSliderRef!: ElementRef;

    sliderValue: number = 0;
    leftSliderValue: number = 0;
    rightSliderValue: number = 100;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2
    ) {}

    ngOnInit(): void {
        this.sliderValue = this.defaultValue;
        this.leftSliderValue = this.leftDefaultValue;
        this.rightSliderValue = Math.max(
            this.rightDefaultValue,
            this.leftSliderValue
        );
    }

    singleUpdatedSliderValue(value: string): void {
        if (!this.isDisabled) {
            this.sliderValue = Number(value);
        }
    }

    doubleUpdatedSliderValue(value: string, side: 'left' | 'right'): void {
        if (!this.isDisabled) {
            const numericValue = Number(value);
            if (side === 'left') {
                this.leftSliderValue = Math.min(
                    numericValue,
                    this.rightSliderValue
                );
            } else {
                this.rightSliderValue = Math.max(
                    numericValue,
                    this.leftSliderValue
                );
            }
        }
    }

    ngAfterViewInit() {
        const attrs = this.el.nativeElement.getAttributeNames();
        attrs.forEach((attr: string) =>
            this.renderer.removeAttribute(this.el.nativeElement, attr)
        );
    }
}
