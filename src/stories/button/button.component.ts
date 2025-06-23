import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'qds-button',
    template: `
        <ng-container *ngIf="isDownload; else regularButton">
            <button
                class="ds-button --primary"
                [class]="customClasses"
                [class.--downloading]="isDownloading"
                [class.--secondary]="type === 'secondary'"
                [class.--sm]="size === 'sm'"
                (click)="onClick($event)"
            >
                <span class="ds-icon--download-simple"></span>
                <div
                    class="ds-icon--loading"
                    aria-label="loading"
                    role="progressbar"
                >
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <span> Download<ins *ngIf="isDownloading">ing</ins> </span>
            </button>
        </ng-container>

        <ng-template #regularButton>
            <button
                [ngClass]="getButtonClasses()"
                [attr.aria-label]="label"
                [disabled]="isDisabled"
                (click)="onClick($event)"
            >
                <span *ngIf="icon" class="ds-icon--{{ icon }}"></span>
                <span>{{ label }}</span>
                <span *ngIf="iconRight" class="ds-icon--{{ iconRight }}"></span>
            </button>
        </ng-template>
    `
})
export class QDSButtonComponent {
    @Input() customClasses: string = '';
    @Input() icon: string = '';
    @Input() iconRight: string = '';
    @Input() isDestructive: boolean = false;
    @Input() isDisabled: boolean = false;
    @Input() isDownload: boolean = false;
    @Input() isInverse: boolean = false;
    @Input() label: string = '';
    @Input() size: 'sm' | 'lg' = 'lg';
    @Input() type: 'primary' | 'secondary' | 'ghost' = 'primary';

    @Output() clickHandler = new EventEmitter<Event>();

    isDownloading: boolean = false;

    onClick(event: Event) {
        this.clickHandler.emit(event);
        this.dlBtnClicked();
    }

    getButtonClasses() {
        return {
            'ds-button': true,
            [this.customClasses]: !!this.customClasses,
            [`--${this.type}`]: !!this.type,
            '--primary': this.type !== 'secondary' && this.type !== 'ghost',
            [`--${this.size}`]: !!this.size,
            '--destructive': this.isDestructive,
            '--disabled': this.isDisabled,
            '--inverse': this.isInverse
        };
    }

    dlBtnClicked() {
        this.isDownloading = true;

        setTimeout(() => {
            this.isDownloading = false;
        }, 3000);
    }
}
