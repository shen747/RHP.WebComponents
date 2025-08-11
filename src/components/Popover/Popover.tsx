import React from 'react';
import './popover.scss';

export interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  onOpenChange?: (v: boolean) => void;
}

export const Popover: React.FC<PopoverProps> = ({ open, onOpenChange, children, className }) => {
  if (!open) return null;
  return (
    <div className={["rhp-popover", className].filter(Boolean).join(" ")} role="dialog">
      <div className="rhp-popover__content">
        {children}
      </div>
    </div>
  );
};

export default Popover;

