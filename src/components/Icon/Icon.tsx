import React from 'react';
import './icon.scss';

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: string; // Icon name like 'a-icon-add'
  name?: string; // Alternative prop for icon name
}

export const Icon: React.FC<IconProps> = ({ 
  children, 
  name, 
  className, 
  style, 
  ...rest 
}) => {
  const iconName = name || children;
  
  if (!iconName) {
    return null;
  }

  const classes = [
    'rhp-icon',
    iconName, // This will be the supply icon class like 'a-icon-add'
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span 
      className={classes} 
      style={style as React.CSSProperties} 
      {...rest}
    />
  );
};

export default Icon;
