import React from 'react';
import './overlay.scss';

export interface OverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  visible?: boolean;
  onClick?: () => void;
}

export const Overlay: React.FC<OverlayProps> = ({ visible, onClick, className, style, children, ...rest }) => {
  if (!visible) return null;
  return (
    <div className={["rhp-overlay", className].filter(Boolean).join(" ")} style={style as React.CSSProperties} onClick={onClick} {...rest} />
  );
};

export default Overlay;

