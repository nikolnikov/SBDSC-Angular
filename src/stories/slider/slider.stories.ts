import { Meta } from '@storybook/angular';
import { QDSSliderComponent } from './slider.component';

const meta: Meta<QDSSliderComponent> = {
    title: 'Components/Slider',
    component: QDSSliderComponent,
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
        defaultValue: {
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
        doubleSlider: {
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
        isDisabled: {
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
        leftDefaultValue: {
            control: {
                type: 'number'
            },
            table: {
                type: {
                    summary: 'number'
                }
            }
        },
        rightDefaultValue: {
            control: {
                type: 'number'
            },
            table: {
                type: {
                    summary: 'number'
                }
            }
        }
    }
};

export default meta;

export const DefaultSlider = {
    args: {
        defaultValue: 50
    },
    argTypes: {
        customClasses: { table: { disable: true } }
    }
};

export const DisabledSlider = {
    args: {
        ...DefaultSlider.args,
        isDisabled: true
    },
    argTypes: {
        ...DefaultSlider.argTypes
    }
};

export const DoubleSlider = {
    args: {
        doubleSlider: true,
        leftDefaultValue: 25,
        rightDefaultValue: 75
    },
    argTypes: {
        ...DefaultSlider.argTypes
    }
};

export const DisabledDoubleSlider = {
    args: {
        ...DoubleSlider.args,
        isDisabled: true,
        doubleSlider: true
    },
    argTypes: {
        ...DefaultSlider.argTypes
    }
};
