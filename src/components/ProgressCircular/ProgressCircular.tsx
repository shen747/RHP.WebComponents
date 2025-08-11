import React from 'react';
import './progress.scss';

export interface ProgressCircularProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  size?: number;
  indeterminate?: boolean;
}

export const ProgressCircular: React.FC<ProgressCircularProps> = ({ value = 0, size = 24, indeterminate, className, ...rest }) => {
  const style: React.CSSProperties = { width: size, height: size };
  const classes = ['rhp-progress-circular', indeterminate && 'is-indeterminate', className].filter(Boolean).join(' ');
  return (
    <div className={classes} style={style} role="progressbar" aria-valuenow={indeterminate ? undefined : value} {...rest} />
  );
};

export default ProgressCircular;

