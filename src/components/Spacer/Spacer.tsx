import React from 'react';
import './spacer.scss';

export interface SpacerProps {
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  direction?: 'horizontal' | 'vertical';
}

export const Spacer: React.FC<SpacerProps> = ({ size = 'm', direction = 'horizontal' }) => {
  const classes = ['rhp-spacer', `rhp-spacer--${direction}`, `rhp-spacer--${size}`].join(' ');
  return <div className={classes} aria-hidden />;
};

export default Spacer;

