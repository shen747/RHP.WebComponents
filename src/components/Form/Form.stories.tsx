import type { Meta, StoryObj } from '@storybook/react';
import { Form } from './Form';
import { TextField } from '../TextField';
import { Button } from '../Button';

const meta: Meta<typeof Form> = {
  title: 'Inputs/Form',
  component: Form,
};
export default meta;

export const Default: StoryObj<typeof Form> = {
  render: () => (
    <Form actions={<><Button type="submit">Save</Button><Button variant="ghost">Cancel</Button></>}>
      <TextField label="Name" />
      <TextField label="Email" />
    </Form>
  ),
};

