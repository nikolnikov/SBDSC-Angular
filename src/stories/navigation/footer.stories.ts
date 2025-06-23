import { Meta } from '@storybook/angular';
import { QDSFooterComponent } from './footer.component';

const meta: Meta<QDSFooterComponent> = {
    title: 'Components/Navigation/Footer',
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
    args: {}
};

export const HIPAAFooter = {
    args: {
        type: 'hipaa'
    }
};
