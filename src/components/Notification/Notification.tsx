import React from 'react';
import './notification.scss';

export interface NotificationProps extends React.HTMLAttributes<HTMLDivElement> {
    type?: 'info' | 'success' | 'warning' | 'error';
    title?: React.ReactNode;
    onClose?: () => void;
}

export const Notification: React.FC<NotificationProps> = ({
    type = 'info',
    title,
    onClose,
    className,
    children,
    ...rest
}) => {
    return (
        <div
            className={['rhp-notification', `rhp-notification--${type}`, className].filter(Boolean).join(' ')}
            {...rest}
        >
            {(title || onClose) && (
                <div className="rhp-notification__header">
                    {title && <div className="rhp-notification__title">{title}</div>}
                    {onClose && (
                        <button type="button" className="rhp-notification__close" onClick={onClose} aria-label="Close">
                            ×
                        </button>
                    )}
                </div>
            )}
            <div className="rhp-notification__content">{children}</div>
        </div>
    );
};

export default Notification;
