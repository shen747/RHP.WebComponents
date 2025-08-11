import React, { useCallback } from 'react';
import './slider.scss';

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value?: number;
  min?: number | string;
  max?: number | string;
  step?: number | string;
  disabled?: boolean;
  readOnly?: boolean;
  showTicks?: boolean | 'always';
  ticks?: readonly number[] | Record<number, string>;
  thumbLabel?: boolean | 'always';
  onChange?: (value: number) => void;
}

export const Slider: React.FC<SliderProps> = ({
  value = 0,
  min = 0,
  max = 100,
  step = 1,
  disabled,
  readOnly,
  showTicks,
  ticks,
  thumbLabel,
  onChange,
  className,
  ...rest
}) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const next = Number(e.currentTarget.value);
      onChange?.(next);
    },
    [onChange]
  );

  const listId = showTicks ? `rhp-slider-ticks-${Math.abs((min as any) as number)}-${Math.abs((max as any) as number)}` : undefined;

  return (
    <div className={["rhp-slider", className].filter(Boolean).join(" ")}>
      <input
        type="range"
        value={value}
        min={typeof min === 'string' ? Number(min) : min}
        max={typeof max === 'string' ? Number(max) : max}
        step={typeof step === 'string' ? Number(step) : step}
        disabled={disabled}
        readOnly={readOnly}
        onChange={handleChange}
        list={listId}
        {...rest as any}
      />
      {showTicks && (
        <datalist id={listId}>
          {Array.isArray(ticks)
            ? (ticks as readonly number[]).map((t) => <option key={t} value={t} />)
            : ticks
            ? Object.keys(ticks as Record<number, string>).map((k) => (
                <option key={k} value={k} label={(ticks as Record<number, string>)[Number(k)]} />
              ))
            : null}
        </datalist>
      )}
      {thumbLabel && <div className="rhp-slider__thumb-label">{value}</div>}
    </div>
  );
};

export default Slider;

