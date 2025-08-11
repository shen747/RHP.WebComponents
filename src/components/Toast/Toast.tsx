import React, { useEffect, useMemo, useRef, useState } from 'react';
import './toast.scss';

export type ToastSentiment = 'critical' | 'info' | 'warning' | 'success';
export type ToastLocation = 'bottom left' | 'bottom right' | 'top left' | 'top right';

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  sentiment?: ToastSentiment;
  title?: string;
  description?: string;
  actionLink?: string;
  actionText?: string;
  timeout?: number; // ms; -1 = persist
  location?: ToastLocation;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  activator?: (args: { props: { onClick: () => void }, isActive: boolean }) => React.ReactNode;
}

export const Toast: React.FC<ToastProps> = ({
  sentiment = 'info',
  title,
  description,
  actionLink,
  actionText,
  timeout = -1,
  location = 'bottom left',
  open,
  onOpenChange,
  activator,
  className,
  ...rest
}) => {
  const [internal, setInternal] = useState<boolean>(!!open);
  const isOpen = open !== undefined ? open : internal;
  const timerRef = useRef<number | undefined>();
  const hoverRef = useRef(false);

  useEffect(() => setInternal(!!open), [open]);

  const rootClass = useMemo(() => {
    const locClass = `rhp-toast--${location.replace(' ', '-')}`; // e.g. bottom-left
    return ['rhp-toast-container', locClass, className].filter(Boolean).join(' ');
  }, [location, className]);

  useEffect(() => {
    window.clearTimeout(timerRef.current);
    if (!isOpen) return;
    if (timeout === -1) return;
    timerRef.current = window.setTimeout(() => {
      if (!hoverRef.current) close();
    }, timeout);
    return () => window.clearTimeout(timerRef.current);
  }, [isOpen, timeout]);

  function openToast() {
    if (open === undefined) setInternal(true);
    onOpenChange?.(true);
  }
  function close() {
    if (open === undefined) setInternal(false);
    onOpenChange?.(false);
  }

  const content = (
    <div
      className={["rhp-toast", `rhp-toast--${sentiment}`].join(' ')}
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
      role="status"
      {...rest}
    >
      <div className="rhp-toast__icon" aria-hidden>!</div>
      <div className="rhp-toast__body">
        {title && <div className="rhp-toast__title">{title}</div>}
        {description && <div className="rhp-toast__description">{description}</div>}
        {actionLink && actionText && (
          <a className="rhp-toast__action" href={actionLink} target="_blank" rel="noreferrer">
            {actionText}
          </a>
        )}
      </div>
      <button className="rhp-toast__close" aria-label="Dismiss" onClick={close}>×</button>
    </div>
  );

  return (
    <>
      {activator?.({ props: { onClick: openToast }, isActive: isOpen })}
      {isOpen && <div className={rootClass}>{content}</div>}
    </>
  );
};

export default Toast;

