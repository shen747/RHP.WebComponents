import React from 'react';
import './color-field.scss';
import { ColorPicker } from '../ColorPicker';

export interface ColorFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const ColorField: React.FC<ColorFieldProps> = ({ label, value = '#000000', onChange, readonly, className, style, ...rest }) => {
  const [val, setVal] = React.useState(value);
  React.useEffect(() => setVal(value), [value]);

  const update = (v: string) => { setVal(v); onChange?.(v); };

  return (
    <div className={["rhp-color-field", className].filter(Boolean).join(" ")} style={style as React.CSSProperties} {...rest}>
      {label && <label className="rhp-color-field__label">{label}</label>}
      <div className="rhp-color-field__control">
        <ColorPicker value={val} onChange={update} />
      </div>
    </div>
  );
};

export default ColorField;

