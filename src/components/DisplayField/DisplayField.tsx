import React from 'react';
import './display-field.scss';

export interface DisplayFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  value?: React.ReactNode;
}

export const DisplayField: React.FC<DisplayFieldProps> = ({ label, value, className, style, children, ...rest }) => {
  return (
    <div className={["rhp-display-field", className].filter(Boolean).join(" ")} style={style as React.CSSProperties} {...rest}>
      {label && <div className="rhp-display-field__label">{label}</div>}
      <div className="rhp-display-field__value">{value ?? children}</div>
    </div>
  );
};

export default DisplayField;

