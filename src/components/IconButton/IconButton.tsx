import { Button, ButtonProps } from '../Button';
import { Icon } from '../Icon';
import './icon-button.scss';

export interface IconButtonProps extends Omit<ButtonProps, 'children'> {
    icon?: string;
    ariaLabel?: string;
    children?: React.ReactNode;
}

export const IconButton = ({
    icon,
    ariaLabel,
    size = 'm',
    className,
    children,
    disabled,
    ...rest
}: IconButtonProps) => {
    const label = ariaLabel ?? (typeof children === 'string' ? children : undefined);
    return (
        <Button
            aria-label={label}
            className={['rhp-icon-button', className].filter(Boolean).join(' ')}
            size={size}
            disabled={disabled}
            {...rest}
        >
            <div className="rhp-icon-button__container">
                {children ?? (
                    <Icon className="rhp-icon-button__icon" size={size}>
                        {icon}
                    </Icon>
                )}
            </div>
        </Button>
    );
};

export default IconButton;
