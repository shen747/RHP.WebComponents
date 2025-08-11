import React from 'react';
import './row.scss';

export type Align = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
export type Justify = 'start' | 'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly';

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: Align;
  justify?: Justify;
  noGutters?: boolean;
  fillAvailable?: boolean;
}

export const Row: React.FC<RowProps> = ({ align, justify, noGutters, fillAvailable, className, children, ...rest }) => {
  const classes = [
    'rhp-row',
    align && `rhp-row--align-${align}`,
    justify && `rhp-row--justify-${justify}`,
    noGutters && 'rhp-row--no-gutters',
    fillAvailable && 'rhp-row--fill-available',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Row;

