import React from 'react';
import './dropdown.scss';
import { IconButton, IconButtonProps } from '../IconButton';

export interface DropdownIconButtonProps extends Omit<IconButtonProps, 'onClick'> {
  items: Array<{ id: string | number; label: React.ReactNode; onSelect?: () => void }>;
}

export const DropdownIconButton: React.FC<DropdownIconButtonProps> = ({ items, className, style, ...rest }) => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const onClick = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div className={["rhp-dropdown", className].filter(Boolean).join(" ")} style={style as React.CSSProperties} ref={ref}>
      <IconButton {...rest} onClick={() => setOpen(o => !o)} />
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

export default DropdownIconButton;

