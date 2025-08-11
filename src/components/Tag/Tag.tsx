import React from 'react';
import { Icon } from '../Icon';
import './tag.scss';

export type TagSentiment = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'critical';

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
    colorClassName?: string; // custom token class name when sentiment is undefined
    dismissible?: boolean;
    label?: string;
    leadingIcon?: string;
    sentiment?: TagSentiment;
    onDismissClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Tag: React.FC<TagProps> = ({
    colorClassName,
    dismissible,
    label,
    leadingIcon,
    sentiment = 'default',
    children,
    className,
    onDismissClick,
    ...rest
}) => {
    const classes = [
        'rhp-tag',
        'rhp-tag__root',
        sentiment && `rhp-tag--${sentiment}`,
        colorClassName && 'rhp-tag--color',
        colorClassName,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={[classes, className].filter(Boolean).join(' ')} {...rest}>
            {leadingIcon && <Icon size="s">{leadingIcon}</Icon>}
            <div className="rhp-tag__shadow" />
            <div className="rhp-tag__content">{label ?? children}</div>
            {dismissible && <button aria-label="Close" className="rhp__button" onClick={onDismissClick} />}
        </div>
    );
};

export default Tag;
