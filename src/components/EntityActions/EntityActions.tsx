import React from 'react';
import './entity-actions.scss';
import { Button } from '../Button';

export interface ActionItem {
  id: string | number;
  label: React.ReactNode;
  onClick?: () => void;
}

export interface EntityActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  actions?: ActionItem[];
}

export const EntityActions: React.FC<EntityActionsProps> = ({ actions, className, style, children, ...rest }) => {
  return (
    <div className={["rhp-entity-actions", className].filter(Boolean).join(" ")} style={style as React.CSSProperties} {...rest}>
      {actions ? actions.map(a => (
        <Button key={a.id} size="sm" onClick={a.onClick}>{a.label}</Button>
      )) : children}
    </div>
  );
};

export default EntityActions;

