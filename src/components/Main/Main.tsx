import React from 'react';
import './main.scss';

export interface MainProps extends React.HTMLAttributes<HTMLElement> {}

export const Main: React.FC<MainProps> = ({ className, children, ...rest }) => {
  return (
    <main className={["rhp-main", className].filter(Boolean).join(" ")} {...rest}>
      {children}
    </main>
  );
};

export default Main;

