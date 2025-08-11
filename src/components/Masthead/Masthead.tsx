import React from 'react';
import './masthead.scss';

export interface MastheadProps extends React.HTMLAttributes<HTMLElement> {
  title?: React.ReactNode;
  actions?: React.ReactNode;
}

export const Masthead: React.FC<MastheadProps> = ({ title, actions, className, children, ...rest }) => {
  return (
    <header className={["rhp-masthead", className].filter(Boolean).join(" ")} {...rest}>
      <div className="rhp-masthead__title">{title}</div>
      <div className="rhp-masthead__actions">{actions}</div>
      {children}
    </header>
  );
};

export default Masthead;

