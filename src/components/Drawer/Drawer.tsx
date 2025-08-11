import React from 'react';
import './drawer.scss';

export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  side?: 'left' | 'right';
  width?: number | string;
  persistent?: boolean;
  title?: React.ReactNode;
}

export const Drawer: React.FC<DrawerProps> = ({ open, onOpenChange, side = 'right', width = 360, persistent, title, className, style, children, ...rest }) => {
  if (!open) return null;
  const close = () => onOpenChange?.(false);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape' && open && !persistent) close(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, persistent]);

  return (
    <div className={["rhp-drawer", className].filter(Boolean).join(" ")} style={style as React.CSSProperties} {...rest}>
      <div className="rhp-drawer__backdrop" aria-hidden onClick={() => !persistent && close()} />
      <div className={["rhp-drawer__panel", `rhp-drawer__panel--${side}`].join(' ')} style={{ width }}>
        {title && <div className="rhp-drawer__title">{title}</div>}
        <div className="rhp-drawer__content">{children}</div>
      </div>
    </div>
  );
};

export default Drawer;

