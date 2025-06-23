import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    Renderer2
} from '@angular/core';

@Component({
    selector: 'qds-banner',
    template: `
        <div
            class="ds-banner"
            [ngClass]="{
                '--branded': illustrativeIcon && !icon,
                '--centered': isCentered,
                '--icon': icon || illustrativeIcon,
                '--heading': title
            }"
            [class]="customClasses"
        >
            <ng-container *ngIf="!isCentered">
                <div
                    *ngIf="illustrativeIcon && !icon"
                    class="ds-banner__banner-icon"
                >
                    <img
                        src="https://ds.cdn.questdiagnostics.com/assets/ds-icons/ds-icon--illustrative-white--{{
                            illustrativeIcon
                        }}.svg"
                    />
                </div>
            </ng-container>

            <div
                class="ds-flex"
                [ngClass]="{
                    '--row --wrap --start-start': !isCentered,
                    'ds-banner__center-wrap': isCentered
                }"
            >
                <ng-container *ngIf="isCentered">
                    <div
                        *ngIf="illustrativeIcon && !icon"
                        class="ds-banner__banner-icon"
                    >
                        <span
                            class="ds-icon--illustrative-white--{{
                                illustrativeIcon
                            }}"
                        ></span>
                    </div>
                </ng-container>

                <div *ngIf="title" class="ds-banner__heading">
                    <h3>{{ title }}</h3>
                </div>

                <div
                    class="ds-banner__inner-content"
                    [class.ds-banner__center-wrap]="isCentered"
                >
                    <div
                        *ngIf="icon && !illustrativeIcon"
                        class="ds-banner__banner-icon"
                    >
                        <span class="ds-icon--{{ icon }}"></span>
                    </div>

                    <!-- Ensure ng-content is always rendered -->
                    <ng-content></ng-content>
                </div>
            </div>

            <button class="ds-button --icon --inverse --sm" *ngIf="showDismiss">
                <span class="ds-icon--close"></span>
            </button>
        </div>
    `
})
export class QDSBannerComponent implements AfterViewInit {
    @Input() customClasses: string = '';
    @Input() icon: string = '';
    @Input() illustrativeIcon: string = '';
    @Input() isCentered: boolean = false;
    @Input() showDismiss: boolean = false;
    @Input() title: string = '';

    centerContent() {
        return {
            'ds-flex --row --start-center': true
        };
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
