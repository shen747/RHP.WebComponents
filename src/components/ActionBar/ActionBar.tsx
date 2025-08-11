import React from 'react';
import './action-bar.scss';

export interface ActionBarProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'start' | 'center' | 'end' | 'space-between';
  dense?: boolean;
}

export const ActionBar: React.FC<ActionBarProps> = ({ align = 'space-between', dense, className, children, style, ...rest }) => {
  const classes = ['rhp-action-bar', dense && 'rhp-action-bar--dense', className]
    .filter(Boolean)
    .join(' ');

  const justifyContent = align === 'start' ? 'flex-start' : align === 'end' ? 'flex-end' : align === 'center' ? 'center' : 'space-between';

  return (
    <div className={classes} style={{ justifyContent, ...(style as React.CSSProperties) }} {...rest}>
      {children}
    </div>
  );
};

export default ActionBar;

