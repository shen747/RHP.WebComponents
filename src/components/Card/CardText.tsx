import React from 'react';
import './card.scss';

export interface CardTextProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardText: React.FC<CardTextProps> = ({ className, style, children, ...rest }) => {
  return (
    <div className={['rhp-card-text', className].filter(Boolean).join(' ')} style={style as React.CSSProperties} {...rest}>
      {children}
    </div>
  );
};

export default CardText;
