import React from 'react';
import './content-splitter.scss';

export type SplitterVariant = 'solid' | 'dashed';
export type SplitterJustify = 'start' | 'center' | 'end';

export interface ContentSplitterProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: SplitterVariant;
  justify?: SplitterJustify;
}

export const ContentSplitter: React.FC<ContentSplitterProps> = ({ variant = 'solid', justify = 'center', className, style, children, ...rest }) => {
  const classes = [
    'rhp-content-splitter',
    `rhp-content-splitter--${variant}`,
    `rhp-content-splitter--${justify}`,
    className,
  ].filter(Boolean).join(' ');
  return (
    <div className={classes} role="presentation" style={style as React.CSSProperties} {...rest}>
      <span className="rhp-content-splitter__content-wrapper">{children}</span>
    </div>
  );
};

export default ContentSplitter;

