import React from 'react';
import './divider.scss';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical';
  inset?: boolean;
}

export const Divider: React.FC<DividerProps> = ({ orientation = 'horizontal', inset, className, style, ...rest }) => {
  const classes = [
    'rhp-divider',
    orientation === 'vertical' ? 'rhp-divider--vertical' : 'rhp-divider--horizontal',
    inset && 'rhp-divider--inset',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <hr role="separator" aria-orientation={orientation} className={classes} style={style as React.CSSProperties} {...rest} />;
};

export default Divider;

