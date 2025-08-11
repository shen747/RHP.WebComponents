import type { Meta, StoryObj } from '@storybook/react';
import { AlertBadge } from '.';

const meta: Meta<typeof AlertBadge> = {
    title: 'Components/AlertBadge',
    component: AlertBadge,
    args: { children: 'Inbox' },
};
export default meta;

export const Basic: StoryObj<typeof AlertBadge> = {};
