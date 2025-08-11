import React, { useEffect, useId, useMemo, useRef } from 'react';
import { Icon } from '../Icon';
import './checkbox.scss';

export type CheckboxSentiment = '' | 'critical' | 'warning' | 'success';

export interface CheckboxProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    ariaLabel?: string;
    ariaLabelledby?: string;
    disabled?: boolean;
    id?: string;
    indeterminate?: boolean;
    label?: string;
    modelValue?: boolean | any[];
    multiple?: boolean;
    readonly?: boolean;
    required?: boolean;
    sentiment?: CheckboxSentiment;
    tabindex?: number;
    value?: any;
    onChange?: (value: boolean | any[]) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
    ariaLabel,
    ariaLabelledby,
    disabled,
    id,
    indeterminate,
    label,
    modelValue,
    multiple,
    readonly,
    required,
    sentiment = '',
    tabindex,
    value,
    className,
    onChange,
    ...rest
}) => {
    const reactId = useId();
    const inputId = id ?? `checkbox-${reactId}`;
    const inputRef = useRef<HTMLInputElement>(null);

    const isChecked = useMemo(() => {
        if (multiple) {
            const arr = Array.isArray(modelValue) ? modelValue : [];
            return arr.some((v) => Object.is(v, value));
        }
        return Boolean(modelValue);
    }, [modelValue, multiple, value]);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.indeterminate = Boolean(indeterminate);
        }
    }, [indeterminate]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (readonly) {
            e.preventDefault();
            return;
        }
        const next = e.target.checked;
        if (multiple) {
            const arr = Array.isArray(modelValue) ? [...modelValue] : [];
            const idx = arr.findIndex((v) => Object.is(v, value));
            if (next && idx === -1) arr.push(value);
            if (!next && idx !== -1) arr.splice(idx, 1);
            onChange?.(arr);
        } else {
            onChange?.(next);
        }
    }

    const rootClasses = [
        'rhp-checkbox',
        required && 'rhp-required',
        disabled && 'rhp-checkbox--disabled',
        readonly && 'rhp-checkbox--readonly',
        sentiment === 'success' && 'rhp-checkbox--success',
        sentiment === 'critical' && 'rhp-checkbox--critical',
        sentiment === 'warning' && 'rhp-checkbox--warning',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const selectionClasses = [
        'rhp-checkbox__selection-control',
        indeterminate ? 'rhp-checkbox--indeterminate' : isChecked ? 'rhp-checkbox--selected' : 'rhp-checkbox--default',
    ]
        .filter(Boolean)
        .join(' ');

    const computedIcon = useMemo(() => {
        const base = isChecked
            ? 'a-icon-checkbox-on'
            : indeterminate
            ? 'a-icon-checkbox-indeterminate'
            : 'a-icon-checkbox-off';
        if (readonly) return `${base}-readonly`;
        if (disabled) return `${base}-disabled`;
        return base;
    }, [isChecked, indeterminate, readonly, disabled]);

    return (
        <div className={rootClasses} {...rest}>
            <div className={selectionClasses}>
                <input
                    id={inputId}
                    aria-label={ariaLabel}
                    aria-labelledby={ariaLabelledby}
                    aria-checked={isChecked ? 'true' : 'false'}
                    type="checkbox"
                    disabled={disabled || readonly}
                    checked={isChecked}
                    tabIndex={tabindex}
                    onChange={handleChange}
                    onClick={(e) => readonly && e.preventDefault()}
                    ref={inputRef}
                />
                <Icon className="rhp-checkbox__icon">{computedIcon}</Icon>
                {(readonly || disabled || (!isChecked && !indeterminate)) && (
                    <div className="rhp-checkbox__selection-control-background" />
                )}
            </div>
            {label && (
                <label htmlFor={inputId} className="rhp-checkbox__label">
                    {label}
                </label>
            )}
        </div>
    );
};

export default Checkbox;
