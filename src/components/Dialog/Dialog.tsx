import React, { useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import './dialog.scss';
import { Icon } from '../Icon';
import { Button } from '../Button';

export type DialogSize = 'm' | 'l' | 'xl' | '';
export type Anchor = 
  | 'top' | 'bottom' | 'start' | 'end' | 'left' | 'right'
  | 'center' | 'center center'
  | `${'top' | 'bottom'} ${'start' | 'end' | 'left' | 'right' | 'center'}`
  | `${'start' | 'end' | 'left' | 'right'} ${'top' | 'bottom' | 'center'}`;

export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  persistent?: boolean;
  title?: string;
  actions?: React.ReactNode;
  size?: DialogSize;
  width?: string | number;
  height?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  maxHeight?: string | number;
  fullscreen?: boolean;
  location?: Anchor;
  scrollable?: boolean;
  eager?: boolean;
  absolute?: boolean;
  retainFocus?: boolean;
  transition?: string | boolean;
  activator?: React.ReactNode;
  children?: React.ReactNode;
}

export const Dialog: React.FC<DialogProps> = ({ 
  open, 
  onOpenChange, 
  persistent = false, 
  title, 
  actions,
  size = '',
  width,
  height,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  fullscreen = false,
  location = 'center',
  scrollable = false,
  eager = false,
  absolute = false,
  retainFocus = true,
  transition = 'dialog-transition',
  activator,
  className,
  style,
  children,
  ...rest 
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // Convert size to dimensions
  const getSizeDimensions = useCallback(() => {
    switch (size) {
      case 'xl':
        return { width: '90vw', height: '90vh', minHeight: '90vh' };
      case 'l':
        return { width: '1200px', height: '90vh', maxHeight: '1600px' };
      case 'm':
        return { width: '780px', height: '60vh', maxHeight: '1200px' };
      default:
        return {};
    }
  }, [size]);

  const sizeDimensions = getSizeDimensions();

  // Handle focus management
  useEffect(() => {
    if (open && retainFocus) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      
      // Focus the first focusable element in the dialog
      const focusableElements = dialogRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements && focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      }
    } else if (!open && previousActiveElement.current) {
      previousActiveElement.current.focus();
    }
  }, [open, retainFocus]);

  // Handle escape key
  useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !persistent) {
        onOpenChange?.(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [open, persistent, onOpenChange]);

  // Prevent body scroll when dialog is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = useCallback(() => {
    if (!persistent) {
      onOpenChange?.(false);
    }
  }, [persistent, onOpenChange]);

  const handleBackdropClick = useCallback((event: React.MouseEvent) => {
    if (event.target === event.currentTarget && !persistent) {
      close();
    }
  }, [persistent, close]);

  const handleCloseClick = useCallback(() => {
    close();
  }, [close]);

  const dialogContent = (
    <div 
      className={[
        'rhp-dialog',
        fullscreen && 'rhp-dialog--fullscreen',
        absolute && 'rhp-dialog--absolute',
        scrollable && 'rhp-dialog--scrollable',
        className
      ].filter(Boolean).join(' ')}
      role="dialog" 
      aria-modal="true"
      aria-labelledby={title ? 'dialog-title' : undefined}
      style={{
        position: absolute ? 'absolute' : 'fixed',
        ...style
      }}
      {...rest}
    >
      <div className="rhp-dialog__backdrop" onClick={handleBackdropClick} />
      <div 
        ref={dialogRef}
        className="rhp-dialog__surface" 
        role="document"
        style={{
          width: width || sizeDimensions.width,
          height: height || sizeDimensions.height,
          minWidth: minWidth || sizeDimensions.minWidth,
          maxWidth: maxWidth || sizeDimensions.maxWidth,
          minHeight: minHeight || sizeDimensions.minHeight,
          maxHeight: maxHeight || sizeDimensions.maxHeight,
        }}
      >
        {title && (
          <div className="rhp-dialog__title">
            <div id="dialog-title" className="rhp-dialog__title-text">{title}</div>
            {!persistent && (
              <button 
                type="button" 
                className="rhp-dialog__close" 
                onClick={handleCloseClick} 
                aria-label="Close"
              >
                <Icon name="a-icon-close" />
              </button>
            )}
          </div>
        )}
        <div className="rhp-dialog__content">
          {children}
        </div>
        {actions && (
          <div className="rhp-dialog__actions">
            {actions}
          </div>
        )}
      </div>
    </div>
  );

  // Don't render if not open and not eager
  if (!open && !eager) {
    return activator ? <div className="rhp-dialog__activator">{activator}</div> : null;
  }

  return (
    <>
      {activator && <div className="rhp-dialog__activator">{activator}</div>}
      {open && createPortal(dialogContent, document.body)}
    </>
  );
};

export default Dialog;

