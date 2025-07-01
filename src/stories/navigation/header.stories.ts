import { Meta, moduleMetadata } from '@storybook/angular';
import { MaterialModule } from '../../app/material.module';
import { QDSHeaderComponent } from './header.component';
import { QDSButtonComponent } from '../button/button.component';
import { QDSInputComponent } from '../input/input.component';

const meta: Meta<QDSHeaderComponent> = {
    title: 'Components/Navigation/Page header',
    component: QDSHeaderComponent,
    decorators: [
        moduleMetadata({
            imports: [MaterialModule],
            declarations: [
                QDSHeaderComponent,
                QDSButtonComponent,
                QDSInputComponent
            ]
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
        logo: {
            control: {
                type: 'text'
            },
            table: {
                type: {
                    summary: 'string'
                }
            }
        },
        logoSize: {
            control: {
                type: 'text'
            },
            table: {
                type: {
                    summary: 'string'
                }
            }
        },
        showButton: { table: { disable: true } },
        showSearch: { table: { disable: true } },
        showUserAccount: { table: { disable: true } }
    }
};

export default meta;

const headerNavData = [
    [
        {
            label: 'Menu Option 1',
            route: '#'
        },
        {
            label: 'Menu Option 2',
            route: '#'
        },
        {
            label: 'Menu Option 3',
            route: '#'
        }
    ],
    [
        {
            label: 'Shop',
            image: 'https://ds.cdn.questdiagnostics.com/assets/img/placeholder-img.png',
            subNav: [
                {
                    label: 'Vitamins & Supplements',
                    route: '#'
                },
                {
                    label: 'Personal Care',
                    route: '#'
                },
                {
                    label: 'Beauty',
                    route: '#'
                },
                {
                    label: 'Medicines',
                    route: '#'
                },
                {
                    label: 'Health Devices',
                    route: '#'
                },
                {
                    label: 'Fitness',
                    route: '#'
                },
                {
                    label: 'Health Food & Drinks',
                    route: '#'
                }
            ]
        }
    ]
];

export const headerNavData2 = [
    [
        {
            label: 'Menu Option 1',
            route: '#'
        },
        {
            label: 'Menu Option 2',
            route: '#'
        },
        {
            label: 'Menu Option 3',
            route: '#'
        }
    ]
];

const topBarData = [
    {
        label: 'Topbar Link',
        route: '#'
    },
    {
        label: 'Topbar Link',
        route: '#'
    }
];

export const HeaderWithNavigationAndTopBar = {
    args: {
        logo: 'https://ds.cdn.questdiagnostics.com/assets/img/quest-logo.svg',
        logoSize: 'sm',
        navData: headerNavData,
        topBarData: topBarData,
        showButton: true,
        showUserAccount: true
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<qds-header
    [logo]="'https://ds.cdn.questdiagnostics.com/assets/img/quest-logo.svg'"
    [logoSize]="'sm'"
    [navData]="[[{label: 'Menu Option 1', route: '#'}, {label: 'Menu Option 2', route: '#'}, {label: 'Menu Option 3', route: '#'}], [{label: 'Shop', image: 'https://ds.cdn.questdiagnostics.com/assets/img/placeholder-img.png', subNav: [{label: 'Vitamins & Supplements', route: '#'}, {label: 'Personal Care', route: '#'}, {label: 'Beauty', route: '#'}, {label: 'Medicines', route: '#'}, {label: 'Health Devices', route: '#'}, {label: 'Fitness', route: '#'}, {label: 'Health Food & Drinks', route: '#'}]}]]"
    [topBarData]="[{label: 'Topbar Link', route: '#'}, {label: 'Topbar Link', route: '#'}]"
>
    <ng-container topbar-content>
        <button class="ds-button --icon isInverse ds-topbar__account">
            <span>LS</span>
            <qds-icon name="user-circle" />
        </button>
    </ng-container>

    <ng-container header-content>
        <qds-button label="Button" size="sm" />
    </ng-container>
</qds-header>
                `.trim()
            }
        }
    }
};

export const HeaderWithNavigation = {
    args: {
        logo: 'https://ds.cdn.questdiagnostics.com/assets/img/quest-logo.svg',
        logoSize: 'sm',
        navData: headerNavData2
    }
};

export const HeaderWithSearch = {
    args: {
        logo: 'https://ds.cdn.questdiagnostics.com/assets/img/quest-logo.svg',
        logoSize: 'sm',
        showSearch: true
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<qds-header
    [logo]="'https://ds.cdn.questdiagnostics.com/assets/img/quest-logo.svg'"
    [logoSize]="'sm'"
>
    <ng-container header-content>
        <qds-input iconLeft="search" placeholder="Search" />
    </ng-container>
</qds-header>
                `.trim()
            }
        }
    }
};

export const BasicHeader = {
    args: {
        logo: 'https://ds.cdn.questdiagnostics.com/assets/img/quest-logo.svg',
        logoSize: 'sm'
    }
};
