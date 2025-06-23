import { Meta } from '@storybook/angular';
import { QDSMessageComponent } from './message.component';

const meta: Meta<QDSMessageComponent> = {
    title: 'Components/Message',
    component: QDSMessageComponent,
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
        actions: {
            control: {
                type: 'object'
            },
            table: {
                type: {
                    summary: '[{ label: string; action: string; }]'
                }
            }
        },
        closeHandler: {
            control: {
                type: 'object'
            },
            table: { disable: true }
        },
        message: {
            control: 'text',
            table: {
                type: {
                    summary: 'string'
                }
            }
        },
        noIcon: {
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean'
                },
                defaultValue: { summary: 'false' }
            }
        },
        title: {
            control: 'text',
            table: {
                type: {
                    summary: 'string'
                }
            }
        },
        type: {
            control: 'radio',
            options: ['informative', 'success', 'warning', 'error'],
            table: {
                type: {
                    summary: 'informative | success | warning | error'
                },
                defaultValue: { summary: 'informative' }
            }
        }
    }
};

export default meta;

export const InformativeMessage = {
    args: {
        actions: [
            { label: 'Yes', action: null },
            { label: 'No', action: null }
        ],
        closeHandler: () => {},
        message:
            "We've sent you an email detailing your recent account changes. Didn't receive an email? Click below.",
        title: 'Heading',
        type: 'informative'
    }
};

export const SuccessMessage = {
    args: {
        message:
            "We've sent you an email detailing your recent account changes.",
        title: 'Heading',
        type: 'success'
    }
};

export const WarningMessage = {
    args: {
        actions: [
            { label: 'Yes', action: null },
            { label: 'No', action: null }
        ],
        inlineActions: true,
        message: 'Would you like to proceed with the change?',
        type: 'warning'
    },
    argTypes: {
        closeHandler: { table: { disable: true } },
        customClasses: { table: { disable: true } }
    }
};

export const ErrorMessage = {
    args: {
        message: 'An error has occured. Please try again.',
        type: 'error'
    }
};
