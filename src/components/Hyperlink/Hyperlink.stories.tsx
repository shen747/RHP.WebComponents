import type { Meta, StoryObj } from '@storybook/react';
import { Hyperlink } from '.';

const meta: Meta<typeof Hyperlink> = {
    title: 'Components/Hyperlink',
    component: Hyperlink,
    args: { children: 'Go to RHP', href: '#' },
};
export default meta;

export const Basic: StoryObj<typeof Hyperlink> = {};
