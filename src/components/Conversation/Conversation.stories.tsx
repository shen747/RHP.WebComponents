import type { Meta, StoryObj } from '@storybook/react';
import { Conversation } from './Conversation';

const meta: Meta<typeof Conversation> = {
    title: 'Data Display/Conversation',
    component: Conversation,
};
export default meta;

export const Default: StoryObj<typeof Conversation> = {
    render: () => (
        <div style={{ padding: 16 }}>
            <Conversation
                messages={[
                    { id: 1, content: 'Hello there', author: 'A', timestamp: '10:00' },
                    { id: 2, content: 'Hi!', mine: true, timestamp: '10:01' },
                ]}
            />
        </div>
    ),
};
