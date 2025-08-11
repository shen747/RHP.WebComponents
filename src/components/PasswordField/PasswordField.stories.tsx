import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { PasswordField } from './PasswordField';

const meta: Meta<typeof PasswordField> = {
  title: 'Inputs/PasswordField',
  component: PasswordField,
};
export default meta;

export const Controlled: StoryObj<typeof PasswordField> = {
  render: () => {
    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState('');
    return (
      <PasswordField visible={visible} onVisibleChange={setVisible} value={value} onValueChange={setValue} />
    );
  },
};

