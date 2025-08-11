import React, { useMemo } from 'react';
import './progress.scss';

export type ProgressLocation = 'top' | 'bottom';

export interface ProgressLinearProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  height?: number | string;
  indeterminate?: boolean;
  // New props from WtgProgressLinear
  absolute?: boolean;
  color?: string;
  location?: ProgressLocation;
  reverse?: boolean;
  modelValue?: number; // Alternative to value for consistency
}

export const ProgressLinear: React.FC<ProgressLinearProps> = ({ 
  value = 0, 
  height = 4, 
  indeterminate = false,
  absolute = false,
  color,
  location,
  reverse = false,
  modelValue,
  className, 
  style,
  ...rest 
}) => {
  const actualValue = modelValue ?? value;
  
  const classes = [
    'rhp-progress-linear',
    indeterminate && 'rhp-progress-linear--indeterminate',
    absolute && 'rhp-progress-linear--absolute',
    location && `rhp-progress-linear--${location}`,
    reverse && 'rhp-progress-linear--reverse',
    className
  ].filter(Boolean).join(' ');

  const containerStyle = useMemo(() => ({
    height: typeof height === 'number' ? `${height}px` : height,
    position: absolute ? 'absolute' : 'relative',
    ...(absolute && location && {
      [location]: 0,
      left: 0,
      right: 0
    }),
    ...style
  } as React.CSSProperties), [height, absolute, location, style]);

  const barStyle = useMemo(() => {
    const baseStyle: React.CSSProperties = {
      ...(color && { backgroundColor: color }),
      ...(reverse && { transform: 'scaleX(-1)' })
    };

    if (indeterminate) {
      return baseStyle;
    }

    return {
      ...baseStyle,
      width: `${Math.max(0, Math.min(100, actualValue))}%`
    };
  }, [actualValue, indeterminate, color, reverse]);

  return (
    <div 
      className={classes} 
      style={containerStyle}
      role="progressbar" 
      aria-valuenow={indeterminate ? undefined : actualValue}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={indeterminate ? 'Loading...' : `Progress: ${actualValue}%`}
      {...rest}
    >
      <div className="rhp-progress-linear__bar" style={barStyle} />
      {indeterminate && (
        <div className="rhp-progress-linear__indeterminate-bar" style={{ backgroundColor: color }} />
      )}
    </div>
  );
};

export default ProgressLinear;

