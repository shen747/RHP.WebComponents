import React, { useMemo, useRef, useState } from 'react';
import './toast-stacker.scss';

export type ToastSentiment = 'critical' | 'info' | 'warning' | 'success';
export interface ToastItem { id: string | number; title: string; description: string; sentiment: ToastSentiment; timeout?: number; actionLink?: string; actionText?: string }

export interface ToastStackerProps extends React.HTMLAttributes<HTMLDivElement> {
  toasts: ToastItem[];
  onToastsChange?: (toasts: ToastItem[]) => void;
}

export const ToastStacker: React.FC<ToastStackerProps> = ({ toasts, onToastsChange, className, ...rest }) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const classes = useMemo(() => ['rhp-toast-stacker', className].filter(Boolean).join(' '), [className]);

  const visibleToasts = toasts.filter(Boolean);

  function dismiss(index: number) {
    const next = [...visibleToasts];
    next.splice(index, 1);
    onToastsChange?.(next);
  }

  return (
    <div className={classes} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} ref={containerRef} {...rest}>
      {visibleToasts.map((t, index) => (
        <div key={t.id} className="rhp-toast-stacker__item" style={{ transform: isHovered ? undefined : `translateY(${index * -8}px)`, opacity: isHovered ? 1 : Math.max(0.4, 1 - index * 0.15) }}>
          <div className={["rhp-toast", `rhp-toast--${t.sentiment}`].join(' ')}>
            <div className="rhp-toast__icon" aria-hidden>!</div>
            <div className="rhp-toast__body">
              {t.title && <div className="rhp-toast__title">{t.title}</div>}
              {t.description && <div className="rhp-toast__description">{t.description}</div>}
              {t.actionLink && t.actionText && (
                <a className="rhp-toast__action" href={t.actionLink} target="_blank" rel="noreferrer">
                  {t.actionText}
                </a>
              )}
            </div>
            <button className="rhp-toast__close" aria-label="Dismiss" onClick={() => dismiss(index)}>×</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToastStacker;

