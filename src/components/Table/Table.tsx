import React from 'react';
import './table.scss';

export type TableDensity = 'default' | 'comfortable' | 'compact' | undefined;

export interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
  density?: TableDensity;
  fixedFooter?: boolean;
  fixedHeader?: boolean;
  height?: string | number;
  hover?: boolean;
  tag?: keyof JSX.IntrinsicElements;
}

export const Table: React.FC<TableProps> = ({
  density,
  fixedFooter,
  fixedHeader,
  height,
  hover,
  tag = 'div',
  className,
  style,
  children,
  ...rest
}) => {
  const classes = [
    'rhp-table',
    density && `rhp-table--${density}`,
    hover && 'rhp-table--hover',
    fixedHeader && 'rhp-table--fixed-header',
    fixedFooter && 'rhp-table--fixed-footer',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const Wrapper: any = tag;
  const styles: React.CSSProperties = {
    maxHeight: height !== undefined ? (typeof height === 'number' ? `${height}px` : height) : undefined,
    ...style,
  };

  return (
    <Wrapper className={classes} style={styles} {...rest}>
      {children}
    </Wrapper>
  );
};

export default Table;

