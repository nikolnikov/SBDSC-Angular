import { moduleMetadata, Preview } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppModule } from '../src/app/app.module';

import '!style-loader!css-loader!sass-loader!/src/assets/css/overrides.css';
import '!style-loader!css-loader!sass-loader!/src/assets/css/dsc.scss';

const preview: Preview = {
    decorators: [
        applicationConfig({
            providers: [provideAnimations()]
        }),
        moduleMetadata({
            imports: [AppModule]
        })
    ],

    parameters: {
        options: {
            storySort: {
                method: 'alphabetical'
            }
        }
    },

    tags: ['autodocs']
};

export default preview;
