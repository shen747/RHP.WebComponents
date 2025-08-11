import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from '../src/theme';
import '../src/styles/icons/index.css';
import '../src/styles/settings.scss';

const preview: Preview = {
    decorators: [
        (Story) => (
            <ThemeProvider mode="light">
                <Story />
            </ThemeProvider>
        ),
    ],
};

export default preview;
