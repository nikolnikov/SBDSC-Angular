import { Meta } from '@storybook/angular';
import { QDSFooterComponent } from './footer.component';

const meta: Meta<QDSFooterComponent> = {
    title: 'Components/Navigation/Page footer',
    component: QDSFooterComponent,
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
        type: {
            control: {
                type: 'radio',
                options: ['cit', 'hipaa']
            },
            defaultValue: 'cit',
            table: {
                type: {
                    summary: 'cit | hipaa'
                }
            }
        }
    }
};

export default meta;

export const CITFooter = {
    args: {},
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
Please contact the Design System team for the Footer code snippet.
                `.trim()
            }
        }
    }
};

export const HIPAAFooter = {
    args: {
        type: 'hipaa'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
Please contact the Design System team for the Footer code snippet.
                `.trim()
            }
        }
    }
};
