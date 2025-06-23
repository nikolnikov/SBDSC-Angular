import {
    AfterViewInit,
    Component,
    ElementRef,
    HostListener,
    Inject,
    Input,
    ViewChild
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'qds-modal',
    template: `
        <div
            [class.--alert]="type === 'alert'"
            [class.--error]="type === 'error'"
            [class.--informative]="type === 'informative'"
            [class.--all-btns]="
                buttonLabel && secondaryButtonLabel && ghostButtonLabel
            "
        >
            <div
                class="ds-modal__wrapper"
                [class.--all-btns]="ghostButtonLabel"
            >
                <div class="ds-modal__header">
                    <h2 *ngIf="title">
                        {{ title }}
                    </h2>

                    <button
                        class="ds-button --icon --md"
                        (click)="onClose()"
                        *ngIf="!hideX"
                    >
                        <span class="ds-icon--close"></span>
                    </button>
                </div>

                <div class="ds-modal__content" #modalContent>
                    <div [innerHTML]="content"></div>
                </div>
            </div>

            <div
                *ngIf="buttonLabel || secondaryButtonLabel || ghostButtonLabel"
                class="ds-modal__actions"
                [class.--scroll]="isContentScrollable"
            >
                <button
                    class="ds-button --ghost"
                    *ngIf="ghostButtonLabel"
                    (click)="onGhostButtonClick()"
                >
                    {{ ghostButtonLabel }}
                </button>

                <div class="ds-modal__actions-right">
                    <button
                        class="ds-button --secondary"
                        *ngIf="secondaryButtonLabel"
                        (click)="onSecondaryButtonClick()"
                    >
                        {{ secondaryButtonLabel }}
                    </button>

                    <button
                        class="ds-button --primary"
                        *ngIf="buttonLabel"
                        (click)="onPrimaryButtonClick()"
                    >
                        {{ buttonLabel }}
                    </button>
                </div>
            </div>
        </div>
    `
})
export class QDSModalComponent implements AfterViewInit {
    @Input() buttonHandler: Function = () => {};
    @Input() buttonLabel: string = '';
    @Input() content: string = '';
    @Input() ghostButtonHandler: Function = () => {};
    @Input() ghostButtonLabel: string = '';
    @Input() hideX: boolean = false;
    @Input() secondaryButtonHandler: Function = () => {};
    @Input() secondaryButtonLabel: string = '';
    @Input() title: string = '';
    @Input() type: 'alert' | 'error' | 'informative' = 'informative';

    @ViewChild('modalContent') modalContent!: ElementRef;
    isContentScrollable = false;

    @HostListener('window:resize')
    onResize() {
        this.checkScrollability();
    }

    onClose() {
        this.dialogRef.close();
    }

    onPrimaryButtonClick() {
        this.buttonHandler();
        this.dialogRef.close();
    }

    onSecondaryButtonClick() {
        this.secondaryButtonHandler();
        this.dialogRef.close();
    }

    onGhostButtonClick() {
        this.ghostButtonHandler();
        this.dialogRef.close();
    }

    ngAfterViewInit() {
        setTimeout(() => this.checkScrollability(), 1);
    }

    checkScrollability() {
        const content = this.modalContent?.nativeElement;
        if (content) {
            this.isContentScrollable =
                content.scrollHeight > content.clientHeight;
        } else {
            this.isContentScrollable = false;
        }
    }

    constructor(
        public dialogRef: MatDialogRef<QDSModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        this.content = data.content;
        this.title = data.title;
        this.buttonLabel = data.buttonLabel;
        this.buttonHandler = data.buttonHandler;
        this.secondaryButtonLabel = data.secondaryButtonLabel;
        this.secondaryButtonHandler = data.secondaryButtonHandler;
        this.ghostButtonLabel = data.ghostButtonLabel;
        this.ghostButtonHandler = data.ghostButtonHandler;
        this.hideX = data.hideX;
        this.type = data.type;
    }
}
