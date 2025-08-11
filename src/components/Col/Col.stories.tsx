import type { Meta, StoryObj } from '@storybook/react';
import { Col } from './Col';

const meta: Meta<typeof Col> = {
  title: 'Layout/Col',
  component: Col,
};
export default meta;

export const Default: StoryObj<typeof Col> = {
  render: () => (
    <div className="row">
      <Col cols={6}>A</Col>
      <Col cols={6}>B</Col>
    </div>
  ),
};

