import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
    MatFormFieldModule,
    MAT_FORM_FIELD_DEFAULT_OPTIONS
} from '@angular/material/form-field';
import { MAT_SELECT_CONFIG } from '@angular/material/select';
import { DateInputMaskDirective } from '../directives/date-input-mask.directive';

const appearance: MatFormFieldModule = {
    floatLabel: 'always'
};

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
@NgModule({
    declarations: [DateInputMaskDirective],
    exports: [ReactiveFormsModule],
    imports: [ReactiveFormsModule],
    providers: [
        {
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: appearance
        },
        {
            provide: MAT_SELECT_CONFIG,
            useValue: { overlayPanelClass: 'ds-overlay-panel' }
        }
    ]
})
export class AppModule {}
