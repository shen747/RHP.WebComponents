import React, { useState, useCallback, useMemo } from 'react';
import './switch.scss';
import { Icon } from '../Icon';

export type SwitchSentiment = 'critical' | 'warning' | 'success';

export interface ValidationState {
  alertLevel: 'none' | 'error' | 'warning' | 'success';
  messages: string[];
}

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  label?: React.ReactNode;
  onChange?: (checked: boolean) => void;
  // New props from WtgSwitch
  readonly?: boolean;
  required?: boolean;
  sentiment?: SwitchSentiment;
  validationState?: ValidationState;
  messages?: string | string[];
  ariaLabel?: string;
  ariaLabelledby?: string;
  restricted?: boolean;
  tooltip?: string;
  tooltipPosition?: 'top' | 'right' | 'bottom' | 'left';
}

export const Switch: React.FC<SwitchProps> = ({ 
  checked, 
  disabled, 
  indeterminate, 
  label, 
  onChange,
  readonly = false,
  required = false,
  sentiment,
  validationState,
  messages = [],
  ariaLabel,
  ariaLabelledby,
  restricted = false,
  tooltip,
  tooltipPosition = 'top',
  className, 
  style, 
  ...rest 
}) => {
  const id = React.useId();
  const [internal, setInternal] = useState(!!checked);
  const [isHovered, setIsHovered] = useState(false);
  const isControlled = typeof checked === 'boolean';

  const value = isControlled ? !!checked : internal;

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
    if (disabled) return '';
    
    if (sentiment === 'critical' || validationState?.alertLevel === 'error') {
      return 'critical';
    } else if (sentiment === 'warning' || validationState?.alertLevel === 'warning') {
      return 'warning';
    } else if (sentiment === 'success' || validationState?.alertLevel === 'success') {
      return 'success';
    }
    
    return '';
  }, [disabled, sentiment, validationState]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (readonly) {
      e.preventDefault();
      return;
    }
    
    const next = e.target.checked;
    if (!isControlled) setInternal(next);
    onChange?.(next);
  }, [isControlled, onChange, readonly]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    if (readonly) {
      e.preventDefault();
    }
  }, [readonly]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const showTooltip = isHovered || computedMessages.length > 0;

  return (
    <div 
      className={[
        'rhp-switch',
        required && 'rhp-switch--required',
        disabled && 'rhp-switch--disabled',
        readonly && 'rhp-switch--readonly',
        computedSentiment === 'success' && 'rhp-switch--success',
        computedSentiment === 'critical' && 'rhp-switch--critical',
        computedSentiment === 'warning' && 'rhp-switch--warning',
        className
      ].filter(Boolean).join(' ')}
      style={style as React.CSSProperties}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className={[
          'rhp-switch__selection-control',
          value ? 'rhp-switch--selected' : 'rhp-switch--default'
        ].join(' ')}
      >
        <input 
          id={id} 
          className="rhp-switch__input" 
          type="checkbox" 
          role="switch" 
          aria-checked={value}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledby}
          disabled={disabled || restricted} 
          checked={value} 
          onChange={handleChange}
          onClick={handleClick}
          {...rest} 
        />
        
        {restricted ? (
          <Icon name="a-icon-hide" className="rhp-switch__restricted-icon" />
        ) : (
          <div className="rhp-switch__container">
            <div className="rhp-switch__track" />
            <div className="rhp-switch__thumb" />
          </div>
        )}
      </div>
      
      {label && (
        <label 
          htmlFor={id} 
          className="rhp-switch__label"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {label}
        </label>
      )}
      
      {/* Tooltip for validation messages or custom tooltip */}
      {showTooltip && (tooltip || computedMessages.length > 0) && (
        <div 
          className={[
            'rhp-switch__tooltip',
            `rhp-switch__tooltip--${tooltipPosition}`,
            computedSentiment && `rhp-switch__tooltip--${computedSentiment}`
          ].filter(Boolean).join(' ')}
        >
          {tooltip || computedMessages.join(', ')}
        </div>
      )}
    </div>
  );
};

export default Switch;

