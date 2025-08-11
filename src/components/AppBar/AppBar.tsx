import React from 'react';
import './appbar.scss';

export interface AppBarProps extends React.HTMLAttributes<HTMLElement> {
  title?: React.ReactNode;
  start?: React.ReactNode;
  end?: React.ReactNode;
  sticky?: boolean;
}

export const AppBar: React.FC<AppBarProps> = ({ title, start, end, sticky, className, style, ...rest }) => {
  const classes = ['rhp-appbar', sticky && 'rhp-appbar--sticky', className].filter(Boolean).join(' ');
  return (
    <header className={classes} style={style as React.CSSProperties} {...rest}>
      <div className="rhp-appbar__section rhp-appbar__section--start">{start}</div>
      <div className="rhp-appbar__title">{title}</div>
      <div className="rhp-appbar__section rhp-appbar__section--end">{end}</div>
    </header>
  );
};

export default AppBar;

