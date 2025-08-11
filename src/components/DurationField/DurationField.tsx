import React from 'react';
import './duration-field.scss';

export interface DurationFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  value?: number; // minutes
  onChange?: (minutes: number) => void;
}

export const DurationField: React.FC<DurationFieldProps> = ({ label, value = 0, onChange, className, style, ...rest }) => {
  const [h, setH] = React.useState(Math.floor(value / 60));
  const [m, setM] = React.useState(value % 60);
  React.useEffect(() => { setH(Math.floor((value ?? 0) / 60)); setM((value ?? 0) % 60); }, [value]);
  const update = (hh: number, mm: number) => onChange?.(Math.max(0, hh * 60 + mm));

  return (
    <div className={["rhp-duration-field", className].filter(Boolean).join(" ")} style={style as React.CSSProperties} {...rest}>
      {label && <label className="rhp-duration-field__label">{label}</label>}
      <div className="rhp-duration-field__row">
        <input aria-label="Hours" type="number" min={0} value={h} onChange={e => { const v = Math.max(0, parseInt(e.target.value || '0', 10)); setH(v); update(v, m); }} />
        <span>h</span>
        <input aria-label="Minutes" type="number" min={0} max={59} value={m} onChange={e => { let v = Math.max(0, parseInt(e.target.value || '0', 10)); if (v > 59) v = 59; setM(v); update(h, v); }} />
        <span>m</span>
      </div>
    </div>
  );
};

export default DurationField;

