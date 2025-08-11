import React from 'react';
import './bottom-navigation.scss';

export interface BottomNavigationProps extends React.HTMLAttributes<HTMLElement> {
  value?: boolean;
  onValueChange?: (open: boolean) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({ value = true, onValueChange, className, style, children, ...rest }) => {
  const [open, setOpen] = React.useState(value);
  React.useEffect(() => setOpen(value), [value]);

  return (
    <nav className={["rhp-bottom-navigation", !open && "rhp-bottom-navigation--hidden", className].filter(Boolean).join(" ")}
      aria-hidden={!open}
      style={style as React.CSSProperties}
      {...rest}
    >
      {children}
    </nav>
  );
};

export default BottomNavigation;

