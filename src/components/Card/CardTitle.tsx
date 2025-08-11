import React from 'react';
import './card.scss';

export interface CardTitleProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardTitle: React.FC<CardTitleProps> = ({ className, style, children, ...rest }) => {
  return (
    <div className={['rhp-card-title', className].filter(Boolean).join(' ')} style={style as React.CSSProperties} {...rest}>
      {children}
    </div>
  );
};

export default CardTitle;
