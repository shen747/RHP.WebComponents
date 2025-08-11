import React from 'react';
import './dropdown.scss';

export interface DropdownButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  items: Array<{ id: string | number; label: React.ReactNode; onSelect?: () => void }>;
}

export const DropdownButton: React.FC<DropdownButtonProps> = ({ items, children, className, style, ...rest }) => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const onClick = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div className={["rhp-dropdown", className].filter(Boolean).join(" ")} style={style as React.CSSProperties} ref={ref}>
      <button type="button" className="rhp-dropdown__trigger" onClick={() => setOpen(o => !o)} {...rest}>{children}</button>
      {open && (
        <div className="rhp-dropdown__menu" role="menu">
          {items.map(it => (
            <button key={it.id} type="button" role="menuitem" className="rhp-dropdown__item" onClick={() => { it.onSelect?.(); setOpen(false); }}>{it.label}</button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownButton;

