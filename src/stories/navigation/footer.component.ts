import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    Renderer2
} from '@angular/core';

@Component({
    selector: 'qds-footer',
    template: `
        <ng-container *ngIf="type === 'cit'">
            <footer class="ds-footer ds-grid" [class]="customClasses">
                <div class="ds-col-12 ds-footer__content">
                    <div class="ds-col-12 --top">
                        <div class="--inner-content">
                            <div class="--logo">
                                <img
                                    src="https://ds.cdn.questdiagnostics.com/assets/img/quest-logo.svg"
                                    aria-label="Quest Diagnostics"
                                />
                            </div>

                            <div class="--nav-container">
                                <div
                                    class="--nav-category"
                                    [ngClass]="{
                                        '--active': linkGroup === 1
                                    }"
                                >
                                    <div
                                        (click)="toggleActive(1)"
                                        class="--title"
                                    >
                                        Shop
                                    </div>
                                    <ul>
                                        <li>
                                            <a
                                                href="https://www.questhealth.com/shop"
                                                >All Tests</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.questhealth.com/shop/general-health"
                                                >General Health</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.questhealth.com/shop/womens-health"
                                                >Women's Health</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.questhealth.com/shop/mens-health"
                                                >Men's Health</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.questhealth.com/shop/sexual-health"
                                                >Sexual Health</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.questhealth.com/shop/allergy"
                                                >Allergy</a
                                            >
                                        </li>
                                    </ul>
                                </div>

                                <div
                                    class="--nav-category"
                                    [ngClass]="{
                                        '--active': linkGroup === 2
                                    }"
                                >
                                    <div
                                        class="--title"
                                        (click)="toggleActive(2)"
                                    >
                                        Support
                                    </div>
                                    <ul>
                                        <li>
                                            <a
                                                href="https://www.questhealth.com/account"
                                                >Get Results</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.questhealth.com/find-location"
                                                >Find a Location</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.questhealth.com/faqs.html"
                                                >FAQs</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.questhealth.com/how-it-works.html"
                                                >How It Works</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.questhealth.com/customer-support.html"
                                                >Customer Support</a
                                            >
                                        </li>
                                    </ul>
                                </div>

                                <div
                                    class="--nav-category"
                                    [ngClass]="{
                                        '--active': linkGroup === 3
                                    }"
                                >
                                    <div
                                        class="--title"
                                        (click)="toggleActive(3)"
                                    >
                                        About Quest
                                    </div>
                                    <ul>
                                        <li>
                                            <a
                                                href="https://www.questdiagnostics.com/"
                                                >Quest Diagnostics</a
                                            >
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="--social">
                            <div>
                                <a
                                    href="https://www.facebook.com/questdiagnostics?sk=wall"
                                >
                                    <img
                                        src="https://ds.cdn.questdiagnostics.com/assets/ds-icons/social/ds-icon--footer-white--facebook-logo.svg"
                                        aria-label="Facebook"
                                    />
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.instagram.com/testwithquest/"
                                >
                                    <img
                                        src="https://ds.cdn.questdiagnostics.com/assets/ds-icons/social/ds-icon--footer-white--instagram-logo.svg"
                                        aria-label="Instagram"
                                    />
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.linkedin.com/company/quest-diagnostics"
                                >
                                    <img
                                        src="https://ds.cdn.questdiagnostics.com/assets/ds-icons/social/ds-icon--footer-white--linkedin-logo.svg"
                                        aria-label="LinkedIn"
                                    />
                                </a>
                            </div>
                            <div>
                                <a href="https://twitter.com/QuestDX">
                                    <img
                                        src="https://ds.cdn.questdiagnostics.com/assets/ds-icons/social/ds-icon--footer-white--twitterx-logo.svg"
                                        aria-label="Twitter"
                                    />
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.youtube.com/channel/UCiylgcbQtZMTdQbRw73yr3w"
                                >
                                    <img
                                        src="https://ds.cdn.questdiagnostics.com/assets/ds-icons/social/ds-icon--footer-white--youtube-logo.svg"
                                        aria-label="YouTube"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ds-col-12 ds-footer__content">
                    <div class="ds-col-12 --bottom">
                        <div class="ds-col-12 ds-flex --legal-links">
                            <a
                                href="https://www.questhealth.com/privacy-notice.html"
                            >
                                Privacy Notice
                            </a>
                            <a
                                href="https://www.questhealth.com/terms-of-use.html"
                            >
                                Terms of Use
                            </a>
                            <a
                                href="https://www.questdiagnostics.com/home/nondiscrimination"
                            >
                                Language Assistance / Non-Discrimination
                            </a>
                            <a
                                href="https://www.questdiagnostics.com/our-company/accessibility"
                            >
                                Accessibility Policy
                            </a>
                            <!--Should open a modal-->
                            <a class="ds-link --icons" href="#" target="_blank">
                                <img
                                    src="https://ds.cdn.questdiagnostics.com/assets/img/your-privacy.svg"
                                    aria-label="Your Privacy Choices"
                                />
                                <span>Your Privacy Choices</span>
                            </a>
                            <a href="https://www.questhealth.com/faqs.html">
                                FAQs
                            </a>
                        </div>

                        <div class="ds-col-12 ds-flex --column --legal-text">
                            <span>
                                Quest&reg; is the brand name used for services
                                offered by Quest Diagnostics Incorporated and
                                its affiliated companies. Quest Diagnostics
                                Incorporated and certain affiliates are CLIA
                                certified laboratories that provide HIPAA
                                covered services. Other affiliates operated
                                under the Quest&reg; brand, such as Quest
                                Consumer Inc., do not provide HIPAA covered
                                services.
                            </span>
                            <span>
                                Quest, Quest Diagnostics, the associated logo,
                                Nichols Institute and all associated Quest
                                Diagnostics marks are the registered trademarks
                                of Quest Diagnostics. All third party marks -
                                &reg; and &trade; - are the property of their
                                respective owners. &copy; 2000-{{ year }} Quest
                                Diagnostics Incorporated. All rights reserved.
                            </span>
                            <span>
                                <em
                                    >Image content features models and is
                                    intended for illustrative purposes only.</em
                                >
                            </span>
                        </div>
                        <div class="ds-col-12 --copyright">
                            &copy; {{ year }} Quest Diagnostics Incorporated.
                        </div>
                        <div class="ds-col-12 ds-mt-8">
                            <span>
                                Quest Consumer Inc., 500 Plaza Drive, Secaucus,
                                New Jersey 07094
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </ng-container>

        <ng-container *ngIf="type === 'hipaa'">
            <footer class="ds-footer ds-footer-hipaa">
                <div class="ds-col-12 ds-footer__content">
                    <div class="ds-col-12 --top">
                        <div class="--inner-content">
                            <div class="--logo">
                                <img
                                    src="https://ds.cdn.questdiagnostics.com/assets/img/quest-logo--white.svg"
                                    aria-label="Quest Diagnostics"
                                />
                            </div>

                            <div class="--social">
                                <div>
                                    <a
                                        href="https://www.facebook.com/questdiagnostics?sk=wall"
                                    >
                                        <img
                                            src="https://ds.cdn.questdiagnostics.com/assets/ds-icons/social/ds-icon--footer-green--facebook-logo.svg"
                                            aria-label="Facebook"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="https://www.instagram.com/testwithquest/"
                                    >
                                        <img
                                            src="https://ds.cdn.questdiagnostics.com/assets/ds-icons/social/ds-icon--footer-green--instagram-logo.svg"
                                            aria-label="Instagram"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="https://www.linkedin.com/company/quest-diagnostics"
                                    >
                                        <img
                                            src="https://ds.cdn.questdiagnostics.com/assets/ds-icons/social/ds-icon--footer-green--linkedin-logo.svg"
                                            aria-label="LinkedIn"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="https://twitter.com/QuestDX">
                                        <img
                                            src="https://ds.cdn.questdiagnostics.com/assets/ds-icons/social/ds-icon--footer-green--twitterx-logo.svg"
                                            aria-label="Twitter"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="https://www.youtube.com/channel/UCiylgcbQtZMTdQbRw73yr3w"
                                    >
                                        <img
                                            src="https://ds.cdn.questdiagnostics.com/assets/ds-icons/social/ds-icon--footer-green--youtube-logo.svg"
                                            aria-label="YouTube"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ds-col-12 ds-footer__content">
                    <div class="ds-col-12 --bottom">
                        <div class="--legal-links">
                            <a
                                href="https://www.questdiagnostics.com/our-company/copyright"
                                >Copyright</a
                            >

                            <a
                                href="https://www.questdiagnostics.com/our-company/privacy/privacy-shield"
                                >Privacy Shield</a
                            >

                            <a
                                href="https://www.questdiagnostics.com/our-company/privacy"
                                >Privacy Notices</a
                            >

                            <a class="ds-link --icons" href="#" target="_blank">
                                <img
                                    src="https://ds.cdn.questdiagnostics.com/assets/img/your-privacy.svg"
                                    aria-label="Your Privacy Choices"
                                />
                                <span>Your Privacy Choices</span>
                            </a>

                            <a
                                href="https://www.questdiagnostics.com/our-company/terms-conditions"
                                >Terms</a
                            >

                            <a
                                href="https://www.questdiagnostics.com/our-company/nondiscrimination"
                                >Language Assistance / Non-Discrimination
                                Notice</a
                            >

                            <a
                                href="https://www.questdiagnostics.com/our-company/nondiscrimination"
                                >Asistencia de Idiomas / Aviso de no
                                Discriminación</a
                            >

                            <a
                                href="https://www.questdiagnostics.com/our-company/nondiscrimination"
                                >語言協助 / 不歧視通知</a
                            >
                        </div>

                        <div class="ds-col-12 ds-flex --column --legal-text">
                            <span>
                                Quest&reg; is the brand name used for services
                                offered by Quest Diagnostics Incorporated and
                                its affiliated companies. Quest Diagnostics
                                Incorporated and certain affiliates are CLIA
                                certified laboratories that provide HIPAA
                                covered services. Other affiliates operated
                                under the Quest&reg; brand, such as Quest
                                Consumer Inc., do not provide HIPAA covered
                                services.
                            </span>
                            <span>
                                Quest, Quest Diagnostics, the associated logo,
                                Nichols Institute and all associated Quest
                                Diagnostics marks are the registered trademarks
                                of Quest Diagnostics. All third party marks —
                                &reg; and &trade; — are the property of their
                                respective owners. &copy; {{ year }} Quest
                                Diagnostics Incorporated. All rights reserved.
                            </span>
                            <span>
                                Testing purchased by you through Quest's online
                                store is ordered by a licensed healthcare
                                professional authorized to order laboratory
                                testing in accordance with state laws.
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </ng-container>
    `
})
export class QDSFooterComponent implements AfterViewInit {
    @Input() customClasses: string = '';
    @Input() type: 'cit' | 'hipaa' = 'cit';

    year: number = new Date().getFullYear();
    linkGroup: number | undefined;

    toggleActive(newValue: number) {
        if (this.linkGroup === newValue) {
            this.linkGroup = 0;
        } else {
            this.linkGroup = newValue;
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
