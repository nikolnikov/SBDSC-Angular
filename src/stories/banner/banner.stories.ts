import { Meta } from '@storybook/angular';
import { QDSBannerComponent } from './banner.component';
import argsToTemplateCustom from '../argsToTemplate';

const meta: Meta<QDSBannerComponent> = {
    title: 'Components/Banner',
    component: QDSBannerComponent,
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
    render: args => {
        const { ...props } = args;
        return {
            props,
            template: `
                <qds-banner
                    ${argsToTemplateCustom(props)}
                >
                    <p>
                        Use code <b>20%WEEK</b> and take action on the symptoms
                        keeping you from feeling your best.
                    </p>
                </qds-banner>
            `
        };
    },
    argTypes: {
        icon: {
            control: {
                type: 'text'
            },
            table: {
                type: {
                    summary: 'string'
                }
            }
        },
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
        showDismiss: {
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
        title: {
            control: {
                type: 'text'
            },
            table: {
                type: {
                    summary: 'string'
                }
            }
        }
    }
};

export default meta;

export const BasicBanner = {
    args: {}
};

export const BannerWithCloseButton = {
    args: {
        showDismiss: true
    }
};

export const BannerWithTitleAndCloseButton = {
    args: {
        showDismiss: true,
        title: 'Enjoy 20% off this test'
    }
};

export const BannerWithIconAndCloseButton = {
    args: {
        icon: 'face-mask',
        showDismiss: true
    }
};

export const BannerWithIllustrativeIconTitleAndCloseButton = {
    args: {
        illustrativeIcon: 'pcp',
        showDismiss: true,
        title: 'Enjoy 20% off this test'
    },
    name: 'Banner with illustrative icon, title and close button'
};

export const CenteredBanner = {
    args: {
        ...BasicBanner.args,
        isCentered: true
    }
};

export const CenteredBannerWithCloseButton = {
    args: {
        ...BasicBanner.args,
        isCentered: true,
        showDismiss: true
    }
};

export const CenteredBannerWithTitleAndCloseButton = {
    args: {
        ...BasicBanner.args,
        isCentered: true,
        showDismiss: true,
        title: 'Enjoy 20% off this test'
    }
};

export const CenteredBannerWithIconAndCloseButton = {
    args: {
        ...BasicBanner.args,
        icon: 'face-mask',
        isCentered: true,
        showDismiss: true
    }
};
