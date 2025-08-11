import React from 'react';
import './navigation.scss';

export interface NavigationItem {
  id: string | number;
  label: React.ReactNode;
  href?: string;
  active?: boolean;
  onClick?: () => void;
}

export interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
  items?: NavigationItem[];
}

export const Navigation: React.FC<NavigationProps> = ({ items, className, children, ...rest }) => {
  return (
    <nav className={["rhp-navigation", className].filter(Boolean).join(" ")} {...rest}>
      <ul className="rhp-navigation__list">
        {items?.map(i => (
          <li key={i.id} className={["rhp-navigation__item", i.active && 'is-active'].filter(Boolean).join(' ')}>
            {i.href ? (
              <a href={i.href} className="rhp-navigation__link">{i.label}</a>
            ) : (
              <button type="button" onClick={i.onClick} className="rhp-navigation__link">{i.label}</button>
            )}
          </li>
        ))}
      </ul>
      {children}
    </nav>
  );
};

export default Navigation;

