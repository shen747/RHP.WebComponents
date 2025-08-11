import React, { useEffect } from 'react';
import './bottom-sheet.scss';

export interface BottomSheetProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  persistent?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const BottomSheet: React.FC<BottomSheetProps> = ({ open, persistent, onOpenChange, className, style, children, ...rest }) => {
  if (!open) return null;

  const close = () => onOpenChange?.(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open && !persistent) close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, persistent]);

  return (
    <div className={["rhp-bottom-sheet", className].filter(Boolean).join(" ")} role="dialog" aria-modal="true" style={style as React.CSSProperties} {...rest}>
      <div className="rhp-bottom-sheet__backdrop" aria-hidden onClick={() => !persistent && close()} />
      <div className="rhp-bottom-sheet__surface">
        {children}
      </div>
    </div>
  );
};

export default BottomSheet;

