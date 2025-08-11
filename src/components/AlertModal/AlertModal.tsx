import React, { useEffect } from 'react';
import './alert-modal.scss';
import { Button } from '../Button';

export type AlertSentiment = 'success' | 'warning' | 'critical';

export interface AlertModalProps extends React.HTMLAttributes<HTMLDivElement> {
    open?: boolean;
    title?: React.ReactNode;
    /** If provided, children is used as modal body content */
    children?: React.ReactNode;
    /** Optional message (used if children not provided) */
    message?: React.ReactNode;
    /** Render custom actions (preserves original slot behavior). If omitted, default Confirm/Cancel buttons are shown. */
    actions?: React.ReactNode;
    confirmText?: string;
    cancelText?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
    /** Prevent closing via backdrop/ESC */
    persistent?: boolean;
    /** Visual sentiment variant */
    sentiment?: AlertSentiment;
    /** Controlled open-change callback (maps to v-model from legacy) */
    onOpenChange?: (open: boolean) => void;
}

export const AlertModal: React.FC<AlertModalProps> = ({
    open,
    title,
    children,
    message,
    actions,
    confirmText = 'OK',
    cancelText = 'Cancel',
    onConfirm,
    onCancel,
    persistent,
    sentiment,
    onOpenChange,
    className,
    style,
    ...rest
}) => {
    if (!open) return null;
    const id = React.useId();
    const classes = ['rhp-alert-modal', sentiment && `rhp-alert-modal--${sentiment}`, className]
        .filter(Boolean)
        .join(' ');

    const close = () => onOpenChange?.(false);

    const onBackdrop = () => {
        if (!persistent) {
            onCancel?.();
            close();
        }
    };

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && open && !persistent) {
                onCancel?.();
                close();
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open, persistent]);

    return (
        <div
            className={classes}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? `${id}-title` : undefined}
            aria-describedby={message || children ? `${id}-message` : undefined}
            style={style as React.CSSProperties}
            {...rest}
        >
            <div className="rhp-alert-modal__backdrop" aria-hidden onClick={onBackdrop} />
            <div className="rhp-alert-modal__content" role="document">
                {title && (
                    <div id={`${id}-title`} className="rhp-alert-modal__title">
                        {title}
                    </div>
                )}
                {(children || message) && (
                    <div id={`${id}-message`} className="rhp-alert-modal__message">
                        {children ?? message}
                    </div>
                )}
                <div className="rhp-alert-modal__actions">
                    {actions ?? (
                        <>
                            {onCancel && (
                                <Button
                                    variant="ghost"
                                    onClick={() => {
                                        onCancel();
                                        close();
                                    }}
                                >
                                    {cancelText}
                                </Button>
                            )}
                            <Button
                                variant="fill"
                                sentiment={sentiment === 'critical' ? 'critical' : 'primary'}
                                onClick={() => {
                                    onConfirm?.();
                                    close();
                                }}
                            >
                                {confirmText}
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AlertModal;
