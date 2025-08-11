import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from '.';

const meta: Meta<typeof Tag> = {
    title: 'Components/Tag',
    component: Tag,
    args: { label: 'Tag', sentiment: 'default' },
    argTypes: {
        sentiment: { control: 'select', options: ['default', 'primary', 'info', 'success', 'warning', 'critical'] },
        leadingIcon: { control: 'text' },
        dismissible: { control: 'boolean' },
        colorClassName: { control: 'text' },
    },
};
export default meta;

export const Basic: StoryObj<typeof Tag> = {};
export const WithIcon: StoryObj<typeof Tag> = { args: { leadingIcon: 'a-icon-info' } };
export const Dismissible: StoryObj<typeof Tag> = { args: { dismissible: true } };
export const Sentiments: StoryObj<typeof Tag> = { args: { sentiment: 'primary' } };
