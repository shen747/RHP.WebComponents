import React from 'react';
import './expander.scss';

export interface ExpanderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: React.ReactNode;
  defaultOpen?: boolean;
}

export const Expander: React.FC<ExpanderProps> = ({ title, defaultOpen, children, className, style, ...rest }) => {
  const [open, setOpen] = React.useState(!!defaultOpen);
  return (
    <div className={["rhp-expander", className].filter(Boolean).join(" ")} style={style as React.CSSProperties} {...rest}>
      <button type="button" className="rhp-expander__header" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <span className="rhp-expander__chev">{open ? '▼' : '▶'}</span>
        <span className="rhp-expander__title">{title}</span>
      </button>
      {open && <div className="rhp-expander__content">{children}</div>}
    </div>
  );
};

export default Expander;

