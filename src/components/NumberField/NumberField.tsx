import React, { useCallback, useId } from 'react';
import './number-field.scss';

export interface NumberFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type'> {
  value?: number;
  onValueChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

export const NumberField: React.FC<NumberFieldProps> = ({ id, value, onValueChange, min, max, step = 1, className, onChange, ...rest }) => {
  const reactId = useId();
  const inputId = id ?? `number-${reactId}`;

  const clamp = useCallback((v: number) => {
    if (min !== undefined && v < min) return min;
    if (max !== undefined && v > max) return max;
    return v;
  }, [min, max]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.currentTarget.value;
    const parsed = raw === '' ? NaN : parseFloat(raw);
    const next = isNaN(parsed) ? undefined : clamp(parsed);
    onChange?.(e as any);
    if (next !== undefined) onValueChange?.(next);
  }, [onChange, onValueChange, clamp]);

  return (
    <div className={["rhp-number-field", className].filter(Boolean).join(" ")}>
      <input id={inputId} type="number" value={value ?? ''} min={min} max={max} step={step} onChange={handleChange} {...rest} />
    </div>
  );
};

export default NumberField;

