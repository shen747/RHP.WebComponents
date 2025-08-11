import React, { useMemo } from 'react';
import { TextField, TextFieldProps } from '../TextField';

export type PasswordFieldProps = Omit<TextFieldProps, 'type' | 'trailingIcon' | 'onTrailingClick'> & {
  visible?: boolean;
  onVisibleChange?: (v: boolean) => void;
};

export const PasswordField: React.FC<PasswordFieldProps> = ({ visible, onVisibleChange, ...rest }) => {
  const trailing = useMemo(() => {
    const icon = visible ? 'a-icon-hide' : 'a-icon-show';
    return (
      <span role="button" aria-label={visible ? 'Hide password' : 'Show password'} onClick={() => onVisibleChange?.(!visible)}>
        {icon}
      </span>
    );
  }, [visible, onVisibleChange]);
  return <TextField {...rest} type={visible ? 'text' : 'password'} trailing={trailing} />;
};

export default PasswordField;

