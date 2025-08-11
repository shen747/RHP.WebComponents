import React from 'react';
import './footer.scss';

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  copyright?: React.ReactNode;
  links?: Array<{ id: string | number; label: React.ReactNode; href?: string }>;
}

export const Footer: React.FC<FooterProps> = ({ copyright, links, className, style, children, ...rest }) => {
  return (
    <footer className={["rhp-footer", className].filter(Boolean).join(" ")} style={style as React.CSSProperties} {...rest}>
      <div className="rhp-footer__left">{copyright}</div>
      <div className="rhp-footer__right">
        {links?.map(l => (
          <a key={l.id} href={l.href} className="rhp-footer__link">{l.label}</a>
        ))}
        {children}
      </div>
    </footer>
  );
};

export default Footer;

