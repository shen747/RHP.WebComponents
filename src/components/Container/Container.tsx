import React from 'react';
import './container.scss';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
  fluid?: boolean;
  align?: 'left' | 'center' | 'right';
  layout?: string; // e.g., 'fill', 'grid', 'grid-fill-sm'
  noGutters?: boolean;
}

export const Container: React.FC<ContainerProps> = ({ color, fluid = true, align = 'center', layout, noGutters, className, style, children, ...rest }) => {
  const classes = ['rhp-container', className];
  if (layout) classes.push(...layout.split(' ').map(s => `rhp-layout-${s}`));
  if (align === 'left') classes.push('ml-0');
  if (align === 'right') classes.push('mr-0');

  const styles = { ...(style as React.CSSProperties), background: color };

  const content = children;

  return (
    <div className={classes.filter(Boolean).join(' ')} style={styles} {...rest}>
      {content}
    </div>
  );
};

export default Container;

