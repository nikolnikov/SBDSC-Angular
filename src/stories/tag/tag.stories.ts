import { Meta } from '@storybook/angular';
import { QDSTagComponent } from './tag.component';

const meta: Meta<QDSTagComponent> = {
    title: 'Components/Tag',
    component: QDSTagComponent,
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
        customClasses: { table: { disable: true } },
        label: {
            control: 'text',
            table: {
                type: {
                    summary: 'string'
                }
            }
        },
        isDisabled: {
            control: {
                type: 'boolean'
            },
            table: {
                type: {
                    summary: 'boolean'
                }
            }
        },
        showClose: {
            control: {
                type: 'boolean'
            },
            table: {
                type: {
                    summary: 'boolean'
                }
            }
        }
    }
};

export default meta;

export const BasicTag = {
    args: {
        label: 'Label'
    }
};

export const DisabledTag = {
    args: {
        ...BasicTag.args,
        isDisabled: true
    }
};
