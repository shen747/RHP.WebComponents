import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';

const meta: Meta<typeof Container> = {
    title: 'Layout/Container',
    component: Container,
};
export default meta;

export const Default: StoryObj<typeof Container> = {
    render: () => (
        <Container>
            <div style={{ border: '1px dashed var(--s-neutral-border-weak-default)', padding: 16 }}>Content</div>
        </Container>
    ),
};
