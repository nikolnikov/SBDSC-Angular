import {
    AfterViewInit,
    Component,
    ElementRef,
    Inject,
    Input,
    Renderer2
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

export interface NavItem {
    image?: string;
    label: string;
    route?: string;
    subNav?: NavItem[];
}

export interface TopBarItem {
    icon?: string;
    label: string;
    route?: string;
}

@Component({
    selector: 'qds-header',
    template: `
        <div class="ds-topbar" *ngIf="topBarData.length">
            <div
                class="ds-row"
                [class.--margins]="!noMargins"
                [class.--max-width]="!noMaxWidth"
            >
                <ng-container *ngFor="let item of topBarData">
                    <a [href]="item.route" class="ds-link --inverse">
                        <qds-icon *ngIf="item.icon" [name]="item.icon" />
                        {{ item.label }}
                    </a>
                </ng-container>

                <button
                    class="ds-button --icon isInverse ds-topbar__account"
                    *ngIf="showUserAccount"
                >
                    <span>LS</span>
                    <span
                        class="ds-icon--user-circle"
                        aria-label="user-circle"
                        role="img"
                    ></span>
                </button>
            </div>
        </div>

        <header
            class="ds-header"
            [class]="customClasses"
            [class.--fixed]="mobileNavOpen"
        >
            <div
                class="ds-row"
                [class.--margins]="!noMargins"
                [class.--max-width]="!noMaxWidth"
            >
                <a class="ds-brand-wrapper --{{ logoSize }}" href="/">
                    <img [src]="logo" alt="logo" />
                </a>

                <nav
                    class="ds-header__nav"
                    [class.--show]="mobileNavOpen"
                    role="navigation"
                >
                    <ng-container *ngFor="let navGroup of navData">
                        <div class="ds-header__nav-group">
                            <div
                                *ngFor="let navItem of navGroup"
                                class="ds-header__nav-item"
                                [class.--dropdown]="navItem.subNav"
                            >
                                <a
                                    [href]="navItem.route"
                                    *ngIf="!navItem.subNav"
                                    >{{ navItem.label }}</a
                                >

                                <a *ngIf="navItem.subNav">{{
                                    navItem.label
                                }}</a>

                                <div
                                    class="ds-header__subnav"
                                    *ngIf="navItem.subNav"
                                >
                                    <div
                                        class="ds-row"
                                        [class.--margins]="!noMargins"
                                        [class.--max-width]="!noMaxWidth"
                                    >
                                        <div class="ds-header__subnav-content">
                                            <div
                                                class="ds-header__subnav-title"
                                            >
                                                {{ navItem.label }}
                                            </div>

                                            <ul class="ds-header__subnav-links">
                                                <li
                                                    *ngFor="
                                                        let subItem of navItem.subNav
                                                    "
                                                >
                                                    <a
                                                        [href]="subItem.route"
                                                        class="ds-link"
                                                    >
                                                        {{ subItem.label }}
                                                    </a>
                                                </li>
                                            </ul>

                                            <div
                                                class="ds-header__subnav-img"
                                                *ngIf="navItem.image"
                                            >
                                                <img
                                                    [src]="navItem.image"
                                                    alt="{{ navItem.label }}"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ng-container>
                </nav>

                <div class="ds-header__right">
                    <div class="ds-header__actions">
                        <button
                            class="ds-button --primary --sm"
                            *ngIf="showButton"
                        >
                            Button
                        </button>

                        <mat-form-field class="ds-input" *ngIf="showSearch">
                            <span class="ds-icon--search" matPrefix></span>
                            <input
                                matInput
                                id="search-input"
                                placeholder="Search"
                            />
                        </mat-form-field>
                    </div>

                    <div class="ds-header__mobile">
                        <button
                            class="ds-button --icon"
                            (clickHandler)="toggleMobileNav()"
                        >
                            <ng-container *ngIf="!mobileNavOpen" else closeIcon>
                                <span class="ds-icon--menu"></span>
                            </ng-container>
                            <ng-template #closeIcon>
                                <span class="ds-icon--close"></span>
                            </ng-template>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    `
})
export class QDSHeaderComponent implements AfterViewInit {
    @Input() customClasses: string = '';
    @Input() logo: string = '';
    @Input() logoSize: string = '';
    @Input() navData: NavItem[][] = [];
    @Input() noMargins: boolean = false;
    @Input() noMaxWidth: boolean = false;
    @Input() showTopBar: boolean = false;
    @Input() topBarData: TopBarItem[] = [];
    @Input() showButton: boolean = false;
    @Input() showSearch: boolean = false;
    @Input() showUserAccount: boolean = false;

    mobileNavOpen: boolean = false;

    private readonly scrollBlockClass = 'cdk-global-scrollblock';

    toggleMobileNav(): void {
        this.mobileNavOpen = !this.mobileNavOpen;
        this.updateHtmlScrollBlock();
    }

    private updateHtmlScrollBlock(): void {
        const htmlElement = this.document.documentElement; // Get <html> element
        if (this.mobileNavOpen) {
            this.renderer.addClass(htmlElement, this.scrollBlockClass);
        } else {
            this.renderer.removeClass(htmlElement, this.scrollBlockClass);
        }
    }

    constructor(
        private el: ElementRef,
        private renderer: Renderer2,
        @Inject(DOCUMENT) private document: Document
    ) {}

    ngOnInit(): void {
        this.updateHtmlScrollBlock();
    }

    ngAfterViewInit() {
        const attrs = this.el.nativeElement.getAttributeNames();
        attrs.forEach((attr: string) =>
            this.renderer.removeAttribute(this.el.nativeElement, attr)
        );
    }
}
