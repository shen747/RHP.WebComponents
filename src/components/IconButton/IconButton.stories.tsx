import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from '.';

const meta: Meta<typeof IconButton> = {
    title: 'Components/IconButton',
    component: IconButton,
    args: { ariaLabel: 'Add', icon: 'a-icon-plus', size: 'm' },
    argTypes: {
        size: { control: 'select', options: ['xs', 's', 'm', 'l', 'xl', 'xxl'] },
        icon: { control: 'text' },
        disabled: { control: 'boolean' },
    },
};
export default meta;

export const Basic: StoryObj<typeof IconButton> = {};
export const Disabled: StoryObj<typeof IconButton> = { args: { disabled: true } };
export const Large: StoryObj<typeof IconButton> = { args: { size: 'l' } };
export const WithLabelFallback: StoryObj<typeof IconButton> = { args: { ariaLabel: undefined, children: 'Search' } };
