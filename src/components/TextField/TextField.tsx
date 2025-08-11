import React, { useCallback, useId, useMemo, useState, useRef, useEffect } from 'react';
import { Icon } from '../Icon';
import './textfield.scss';

export type CharacterCasing = 'upper' | 'lower' | '';
export type TextFieldSentiment = 'critical' | 'warning' | 'success';

export interface ValidationState {
  alertLevel: 'none' | 'error' | 'warning' | 'success';
  messages: string[];
}

export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  onValueChange?: (value: string) => void;
  autocomplete?: boolean;
  characterCasing?: CharacterCasing;
  trailingIcon?: string;
  onTrailingClick?: (e: React.MouseEvent) => void;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  // New props from WtgTextField
  modelValue?: string; // Alternative to value for consistency
  sentiment?: TextFieldSentiment;
  validationState?: ValidationState;
  messages?: string | string[];
  displayOnly?: boolean;
  readonly?: boolean;
  required?: boolean;
  ariaLabel?: string;
  ariaLabelledby?: string;
  filled?: boolean;
  focused?: boolean;
  onInput?: (value: string) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export const TextField: React.FC<TextFieldProps> = ({
  id,
  value,
  onValueChange,
  autocomplete,
  characterCasing = '',
  type = 'text',
  disabled,
  readOnly,
  maxLength,
  placeholder,
  trailingIcon,
  onTrailingClick,
  leading,
  trailing,
  className,
  onChange,
  onBlur,
  onFocus,
  // New props
  modelValue,
  sentiment,
  validationState,
  messages = [],
  displayOnly = false,
  readonly = false,
  required = false,
  ariaLabel,
  ariaLabelledby,
  filled,
  focused: focusedProp,
  onInput,
  ...rest
}) => {
  const reactId = useId();
  const inputId = id ?? `input-${reactId}`;
  const inputRef = useRef<HTMLInputElement>(null);
  const [internalValue, setInternalValue] = useState(modelValue ?? value ?? '');
  const [isFocused, setIsFocused] = useState(false);

  const actualValue = modelValue ?? value ?? internalValue;
  const isControlled = modelValue !== undefined || value !== undefined;
  const isReadonly = readonly || readOnly;

  // Compute messages
  const computedMessages = useMemo(() => {
    let allMessages: string[] = [];
    
    if (typeof messages === 'string') {
      allMessages.push(messages);
    } else if (Array.isArray(messages)) {
      allMessages = allMessages.concat(messages);
    }
    
    if (validationState) {
      allMessages = allMessages.concat(validationState.messages);
    }
    
    return allMessages;
  }, [messages, validationState]);

  // Compute sentiment
  const computedSentiment = useMemo(() => {
    if (disabled || displayOnly) return '';
    
    if (sentiment === 'critical' || validationState?.alertLevel === 'error') {
      return 'critical';
    } else if (sentiment === 'warning' || validationState?.alertLevel === 'warning') {
      return 'warning';
    } else if (sentiment === 'success' || validationState?.alertLevel === 'success') {
      return 'success';
    }
    
    return '';
  }, [disabled, displayOnly, sentiment, validationState]);

  // Compute filled state
  const isFilled = useMemo(() => {
    return filled !== undefined ? filled : actualValue !== '';
  }, [filled, actualValue]);

  // Compute focus state
  const isActuallyFocused = focusedProp !== undefined ? focusedProp : isFocused;

  const transform = useCallback(
    (v: string) =>
      characterCasing === 'upper' ? v.toUpperCase() : characterCasing === 'lower' ? v.toLowerCase() : v,
    [characterCasing]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const next = transform(e.currentTarget.value);
      if (next !== e.currentTarget.value) {
        // mutate the displayed value to reflect casing
        (e.currentTarget as HTMLInputElement).value = next;
      }
      
      if (!isControlled) {
        setInternalValue(next);
      }
      
      onChange?.(e as any);
      onValueChange?.(next);
      onInput?.(next);
    },
    [onChange, onValueChange, onInput, transform, isControlled]
  );

  const handleFocus = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  }, [onFocus]);

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(e);
  }, [onBlur]);

  const handleTrailingClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (!disabled && !displayOnly) {
      onTrailingClick?.(e);
    }
  }, [onTrailingClick, disabled, displayOnly]);

  const trailingNode = useMemo(() => {
    if (trailing) return trailing;
    if (trailingIcon) {
      return (
        <Icon
          aria-label="Prompter"
          style={{ color: 'inherit' } as React.CSSProperties}
          onClick={handleTrailingClick}
          className={[
            'rhp-textfield__trailing-icon',
            (disabled || displayOnly) && 'rhp-textfield__trailing-icon--disabled'
          ].filter(Boolean).join(' ')}
        >
          {trailingIcon}
        </Icon>
      );
    }
    return null;
  }, [trailing, trailingIcon, handleTrailingClick, disabled, displayOnly]);

  const classes = [
    'rhp-textfield',
    isFilled && 'rhp-textfield--filled',
    isActuallyFocused && 'rhp-textfield--focused',
    computedSentiment === 'success' && 'rhp-textfield--success',
    computedSentiment === 'warning' && 'rhp-textfield--warning',
    computedSentiment === 'critical' && 'rhp-textfield--critical',
    required && 'rhp-textfield--required',
    disabled && 'rhp-textfield--disabled',
    displayOnly && 'rhp-textfield--display-only',
    isReadonly && 'rhp-textfield--readonly',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className="rhp-input__content-wrapper">
        <div className="rhp-input__content">
          {leading && <div className="rhp-input__leading-content">{leading}</div>}
          <input
            ref={inputRef}
            id={inputId}
            type={type}
            disabled={disabled || displayOnly}
            readOnly={isReadonly}
            maxLength={typeof maxLength === 'string' ? parseInt(maxLength, 10) : maxLength}
            placeholder={placeholder}
            aria-label={ariaLabel}
            aria-labelledby={ariaLabelledby}
            aria-required={required}
            aria-invalid={computedSentiment === 'critical'}
            {...(actualValue !== undefined ? { value: actualValue } : {})}
            autoComplete={autocomplete === undefined ? undefined : autocomplete ? 'on' : 'off'}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...rest}
          />
          {(trailingNode || trailingIcon) && (
            <div className="rhp-input__trailing-content">{trailingNode}</div>
          )}
        </div>
      </div>
      
      {/* Validation messages */}
      {computedMessages.length > 0 && (
        <div className={[
          'rhp-textfield__messages',
          `rhp-textfield__messages--${computedSentiment}`
        ].filter(Boolean).join(' ')}>
          {computedMessages.map((message, index) => (
            <div key={index} className="rhp-textfield__message">
              {message}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TextField;
