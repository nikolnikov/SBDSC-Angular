import {
    AfterContentInit,
    AfterViewInit,
    Component,
    ContentChild,
    ElementRef,
    EventEmitter,
    Input,
    Output,
    Renderer2,
    TemplateRef,
    ViewChild
} from '@angular/core';

@Component({
    selector: 'qds-message',
    template: `
        <div
            class="ds-message"
            [class]="customClasses"
            [class.--informative]="type === 'informative'"
            [class.--success]="type === 'success'"
            [class.--warning]="type === 'warning'"
            [class.--error]="type === 'error'"
            role="alert"
        >
            <div *ngIf="!noIcon" class="ds-message__icon">
                <span class="ds-icon--{{ icon }}"></span>
            </div>

            <div class="ds-message__content">
                <div *ngIf="title" class="ds-message__title">{{ title }}</div>

                <span [innerHTML]="message"></span>

                <ng-container *ngIf="actions.length > 0">
                    <div
                        class="ds-message__actions"
                        [class.--inline]="inlineActions"
                    >
                        <a
                            class="ds-link"
                            *ngFor="let action of actions; let i = index"
                            href="{{ action.action }}"
                        >
                            {{ action.label }}
                        </a>
                    </div>
                </ng-container>
            </div>

            <button
                class="ds-button --icon"
                *ngIf="closeHandler.observers.length > 0"
                (click)="onClick($event)"
            >
                <span class="ds-icon--close"></span>
            </button>
        </div>
    `
})
export class QDSMessageComponent implements AfterViewInit {
    @Input() customClasses: string = '';
    @Input() actions: any[] = [];
    @Input() inlineActions: boolean = false;
    @Input() message: string = '';
    @Input() noIcon: boolean = false;
    @Input() title: string = '';
    @Input() type: 'neutral' | 'informative' | 'success' | 'warning' | 'error' =
        'neutral';

    @Output() closeHandler = new EventEmitter<Event>();

    onClick(event: Event) {
        this.closeHandler.emit(event);
    }

    iconType = {
        neutral: 'chat-teardrop-text',
        informative: 'info',
        success: 'check-circle',
        warning: 'warning',
        error: 'warning-octagon'
    };

    get icon(): string {
        return this.iconType[this.type];
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
