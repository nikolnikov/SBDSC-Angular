import { LiveAnnouncer } from '@angular/cdk/a11y';
import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Input,
    Renderer2,
    ViewChild
} from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'qds-table',
    template: `
        <ng-container *ngIf="isData; else basicTable">
            <div class="ds-data-table__container" [class]="customClasses">
                <table
                    class="ds-data-table"
                    [class.--dark-header]="hasDarkHeader"
                    mat-table
                    [dataSource]="dataSource"
                    matSort
                    matSortActive="lastname"
                    matSortDirection="desc"
                    (matSortChange)="announceSortChange($event)"
                >
                    <ng-container
                        *ngFor="let column of columns"
                        [matColumnDef]="column.slug"
                    >
                        <th
                            class="ds-table__head-th"
                            [class.--no-sort]="!column.sortable"
                            mat-header-cell
                            *matHeaderCellDef
                            mat-sort-header
                            [ngStyle]="{
                                width: column.width ? column.width : ''
                            }"
                        >
                            {{ column.label }}
                        </th>
                        <td
                            class="ds-table__row-td"
                            [class.--actions]="column.slug === 'actions'"
                            mat-cell
                            *matCellDef="let row"
                            [ngStyle]="{
                                width: column.width ? column.width : ''
                            }"
                        >
                            <span [innerHTML]="row[column.slug]?.value"></span>
                        </td>
                    </ng-container>

                    <!-- Header row -->
                    <tr
                        mat-header-row
                        class="ds-table__head"
                        *matHeaderRowDef="getColumnSlugs()"
                    ></tr>

                    <!-- Data rows -->
                    <tr
                        mat-row
                        class="ds-table__row"
                        *matRowDef="let row; columns: getColumnSlugs()"
                    ></tr>
                </table>
            </div>
        </ng-container>

        <ng-template #basicTable>
            <div class="ds-table">
                <table
                    class="ds-table__table"
                    mat-table
                    [dataSource]="dataSource"
                >
                    <ng-container
                        *ngFor="let column of columns"
                        [matColumnDef]="column.slug"
                    >
                        <th
                            class="ds-table__table-th"
                            mat-header-cell
                            *matHeaderCellDef
                            [ngStyle]="{
                                width: column.width ? column.width : ''
                            }"
                        >
                            <div
                                class="ds-row --flex-wrap"
                                [innerHTML]="column.label"
                            ></div>
                        </th>
                        <td
                            class="ds-table__table-td"
                            mat-cell
                            *matCellDef="let row"
                            [ngStyle]="{
                                width: column.width ? column.width : ''
                            }"
                        >
                            <div
                                class="ds-row --flex-wrap"
                                [innerHTML]="row[column.slug]?.value"
                            ></div>
                        </td>
                    </ng-container>

                    <!-- Header row -->
                    <tr
                        mat-header-row
                        class="ds-table__table-tr"
                        *matHeaderRowDef="getColumnSlugs()"
                    ></tr>

                    <!-- Data rows -->
                    <tr
                        mat-row
                        class="ds-table__table-tr"
                        *matRowDef="let row; columns: getColumnSlugs()"
                    ></tr>
                </table>
            </div>
        </ng-template>
    `
})
export class QDSTableComponent implements AfterViewInit {
    @Input() customClasses: string = '';
    @Input() hasDarkHeader: boolean = false;
    @Input() isData: boolean = false;
    @Input() columns: Array<{
        slug: string;
        label: string;
        sortable?: boolean;
        width?: string;
    }> = [];
    @Input()
    set dataSource(value: any[] | MatTableDataSource<any>) {
        if (Array.isArray(value)) {
            this._dataSource = new MatTableDataSource(value);
        } else {
            this._dataSource = value;
        }
    }
    @Input() defaultSortColumn: string = '';
    @Input() defaultSortDirection: 'asc' | 'desc' = 'asc';

    @ViewChild(MatSort) sort!: MatSort;

    get dataSource(): MatTableDataSource<any> {
        return this._dataSource;
    }

    private _dataSource: MatTableDataSource<any> = new MatTableDataSource<any>(
        []
    );

    getColumnSlugs(): string[] {
        return this.columns?.map(c => c.slug) || [];
    }

    announceSortChange(sortState: Sort) {
        if (sortState.direction) {
            this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
        } else {
            this._liveAnnouncer.announce('Sorting cleared');
        }
    }

    constructor(
        private _liveAnnouncer: LiveAnnouncer,
        private cdr: ChangeDetectorRef,
        private el: ElementRef,
        private renderer: Renderer2
    ) {}

    ngAfterViewInit() {
        if (this.sort) {
            this.dataSource.sort = this.sort;

            this.dataSource.sortingDataAccessor = (data, sortHeaderId) => {
                const columnValue = data[sortHeaderId]?.value;
                return columnValue !== undefined && columnValue !== null
                    ? typeof columnValue === 'string'
                        ? columnValue
                        : columnValue.toString()
                    : '';
            };

            if (this.defaultSortColumn) {
                this.sort.active = this.defaultSortColumn;
            }

            if (this.defaultSortDirection) {
                this.sort.direction = this.defaultSortDirection;
            }
        }
        this.cdr.detectChanges();
        const attrs = this.el.nativeElement.getAttributeNames();
        attrs.forEach((attr: string) =>
            this.renderer.removeAttribute(this.el.nativeElement, attr)
        );
    }
}
