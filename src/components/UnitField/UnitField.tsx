import React, { useCallback } from 'react';
import './unit-field.scss';
import { NumberField } from '../NumberField';
import { Select, SelectOption } from '../Select';

export interface MeasureValue { magnitude: number; unit: string }
export interface MeasureUnit { value: string; text: string; itemText: string }

export interface UnitFieldProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: MeasureValue | null;
  units: MeasureUnit[];
  minValue?: number;
  maxValue?: number;
  decimals?: number;
  suppressTrailingZeroes?: boolean;
  onChange?: (value: MeasureValue | null) => void;
}

export const UnitField: React.FC<UnitFieldProps> = ({ value, units, minValue, maxValue, onChange, className, ...rest }) => {
  const isSingleUnit = units.length <= 1;
  const unitValue = value?.unit ?? units[0]?.value ?? '';
  const magnitude = value?.magnitude ?? 0;

  const onMagnitude = useCallback((m: number) => {
    onChange?.({ magnitude: m, unit: unitValue });
  }, [onChange, unitValue]);
  const onUnit = useCallback((u: string | number | undefined) => {
    onChange?.({ magnitude, unit: String(u ?? '') });
  }, [onChange, magnitude]);

  const options: SelectOption[] = units.map(u => ({ label: u.itemText || u.text, value: u.value }));

  return (
    <div className={["rhp-unit-field", className].filter(Boolean).join(" ")} {...rest}>
      <NumberField value={magnitude} onValueChange={onMagnitude} min={minValue} max={maxValue} />
      {isSingleUnit ? (
        <div className="rhp-unit-field__unit">{units[0]?.text ?? unitValue}</div>
      ) : (
        <Select value={unitValue} options={options} onChange={onUnit} />
      )}
    </div>
  );
};

export default UnitField;

