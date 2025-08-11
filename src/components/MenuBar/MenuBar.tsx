import React from 'react';
import './menubar.scss';

export interface MenuBarItem {
  id: string | number;
  label: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export interface MenuBarProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: MenuBarItem[];
}

export const MenuBar: React.FC<MenuBarProps> = ({ items, className, children, ...rest }) => {
  return (
    <nav className={["rhp-menubar", className].filter(Boolean).join(" ")} {...rest}>
      {items?.map(i => (
        <button key={i.id} type="button" className={["rhp-menubar__item", i.active && 'is-active'].filter(Boolean).join(' ')} onClick={i.onClick}>
          {i.label}
        </button>
      ))}
      {children}
    </nav>
  );
};

export default MenuBar;

