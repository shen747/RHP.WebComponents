import React from 'react';
import './form.scss';

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  actions?: React.ReactNode;
}

export const Form: React.FC<FormProps> = ({ onSubmit, actions, className, style, children, ...rest }) => {
  return (
    <form className={["rhp-form", className].filter(Boolean).join(" ")} style={style as React.CSSProperties} onSubmit={(e) => { e.preventDefault(); onSubmit?.(e); }} {...rest}>
      <div className="rhp-form__body">{children}</div>
      {actions && <div className="rhp-form__actions">{actions}</div>}
    </form>
  );
};

export default Form;

