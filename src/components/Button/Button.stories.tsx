import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    args: { children: 'Button', variant: 'default', size: 'm' },
    argTypes: {
        variant: { control: 'select', options: ['default', 'fill', 'ghost'] },
        size: { control: 'select', options: ['xs', 's', 'm', 'l', 'xl', 'xxl'] },
        sentiment: { control: 'select', options: ['primary', 'success', 'critical'] },
        leadingIcon: { control: 'text' },
        trailingIcon: { control: 'text' },
        loading: { control: 'boolean' },
        active: { control: 'boolean' },
        disabled: { control: 'boolean' },
    },
};
export default meta;

export const Default: StoryObj<typeof Button> = { args: { children: 'Default', variant: 'default' } };
export const Fill: StoryObj<typeof Button> = { args: { children: 'Fill', variant: 'fill', sentiment: 'primary' } };
export const Ghost: StoryObj<typeof Button> = { args: { children: 'Ghost', variant: 'ghost' } };
export const WithIcons: StoryObj<typeof Button> = {
    args: { children: 'With icons', leadingIcon: 'a-icon-add', trailingIcon: 'a-icon-arrow-right' },
};
export const Loading: StoryObj<typeof Button> = { args: { children: 'Loading', loading: true } };
export const Sizes: StoryObj<typeof Button> = { args: { children: 'Size m', size: 'm' } };
