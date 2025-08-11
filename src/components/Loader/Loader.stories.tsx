import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from '.';

const meta: Meta<typeof Loader> = {
    title: 'Components/Loader',
    component: Loader,
};
export default meta;

export const Basic: StoryObj<typeof Loader> = {};
