import type { Meta, StoryObj } from '@storybook/react';
import { Row } from './Row';
import { Col } from '../Col';

const meta: Meta<typeof Row> = {
  title: 'Layout/Row',
  component: Row,
};
export default meta;

export const Basic: StoryObj<typeof Row> = {
  render: () => (
    <Row justify="space-between">
      <Col>One</Col>
      <Col>Two</Col>
      <Col>Three</Col>
    </Row>
  ),
};

