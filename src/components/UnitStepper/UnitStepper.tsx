import React, { useCallback } from 'react';
import './unit-stepper.scss';
import { NumberField } from '../NumberField';

export interface UnitStepperProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  label?: string;
  unit?: string;
  value?: number | null;
  min?: number;
  max?: number;
  disabled?: boolean;
  readonly?: boolean;
  manualEntry?: boolean;
  zeroWhenEmpty?: boolean;
  onChange?: (value: number | null) => void;
}

export const UnitStepper: React.FC<UnitStepperProps> = ({ label, unit, value = 0, min, max, disabled, readonly, manualEntry = true, zeroWhenEmpty, onChange, className, ...rest }) => {
  const set = useCallback((v: number | null) => onChange?.(v), [onChange]);
  const inc = useCallback(() => {
    const next = (value ?? 0) + 1;
    if (max !== undefined && next > max) return;
    set(next);
  }, [value, max, set]);
  const dec = useCallback(() => {
    const next = (value ?? 0) - 1;
    if (min !== undefined && next < min) return;
    set(next);
  }, [value, min, set]);

  return (
    <div className={["rhp-unit-stepper", className].filter(Boolean).join(" ")} {...rest}>
      <button className="rhp-unit-stepper__step-button" aria-label="Decrease" onClick={dec} disabled={disabled || readonly || (min !== undefined && (value ?? 0) - 1 < min)}>-</button>
      {manualEntry ? (
        <NumberField value={value ?? (zeroWhenEmpty ? 0 : undefined)} onValueChange={(v) => set(v)} min={min} max={max} disabled={disabled} readOnly={readonly} />
      ) : (
        <div className="rhp-unit-stepper__value">{value}</div>
      )}
      {unit && <span className="rhp-unit-stepper__unit">{unit}</span>}
      <button className="rhp-unit-stepper__step-button" aria-label="Increase" onClick={inc} disabled={disabled || readonly || (max !== undefined && (value ?? 0) + 1 > max)}>+</button>
    </div>
  );
};

export default UnitStepper;

