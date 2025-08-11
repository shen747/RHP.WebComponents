import React from 'react';
import './callout.scss';
import { Icon } from '../Icon';

export type CalloutSentiment = 'info' | 'success' | 'warning' | 'critical';
export type CalloutVariant = 'default' | 'inline';

export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  sentiment?: CalloutSentiment;
  variant?: CalloutVariant;
  dismissible?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onClose?: () => void;
}

const sentimentIcon: Record<CalloutSentiment, string> = {
  info: 'a-icon-info-circle',
  success: 'a-icon-status-success',
  warning: 'a-icon-status-warning',
  critical: 'a-icon-status-critical',
};

export const Callout: React.FC<CalloutProps> = ({
  title,
  description,
  sentiment = 'info',
  variant = 'default',
  dismissible = false,
  open = true,
  onOpenChange,
  onClose,
  className,
  children,
  style,
  ...rest
}) => {
  const [visible, setVisible] = React.useState(open);
  React.useEffect(() => setVisible(open), [open]);

  if (!visible) return null;

  const classes = [
    'rhp-callout',
    `rhp-callout--${sentiment}`,
    variant === 'inline' && 'rhp-callout--inline',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleDismiss = () => {
    setVisible(false);
    onOpenChange?.(false);
    onClose?.();
  };

  return (
    <div className={classes} style={style as React.CSSProperties} {...rest}>
      <div className="rhp-callout__icon-container">
        <Icon>{sentimentIcon[sentiment]}</Icon>
      </div>
      <div className="rhp-callout__container">
        {title && variant !== 'inline' && <div className="rhp-callout__title">{title}</div>}
        {description && <div className="rhp-callout__description" style={{ whiteSpace: 'pre-wrap' }}>{description}</div>}
        {children}
      </div>
      {dismissible && variant !== 'inline' && (
        <button type="button" className="rhp-callout__close-icon-container" onClick={handleDismiss} aria-label="Close">
          <Icon>a-icon-close</Icon>
        </button>
      )}
    </div>
  );
};

export default Callout;

