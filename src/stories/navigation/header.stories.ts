import { Meta, moduleMetadata } from '@storybook/angular';
import { MaterialModule } from '../../app/material.module';
import { QDSHeaderComponent } from './header.component';
import { QDSButtonComponent } from '../button/button.component';
import { QDSInputComponent } from '../input/input.component';

const meta: Meta<QDSHeaderComponent> = {
    title: 'Components/Navigation/Header',
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
        showButton: { table: { disable: true } }
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
        topBarData: topBarData
    }
};

export const HeaderWithNavigation = {
    args: {
        logo: 'https://ds.cdn.questdiagnostics.com/assets/img/quest-logo.svg',
        logoSize: 'sm',
        navData: headerNavData
    }
};

export const HeaderWithSearch = {
    args: {
        logo: 'https://ds.cdn.questdiagnostics.com/assets/img/quest-logo.svg',
        logoSize: 'sm',
        showSearch: true
    }
};

export const BasicHeader = {
    args: {
        logo: 'https://ds.cdn.questdiagnostics.com/assets/img/quest-logo.svg',
        logoSize: 'sm'
    }
};
