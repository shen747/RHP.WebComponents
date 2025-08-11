import React from 'react';
import './flag.scss';

export interface FlagProps extends React.HTMLAttributes<HTMLSpanElement> {
  country?: string; // ISO code for future; simple text now
  label?: string;
}

export const Flag: React.FC<FlagProps> = ({ country, label, className, style, ...rest }) => {
  return (
    <span className={["rhp-flag", className].filter(Boolean).join(" ")} style={style as React.CSSProperties} {...rest}>
      {label ?? country ?? '🏳️'}
    </span>
  );
};

export default Flag;

