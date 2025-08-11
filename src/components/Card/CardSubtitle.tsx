import React from 'react';
import './card.scss';

export interface CardSubtitleProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardSubtitle: React.FC<CardSubtitleProps> = ({ className, style, children, ...rest }) => {
  return (
    <div className={['rhp-card-subtitle', className].filter(Boolean).join(' ')} style={style as React.CSSProperties} {...rest}>
      {children}
    </div>
  );
};

export default CardSubtitle;
