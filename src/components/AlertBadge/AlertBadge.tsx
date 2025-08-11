import React from 'react';
import './alert-badge.scss';

export type AlertBadgeVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertBadgeProps {
    visible?: boolean;
    variant?: AlertBadgeVariant;
    children?: React.ReactNode;
}

export const AlertBadge: React.FC<AlertBadgeProps> = ({ visible = true, variant, children }) => {
    if (!visible)
        return (
            <div className="rhp-alert-badge">
                <div className="rhp-badge__wrapper">{children}</div>
            </div>
        );

    const contentClasses = [
        'rhp-badge__content',
        variant === 'error' && 'rhp-alert-badge--error',
        variant === 'warning' && 'rhp-alert-badge--warning',
        variant === 'success' && 'rhp-alert-badge--success',
        variant === 'info' && 'rhp-alert-badge--info',
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className="rhp-alert-badge">
            <div className="rhp-badge__wrapper">
                {children}
                <div className={contentClasses} />
            </div>
        </div>
    );
};

export default AlertBadge;
