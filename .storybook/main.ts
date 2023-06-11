import type { StorybookConfig } from '@storybook/nextjs';
import * as path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-styling',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/pages': path.resolve(__dirname, '../src/pages/'),
      '@/widgets': path.resolve(__dirname, '../src/widgets/'),
      '@/features': path.resolve(__dirname, '../src/features/'),
      '@/entities': path.resolve(__dirname, '../src/entities/'),
      '@/shared': path.resolve(__dirname, '../src/shared/'),
    };

    return config;
  },
  staticDirs: ['../public'],
};
export default config;
