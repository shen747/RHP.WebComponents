import React from 'react';
import './panel.scss';

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  caption?: React.ReactNode;
}

export const Panel: React.FC<PanelProps> = ({ caption, className, children, ...rest }) => {
  return (
    <div className={["rhp-panel", className].filter(Boolean).join(" ")} {...rest}>
      {caption && <div className="rhp-panel__header">{caption}</div>}
      <div className="rhp-panel__content">{children}</div>
    </div>
  );
};

export default Panel;

