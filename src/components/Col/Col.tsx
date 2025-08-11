import React from 'react';

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: number | string;
  sm?: number | string;
  md?: number | string;
  lg?: number | string;
  xl?: number | string;
  xxl?: number | string;
  offset?: number | string;
}

function cls(val: number | string | undefined, prefix: string) {
  if (val === undefined || val === null || val === '') return undefined;
  return `${prefix}${val}`;
}

export const Col: React.FC<ColProps> = ({ cols, sm, md, lg, xl, xxl, offset, className, style, children, ...rest }) => {
  const classes = [
    className,
    cls(cols, 'col-'),
    cls(sm, 'col-sm-'),
    cls(md, 'col-md-'),
    cls(lg, 'col-lg-'),
    cls(xl, 'col-xl-'),
    cls(xxl, 'col-xxl-'),
    cls(offset, 'offset-'),
  ].filter(Boolean).join(' ');
  return <div className={classes} style={style as React.CSSProperties} {...rest}>{children}</div>;
};

export default Col;

