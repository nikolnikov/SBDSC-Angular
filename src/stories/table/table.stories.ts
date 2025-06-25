import { Meta, moduleMetadata } from '@storybook/angular';
import { QDSContextualMenuComponent } from '../contextual-menu/contextual-menu.component';
import { QDSIconButtonComponent } from '../button/icon-button.component';
import { QDSTableComponent } from './table.component';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialModule } from '../../app/material.module';

const meta: Meta<QDSTableComponent> = {
    title: 'Components/Table',
    component: QDSTableComponent,
    decorators: [
        moduleMetadata({
            declarations: [QDSIconButtonComponent],
            imports: [MaterialModule, QDSContextualMenuComponent]
        })
    ],
    parameters: {
        layout: 'centered',
        actions: {
            disable: true
        },
        interactions: {
            disable: true
        }
    },
    tags: ['autodocs', '!dev'],
    argTypes: {
        hasDarkHeader: {
            control: {
                type: 'boolean'
            },
            table: {
                type: {
                    summary: 'boolean'
                },
                defaultValue: {
                    summary: 'false'
                }
            }
        },
        isData: {
            control: {
                type: 'boolean'
            },
            table: {
                type: {
                    summary: 'boolean'
                },
                defaultValue: {
                    summary: 'false'
                }
            }
        },
        columns: {
            table: {
                disable: true
            }
        },
        dataSource: {
            table: {
                disable: true
            }
        }
    }
};

export default meta;

const tableColumns: Array<{ slug: string; label: string; width?: string }> = [
    {
        slug: 'feature',
        label: 'Feature <span class="ds-icon--info"><span>'
    },
    { slug: 'basic', label: 'Basic', width: '180px' },
    { slug: 'pro', label: 'Pro', width: '180px' },
    { slug: 'premium', label: 'Premium', width: '180px' }
];

const tableData = [
    {
        feature: { value: '100% benefit for covered laboratory services' },
        basic: { value: '' },
        pro: { value: '' },
        premium: { value: '<span class="ds-icon--check ds-m-auto"><span>' }
    },
    {
        feature: {
            value: 'Limited out-of-pocket patient cost for covered laboratory services'
        },
        basic: { value: '' },
        pro: { value: '<span class="ds-icon--check ds-m-auto"><span>' },
        premium: { value: '<span class="ds-icon--check ds-m-auto"><span>' }
    },
    {
        feature: { value: 'Digital member card' },
        basic: { value: '<span class="ds-icon--check ds-m-auto"><span>' },
        pro: { value: '<span class="ds-icon--check ds-m-auto"><span>' },
        premium: { value: '<span class="ds-icon--check ds-m-auto"><span>' }
    }
];

const dataSource = new MatTableDataSource(tableData);

const sortableColumns: Array<{
    slug: string;
    label: string;
    sortable?: boolean;
}> = [
    { slug: 'lname', label: 'Last name', sortable: true },
    { slug: 'fname', label: 'First name', sortable: true },
    { slug: 'status', label: 'Status', sortable: false }
];

const sortableData = [
    {
        lname: { value: 'Blake' },
        fname: { value: 'Edward' },
        status: {
            value: '<div class="ds-badge --informative left-icon" aria-label="Informative" role="status"><span class="ds-icon--info" aria-label="Info" role="img"></span>Informative</div>'
        }
    },
    {
        lname: { value: 'Jupiter' },
        fname: { value: 'Sally' },
        status: {
            value: '<div class="ds-badge --warning left-icon" aria-label="Warning" role="status"><span class="ds-icon--warning" aria-label="Info" role="img"></span>Warning</div>'
        }
    }
];

const sortableDataSource = new MatTableDataSource(sortableData);

export const BasicTable = {
    args: {
        columns: tableColumns
    },
    render: (args: Partial<QDSTableComponent>) => {
        const dataSource = new MatTableDataSource(tableData);

        return {
            props: {
                ...args,
                dataSource: dataSource
            }
        };
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<qds-table
    [columns]="[
        {
            slug: 'feature',
            label: 'Feature <span class=\'ds-icon--info\'><span>',
            width: ''
        },
        {
            slug: 'basic', 
            label: 'Basic', 
            width: '180px'
        },
        {
            slug: 'pro', 
            label: 'Pro', 
            width: '180px'
        },
        {
            slug: 'premium', 
            label: 'Premium', 
            width: '180px'
        }
    ]"
    [dataSource]="[
        {
            feature: { value: '100% benefit for covered laboratory services' }, 
            basic: { value: '' }, 
            pro: { value: '' }, 
            premium: { value: '<span class=\'ds-icon--check ds-m-auto\'><span>' }
        },
        {
            feature: {value: 'Limited out-of-pocket patient cost for covered laboratory services' }, 
            basic: { value: '' }, 
            pro: { value: '<span class=\'ds-icon--check ds-m-auto\'><span>' }, 
            premium: { value: '<span class=\'ds-icon--check ds-m-auto\'><span>' }
        },
        {
            feature: { value: 'Digital member card' }, 
            basic: { value: '<span class=\'ds-icon--check ds-m-auto\'><span>' }, 
            pro: { value: '<span class=\'ds-icon--check ds-m-auto\'><span>' }, 
            premium: { value: '<span class=\'ds-icon--check ds-m-auto\'><span>' }
        }
    ]"
></qds-table>
                `
            }
        }
    }
};

export const DataTable = {
    args: {
        columns: sortableColumns
    },
    render: (args: Partial<QDSTableComponent>) => {
        const dataSource = new MatTableDataSource(sortableData);

        return {
            props: {
                ...args,
                dataSource: dataSource,
                isData: true
            }
        };
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<qds-table
    [columns]="[
        {
            slug: 'lname',
            label: 'Last name',
            sortable: true
        },
        {
            slug: 'fname',
            label: 'First name',
            sortable: true
        },
        {
            slug: 'status',
            label: 'Status',
            sortable: false
        }
    ]"
    [dataSource]="[
        {
            lname: { value: 'Blake' },
            fname: { value: 'Edward' },
            status: { value: '<div class=\'ds-badge --informative\' aria-label=\'Informative\' role=\'status\'><span class=\'ds-icon--info\' aria-label=\'Info\' role=\'img\'></span>Informative</div>' }
        },
        {
            lname: {value: 'Jupiter' },
            fname: { value: 'Sally' },
            status: { value: '<div class=\'ds-badge --warning\' aria-label=\'Warning\' role=\'status\'><span class=\'ds-icon--warning\' aria-label=\'Info\' role=\'img\'></span>Warning</div>' }
        }
    ]"
    [isData]="true"
></qds-table>
                `
            }
        }
    }
};
