import React from 'react';
import './date-picker.scss';

export interface DatePickerProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string; // yyyy-MM-dd
  onChange?: (value: string) => void;
}

export const DatePicker: React.FC<DatePickerProps> = ({ value, onChange, className, style, ...rest }) => {
  return (
    <input type="date" className={["rhp-date-picker", className].filter(Boolean).join(" ")} value={value}
      onChange={(e) => onChange?.(e.target.value)} style={style as React.CSSProperties} {...rest} />
  );
};

export default DatePicker;

