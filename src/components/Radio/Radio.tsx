import React, { useId, useMemo, useRef } from 'react';
import { Icon } from '../Icon';
import './radio.scss';

export type RadioSentiment = '' | 'critical' | 'warning' | 'success';

export interface RadioProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    disabled?: boolean;
    id?: string;
    label?: string;
    messages?: string | string[];
    name?: string;
    readonly?: boolean;
    sentiment?: RadioSentiment;
    value?: string | number | boolean;
    model?: boolean;
    onChange?: (checked: boolean, value: string | number | boolean | undefined) => void;
}

export const Radio: React.FC<RadioProps> = ({
    disabled,
    id,
    label,
    messages,
    name,
    readonly,
    sentiment = '',
    value,
    model = false,
    className,
    onChange,
    ...rest
}) => {
    const reactId = useId();
    const inputId = id ?? `radio-${reactId}`;
    const inputRef = useRef<HTMLInputElement>(null);

    const iconName = useMemo(() => {
        const base = model ? 'a-icon-radio-on' : 'a-icon-radio-off';
        if (readonly) return `${base}-readonly`;
        if (disabled) return `${base}-disabled`;
        return base;
    }, [model, readonly, disabled]);

    const rootClasses = [
        'rhp-radio',
        disabled && 'rhp-radio--disabled',
        readonly && 'rhp-radio--readonly',
        sentiment === 'success' && 'rhp-radio--success',
        sentiment === 'critical' && 'rhp-radio--critical',
        sentiment === 'warning' && 'rhp-radio--warning',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const selectionClasses = ['rhp-radio__selection-control', model ? 'rhp-radio--selected' : 'rhp-radio--default']
        .filter(Boolean)
        .join(' ');

    return (
        <div className={rootClasses} {...rest}>
            <div className={selectionClasses}>
                <input
                    id={inputId}
                    aria-checked={model ? 'true' : 'false'}
                    name={name}
                    type="radio"
                    value={value as any}
                    disabled={disabled || readonly}
                    checked={model}
                    onChange={(e) => onChange?.(e.target.checked, value)}
                    ref={inputRef}
                />
                <Icon className="rhp-radio__icon">{iconName}</Icon>
                {(readonly || disabled || !model) && <div className="rhp-radio__selection-control-background" />}
            </div>
            {label && (
                <label htmlFor={inputId} className="rhp-radio__label">
                    {label}
                </label>
            )}
        </div>
    );
};

export default Radio;
