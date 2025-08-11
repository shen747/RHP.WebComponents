import React from 'react';
import './empty-state.scss';

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ icon, title, description, actions, className, style, children, ...rest }) => {
  return (
    <div className={["rhp-empty-state", className].filter(Boolean).join(" ")} style={style as React.CSSProperties} {...rest}>
      {icon && <div className="rhp-empty-state__icon">{icon}</div>}
      {title && <div className="rhp-empty-state__title">{title}</div>}
      {description && <div className="rhp-empty-state__desc">{description}</div>}
      {children}
      {actions && <div className="rhp-empty-state__actions">{actions}</div>}
    </div>
  );
};

export default EmptyState;

