import { Meta } from '@storybook/angular';
import { QDSProgressBarComponent } from './progress-bar.component';

const meta: Meta<QDSProgressBarComponent> = {
    title: 'Components/Progress bar',
    component: QDSProgressBarComponent,
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
        progressValue: {
            control: {
                type: 'number'
            },
            table: {
                type: {
                    summary: 'number'
                },
                defaultValue: {
                    summary: '50'
                }
            }
        },
        showPercentage: {
            control: {
                type: 'boolean'
            },
            table: {
                type: {
                    summary: 'boolean'
                },
                defaultValue: {
                    summary: 'true'
                }
            }
        }
    }
};

export default meta;

export const DefaultProgressBar = {
    args: {
        progressValue: '50'
    }
};
