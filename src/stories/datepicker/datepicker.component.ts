import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    Inject,
    Input,
    OnInit,
    Output,
    Renderer2
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {
    MAT_DATE_FORMATS,
    DateAdapter,
    MAT_DATE_LOCALE
} from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

export const DATE_FORMATS = {
    parse: {
        dateInput: 'MM/DD/YYYY'
    },
    display: {
        dateInput: 'MM/DD/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY'
    }
};

@Component({
    selector: 'qds-datepicker',
    imports: [MatDatepickerModule, MatInputModule, MatNativeDateModule],
    template: `
        <ng-container *ngIf="isRange; else singleDate">
            <mat-form-field
                class="ds-input"
                [class]="customClasses"
                [class.--error]="
                    (formControlId &&
                        formControlId.invalid &&
                        formControlId.touched) ||
                    (formControlEndId &&
                        formControlEndId.invalid &&
                        formControlEndId.touched) ||
                    hasError
                "
                [class.mat-form-field-invalid]="
                    (formControlId &&
                        formControlId.invalid &&
                        formControlId.touched) ||
                    (formControlEndId &&
                        formControlEndId.invalid &&
                        formControlEndId.touched) ||
                    hasError
                "
                [class.--required]="isRequired"
                [class.--disabled]="
                    (formControlId && formControlId.disabled) ||
                    (formControlEndId && formControlEndId.disabled) ||
                    isDisabled
                "
            >
                <mat-label *ngIf="label" class="ds-input__label --range">
                    <span>{{ label }}</span>
                    <span *ngIf="labelEndDate">{{ labelEndDate }}</span>
                </mat-label>

                <mat-date-range-input
                    [formGroup]="range"
                    [rangePicker]="pickerRange"
                    [min]="minDate ? minDate : ''"
                    [max]="maxDate ? maxDate : ''"
                >
                    <input
                        matStartDate
                        [formControl]="formControlId"
                        [id]="inputId"
                        placeholder="{{ placeholder }}"
                        (click)="pickerRange.open()"
                        dateInputMask
                    />
                    <input
                        matEndDate
                        [formControl]="formControlEndId"
                        [id]="endInputId"
                        placeholder="{{ placeholder }}"
                        (click)="pickerRange.open()"
                        dateInputMask
                    />
                </mat-date-range-input>

                <mat-datepicker-toggle
                    matSuffix
                    [for]="pickerRange"
                ></mat-datepicker-toggle>
                <mat-date-range-picker
                    [panelClass]="panelClasses"
                    #pickerRange
                ></mat-date-range-picker>

                <div *ngIf="hintMessage" class="ds-input__hint">
                    <div class="ds-input__hint-start">
                        {{ hintMessage }}
                    </div>

                    <div class="ds-input__hint-end">
                        {{ hintMessage }}
                    </div>
                </div>

                <div
                    *ngIf="
                        (formControlId &&
                            formControlId.invalid &&
                            formControlId.touched) ||
                        (formControlEndId &&
                            formControlEndId.invalid &&
                            formControlEndId.touched &&
                            errorMessage)
                    "
                    class="ds-input__error"
                >
                    {{ errorMessage }}
                </div>
            </mat-form-field>
        </ng-container>
        <ng-template #singleDate>
            <mat-form-field
                class="ds-input ds-input-datepicker"
                [class]="customClasses"
                [class.--error]="
                    (formControlId &&
                        formControlId.invalid &&
                        formControlId.touched) ||
                    hasError
                "
                [class.mat-form-field-disabled]="
                    (formControlId && formControlId.disabled) ||
                    (formControlEndId && formControlEndId.disabled) ||
                    isDisabled
                "
                [class.--required]="isRequired"
            >
                <mat-label *ngIf="label" class="ds-input__label">
                    <span>{{ label }}</span>
                </mat-label>

                <input
                    matInput
                    placeholder="{{ placeholder }}"
                    value=""
                    name="date"
                    [formControl]="formControlId"
                    [id]="inputId"
                    [matDatepicker]="picker"
                    [min]="minDate ? minDate : ''"
                    [max]="maxDate ? maxDate : ''"
                    (click)="picker.open()"
                    dateInputMask
                />

                <mat-datepicker-toggle
                    matSuffix
                    class="ds-datepicker-toggle"
                    [for]="picker"
                ></mat-datepicker-toggle>

                <mat-datepicker
                    [panelClass]="panelClasses"
                    #picker
                ></mat-datepicker>

                <div *ngIf="hintMessage" class="ds-input__hint">
                    {{ hintMessage }}
                </div>

                <div
                    *ngIf="
                        formControlId &&
                        formControlId.invalid &&
                        formControlId.touched &&
                        errorMessage
                    "
                    class="ds-input__error"
                >
                    {{ errorMessage }}
                </div>
            </mat-form-field>
        </ng-template>
    `,
    providers: [
        {
            provide: DateAdapter,
            useClass: MomentDateAdapter,
            deps: [MAT_DATE_LOCALE]
        },
        { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS },
        { provide: MAT_DATE_LOCALE, useValue: 'en-US' }
    ]
})
export class QDSDatepickerComponent implements AfterViewInit, OnInit {
    @Input() customClasses: string = '';
    @Input() formControlId: FormControl = new FormControl();
    @Input() formControlEndId: FormControl = new FormControl();
    @Input() errorMessage: string = '';
    @Input() hasError: boolean = false;
    @Input() hintMessage: string = '';
    @Input() inputId: string = '';
    @Input() endInputId: string = '';
    @Input() isDisabled: boolean = false;
    @Input() isRange: boolean = false;
    @Input() isRequired: boolean = false;
    @Input() label: string = '';
    @Input() labelEndDate: string = '';
    @Input() maxDate: Date | null = null;
    @Input() minDate: Date | null = null;
    @Input() panelClasses: string = '';
    @Input() placeholder: string = '';

    @Output() getSelection = new EventEmitter<any>();

    range!: FormGroup;

    onSelectionChange(selection: any) {
        this.getSelection.emit(selection);
    }

    get parsedDate(): Date | null {
        const val = this.formControlId.value;
        if (typeof val === 'string' && /^\d{2}\/\d{2}\/\d{4}$/.test(val)) {
            const [dd, mm, yyyy] = val.split('/').map(Number);
            const date = new Date(yyyy, mm - 1, dd);
            // Optional: validate real calendar date
            if (
                date.getDate() === dd &&
                date.getMonth() === mm - 1 &&
                date.getFullYear() === yyyy
            ) {
                return date;
            }
        } else if (val instanceof Date) {
            return val;
        }
        return null;
    }

    constructor(
        @Inject(MAT_DATE_FORMATS) private dateFormats: any,
        private dateAdapter: DateAdapter<any>,
        private el: ElementRef,
        private renderer: Renderer2
    ) {
        this.dateAdapter.setLocale('en-US');
        console.log('Date Formats:', this.dateFormats);
    }

    ngOnInit(): void {
        this.range = new FormGroup({
            start: this.formControlId,
            end: this.formControlEndId
        });
    }

    ngAfterViewInit() {
        const attrs = this.el.nativeElement.getAttributeNames();
        attrs.forEach((attr: string) =>
            this.renderer.removeAttribute(this.el.nativeElement, attr)
        );
    }
}
