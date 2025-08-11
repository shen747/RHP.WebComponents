import React from 'react';
import './status.scss';
import { Select, SelectOption } from '../Select';

export type StatusSentiment = 'positive' | 'negative' | 'warning' | 'info' | '';
export type StatusVariant = 'filled' | 'outlined' | '';

export interface EditableStatusItem { label: string; value: string; sentiment?: StatusSentiment }

export interface StatusProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  sentiment?: StatusSentiment;
  variant?: StatusVariant;
  editable?: boolean;
  items?: EditableStatusItem[];
  value?: string;
  onChange?: (value: string | undefined) => void;
}

export const Status: React.FC<StatusProps> = ({ label, sentiment = '', variant = '', editable, items = [], value, onChange, className, ...rest }) => {
  const classes = [
    'rhp-status',
    sentiment && `rhp-status--${sentiment}`,
    variant && `rhp-status--${variant}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...rest}>
      {editable ? (
        <Select
          value={value}
          onChange={onChange as any}
          options={(items as EditableStatusItem[]).map<SelectOption>((i) => ({ label: i.label, value: i.value }))}
          placeholder={label || 'Select'}
        />
      ) : (
        <span className="rhp-status__label">{label}</span>
      )}
    </div>
  );
};

export default Status;

