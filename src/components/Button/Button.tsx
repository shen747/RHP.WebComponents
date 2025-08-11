import React from 'react';
import { Icon } from '../Icon';
import './button.scss';

export type ButtonVariant = 'default' | 'fill' | 'ghost';
export type ButtonSentiment = 'primary' | 'success' | 'critical';
export type ButtonSize = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'value'> {
    active?: boolean;
    colorClassName?: string;
    disabled?: boolean;
    fill?: boolean;
    leadingIcon?: string;
    loading?: boolean;
    sentiment?: ButtonSentiment;
    trailingIcon?: string;
    variant?: ButtonVariant;
    value?: string | number;
    size?: ButtonSize;
    href?: string;
    target?: string;
}

export const Button: React.FC<ButtonProps> = ({
    active,
    colorClassName,
    disabled,
    fill,
    leadingIcon,
    loading,
    sentiment,
    trailingIcon,
    variant = 'default',
    size = 'm',
    href,
    target,
    children,
    className,
    style,
    onClick,
    type,
    ...rest
}) => {
    const classes = [
        'rhp-button',
        `rhp-button--${variant}`,
        `rhp-button--${size}`,
        fill && 'rhp-button--fill-available',
        active && 'rhp-button--active',
        loading && 'rhp-button--loading',
        disabled && 'rhp-button--disabled',
        sentiment === 'success' && 'rhp-button--success',
        sentiment === 'primary' && 'rhp-button--primary',
        sentiment === 'critical' && 'rhp-button--critical',
        colorClassName && 'rhp-button--color',
        colorClassName,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const content = (
        <>
            <div className="rhp-button__shadow" />
            {leadingIcon && <Icon name={leadingIcon} className="rhp-button__icon" />}
            <div className="rhp-button__content">{children}</div>
            {loading && <div className="rhp-button__loader" aria-hidden />}
            {trailingIcon && <Icon name={trailingIcon} className="rhp-button__icon" />}
        </>
    );

    if (!disabled && href) {
        return (
            <a
                className={classes}
                href={href}
                target={target}
                style={style as React.CSSProperties}
                onClick={onClick as any}
                {...(rest as any)}
            >
                {content}
            </a>
        );
    }

    return (
        <button
            className={classes}
            disabled={disabled}
            type={type ?? ((href ? undefined : 'button') as any)}
            style={style as React.CSSProperties}
            onClick={onClick as any}
            {...rest}
        >
            {content}
        </button>
    );
};

export default Button;
