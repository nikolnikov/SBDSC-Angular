import { Meta, moduleMetadata } from '@storybook/angular';
import { QDSLoaderComponent } from './loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const meta: Meta<QDSLoaderComponent> = {
    title: 'Components/Loader',
    component: QDSLoaderComponent,
    decorators: [
        moduleMetadata({
            imports: [MatProgressSpinnerModule]
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
        isCentered: {
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
        isFixed: {
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
        }
    }
};

export default meta;

export const DefaultLoader = {
    args: {}
};
