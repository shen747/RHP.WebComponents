import React from 'react';
import { Icon } from '../Icon';
import './loader.scss';

export interface LoaderProps extends React.HTMLAttributes<HTMLElement> {
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
    colorClassName?: string;
}

export const Loader: React.FC<LoaderProps> = ({ size = 'm', colorClassName, className, ...rest }) => {
    const classes = ['rhp-loader', colorClassName, className].filter(Boolean).join(' ');
    return (
        <Icon className={classes} size={size} {...rest}>
            a-icon-spinner
        </Icon>
    );
};

export default Loader;
