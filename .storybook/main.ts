import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  core: { disableTelemetry: true },
  viteFinal: async (config) => {
    // Ensure proper handling of CSS/SCSS files
    if (config.css) {
      config.css.preprocessorOptions = {
        ...config.css.preprocessorOptions,
        scss: {
          loadPaths: ['.'],
        },
      };
    }
    return config;
  },
};

export default config;

