import React from 'react';
import './hyperlink.scss';

export interface HyperlinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Hyperlink: React.FC<HyperlinkProps> = ({ className, children, ...rest }) => {
    return (
        <a className={['rhp-hyperlink', className].filter(Boolean).join(' ')} {...rest}>
            {children}
        </a>
    );
};

export default Hyperlink;
