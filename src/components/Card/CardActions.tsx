import React from 'react';
import './card.scss';

export interface CardActionsProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardActions: React.FC<CardActionsProps> = ({ className, style, children, ...rest }) => {
  return (
    <div className={['rhp-card-actions', className].filter(Boolean).join(' ')} style={style as React.CSSProperties} {...rest}>
      {children}
    </div>
  );
};

export default CardActions;
