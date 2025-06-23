import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
    selector: 'qds-accordion',
    standalone: true,
    imports: [CommonModule, MatExpansionModule],
    template: `
        <mat-accordion
            [class]="customClasses"
            [multi]="!openSingleItem"
            class="ds-accordion__wrapper"
        >
            <mat-expansion-panel
                *ngFor="let item of accordionContent"
                [expanded]="defaultExpanded"
                class="ds-accordion"
                [class.--standalone]="isStandalone"
            >
                <mat-expansion-panel-header class="ds-accordion__title">
                    {{ item.title }}
                </mat-expansion-panel-header>

                <div
                    class="ds-accordion__content"
                    [innerHTML]="item.content"
                ></div>
            </mat-expansion-panel>
        </mat-accordion>
    `
})
export class QDSAccordionComponent {
    @Input() accordionContent: {
        title: string;
        content: string;
    }[] = [];
    @Input() customClasses: string = '';
    @Input() defaultExpanded: boolean = false;
    @Input() isStandalone: boolean = false;
    @Input() openSingleItem: boolean = false;
}
