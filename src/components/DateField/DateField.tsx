import React from 'react';
import './date-field.scss';
import { DatePicker } from '../DatePicker';

export interface DateFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  dense?: boolean;
}

export const DateField: React.FC<DateFieldProps> = ({ label, value, onChange, dense, className, style, ...rest }) => {
  return (
    <div className={["rhp-date-field", dense && "rhp-date-field--dense", className].filter(Boolean).join(" ")} style={style as React.CSSProperties} {...rest}>
      {label && <label className="rhp-date-field__label">{label}</label>}
      <DatePicker value={value} onChange={onChange} />
    </div>
  );
};

export default DateField;

