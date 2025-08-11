import React from 'react';
import './date-time-field.scss';
import { DateTimePicker } from '../DateTimePicker';

export interface DateTimeFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const DateTimeField: React.FC<DateTimeFieldProps> = ({ label, value, onChange, className, style, ...rest }) => {
  return (
    <div className={["rhp-date-time-field", className].filter(Boolean).join(" ")} style={style as React.CSSProperties} {...rest}>
      {label && <label className="rhp-date-time-field__label">{label}</label>}
      <DateTimePicker value={value} onChange={onChange} />
    </div>
  );
};

export default DateTimeField;

