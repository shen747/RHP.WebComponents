import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '../Icon';
import './chip.scss';

export type ChipVariant = 'close' | 'refinement' | 'dropdown';
export type ChipSentiment = 'critical' | 'primary' | 'success' | 'warning';
export type ChipSize = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
    closeOnContentClick?: boolean;
    color?: string; // for custom color application
    colorClassName?: string; // for token class application
    disabled?: boolean;
    label?: string;
    leadingIcon?: string;
    trailingIcon?: string;
    sentiment?: ChipSentiment;
    size?: ChipSize;
    variant?: ChipVariant;
    dropdown?: React.ReactNode; // content for dropdown menu
    
    // Measure props
    height?: number | string;
    maxHeight?: number | string;
    maxWidth?: number | string;
    minHeight?: number | string;
    minWidth?: number | string;
    width?: number | string;
    
    // Events
    onCloseClick?: (e: React.MouseEvent) => void;
    onTrailingIconClick?: (e: React.MouseEvent) => void;
}

const convertToUnit = (value: string | number | null | undefined, unit = 'px'): string | undefined => {
  if (value == null || value === '') {
    return undefined;
  } else if (value && isNaN(+value)) {
    return String(value);
  } else {
    return `${Number(value)}${unit}`;
  }
};

export const Chip: React.FC<ChipProps> = ({
    closeOnContentClick = true,
    color,
    colorClassName,
    disabled,
    label,
    leadingIcon,
    trailingIcon,
    sentiment,
    size = 'm',
    variant,
    dropdown,
    height,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    width,
    children,
    className,
    style,
    onClick,
    onCloseClick,
    onTrailingIconClick,
    ...rest
}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    // Handle dropdown menu click outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuOpen && menuRef.current && !menuRef.current.contains(event.target as Node) && 
                rootRef.current && !rootRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        }

        if (variant === 'dropdown' && menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [menuOpen, variant]);

    // Build styles object
    const styles: React.CSSProperties = { ...style } as React.CSSProperties;
    
    // Handle color
    if (color) {
        styles.backgroundColor = color;
        styles.borderColor = color;
    }
    
    // Handle measure props
    const measureHeight = convertToUnit(height);
    const measureMinHeight = convertToUnit(minHeight);
    const measureMinWidth = convertToUnit(minWidth);
    const measureMaxHeight = convertToUnit(maxHeight);
    const measureMaxWidth = convertToUnit(maxWidth);
    const measureWidth = convertToUnit(width);
    
    if (measureHeight) styles.height = measureHeight;
    if (measureMinHeight) styles.minHeight = measureMinHeight;
    if (measureMinWidth) styles.minWidth = measureMinWidth;
    if (measureMaxHeight) styles.maxHeight = measureMaxHeight;
    if (measureMaxWidth) styles.maxWidth = measureMaxWidth;
    if (measureWidth) styles.width = measureWidth;

    const hasCssClassColor = !disabled && !sentiment && !!colorClassName;
    const hasCssStyleColor = !disabled && !sentiment && !!color;

    const classes = [
        'rhp-chip',
        'rhp-chip--default',
        `rhp-chip--${size}`,
        disabled && 'rhp-chip--disabled',
        variant === 'refinement' && 'rhp-chip--refinement',
        (hasCssClassColor || hasCssStyleColor) && 'rhp-chip--color',
        sentiment === 'success' && 'rhp-chip--success',
        sentiment === 'warning' && 'rhp-chip--warning',
        sentiment === 'critical' && 'rhp-chip--critical',
        sentiment === 'primary' && 'rhp-chip--primary',
        colorClassName,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const computedLeadingIcon = leadingIcon ?? (variant === 'refinement' ? 'a-icon-add' : undefined);
    let computedTrailingIcon = trailingIcon;
    if (!computedTrailingIcon) {
        if (variant === 'dropdown') computedTrailingIcon = 'a-icon-caret-down';
        else if (variant === 'close') computedTrailingIcon = 'a-icon-close';
    }

    const handleClick = (e: React.MouseEvent) => {
        if (disabled) return;
        
        if (variant === 'dropdown') {
            setMenuOpen(!menuOpen);
        }
        
        onClick?.(e);
    };

    const handleTrailingIconClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (disabled) return;
        
        if (variant === 'close') {
            onCloseClick?.(e);
        } else if (variant === 'dropdown') {
            setMenuOpen(!menuOpen);
        }
        
        onTrailingIconClick?.(e);
    };

    const handleDropdownContentClick = () => {
        if (closeOnContentClick) {
            setMenuOpen(false);
        }
    };

    return (
        <div
            ref={rootRef}
            role={variant === 'dropdown' ? 'button' : undefined}
            className={classes}
            style={styles}
            onClick={handleClick}
            {...rest}
        >
            {computedLeadingIcon && <Icon>{computedLeadingIcon}</Icon>}
            <div className="rhp-chip__content">{children ?? label}</div>
            {computedTrailingIcon && (
                <Icon onClick={handleTrailingIconClick}>{computedTrailingIcon}</Icon>
            )}
            
            {/* Dropdown menu */}
            {variant === 'dropdown' && dropdown && menuOpen && (
                <div 
                    ref={menuRef}
                    className="rhp-chip__dropdown"
                    onClick={handleDropdownContentClick}
                >
                    {dropdown}
                </div>
            )}
        </div>
    );
};

export default Chip;
