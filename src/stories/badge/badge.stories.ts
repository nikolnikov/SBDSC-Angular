import { Meta } from '@storybook/angular';
import { QDSBadgeComponent } from './badge.component';

const meta: Meta<QDSBadgeComponent> = {
    title: 'Components/Badge',
    component: QDSBadgeComponent,
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
        label: {
            control: 'text',
            table: {
                type: {
                    summary: 'string'
                }
            }
        },
        status: {
            control: 'select',
            options: [
                'neutral',
                'informative',
                'success',
                'warning',
                'critical'
            ],
            table: {
                type: {
                    summary: `'neutral' | 'informative' | 'success' | 'warning' | 'critical'`
                },
                defaultValue: { summary: 'neutral' }
            }
        },
        secondary: {
            control: {
                type: 'boolean'
            },
            table: {
                type: {
                    summary: 'boolean'
                },
                defaultValue: { summary: 'false' }
            }
        }
    }
};

export default meta;

export const SolidNeutralBadge = {
    args: {
        label: 'Status',
        status: 'neutral'
    },
    argTypes: {
        customClasses: { table: { disable: true } }
    }
};

export const SolidInformativeBadge = {
    args: {
        label: 'Status',
        status: 'informative'
    },
    argTypes: {
        ...SolidNeutralBadge.argTypes
    }
};

export const SolidSuccessBadge = {
    args: {
        label: 'Status',
        status: 'success'
    },
    argTypes: {
        ...SolidNeutralBadge.argTypes
    }
};

export const SolidCriticalBadge = {
    args: {
        label: 'Status',
        status: 'critical'
    },
    argTypes: {
        ...SolidNeutralBadge.argTypes
    }
};

export const SolidWarningBadge = {
    args: {
        label: 'Status',
        status: 'warning'
    },
    argTypes: {
        ...SolidNeutralBadge.argTypes
    }
};

export const SecondaryNeutralBadge = {
    args: {
        secondary: true,
        label: 'Status',
        status: 'neutral'
    },
    argTypes: {
        ...SolidNeutralBadge.argTypes
    }
};

export const SecondaryInformativeBadge = {
    args: {
        secondary: true,
        label: 'Status',
        status: 'informative'
    },
    argTypes: {
        ...SolidNeutralBadge.argTypes
    }
};

export const SecondarySuccessBadge = {
    args: {
        secondary: true,
        label: 'Status',
        status: 'success'
    },
    argTypes: {
        ...SolidNeutralBadge.argTypes
    }
};

export const SecondaryCriticalBadge = {
    args: {
        secondary: true,
        label: 'Status',
        status: 'critical'
    },
    argTypes: {
        ...SolidNeutralBadge.argTypes
    }
};

export const SecondaryWarningBadge = {
    args: {
        secondary: true,
        label: 'Status',
        status: 'warning'
    },
    argTypes: {
        ...SolidNeutralBadge.argTypes
    }
};
