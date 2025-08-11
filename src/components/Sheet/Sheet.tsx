import React from 'react';
import './sheet.scss';

export interface SheetProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
  fillAvailable?: boolean;
  rounded?: boolean | string | number;
  height?: number | string;
  width?: number | string;
}

export const Sheet: React.FC<SheetProps> = ({ color, fillAvailable, rounded, height, width, className, style, children, ...rest }) => {
  const classes = [
    'rhp-sheet',
    fillAvailable && 'rhp-fill-available',
    rounded && 'rhp-sheet--rounded',
    className,
  ].filter(Boolean).join(' ');
  const styles: React.CSSProperties = {
    backgroundColor: color,
    height: typeof height === 'number' ? `${height}px` : height,
    width: typeof width === 'number' ? `${width}px` : width,
    ...style,
  };
  return (
    <div className={classes} style={styles} {...rest}>
      {children}
    </div>
  );
};

export default Sheet;

