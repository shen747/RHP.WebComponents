import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import './menu.scss';

export interface MenuItem {
  id: string | number;
  label: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  divider?: boolean;
  icon?: string;
}

export type Anchor = 
  | 'top' | 'bottom' | 'start' | 'end' | 'left' | 'right'
  | 'center' | 'center center'
  | `${'top' | 'bottom'} ${'start' | 'end' | 'left' | 'right' | 'center'}`
  | `${'start' | 'end' | 'left' | 'right'} ${'top' | 'bottom' | 'center'}`;

export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: MenuItem[];
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  anchor?: Anchor;
  elevation?: '100' | '200' | '300';
  closeDelay?: number;
  closeOnContentClick?: boolean;
  disabled?: boolean;
  fullscreen?: boolean;
  location?: Anchor;
  minWidth?: string | number;
  offset?: string | number | number[];
  openOnHover?: boolean;
  persistent?: boolean;
  target?: [number, number] | string | HTMLElement;
  transition?: string | boolean;
  nudgeTop?: string | number;
  nudgeBottom?: string | number;
  nudgeLeft?: string | number;
  nudgeRight?: string | number;
  activator?: React.ReactNode;
  children?: React.ReactNode;
}

export const Menu: React.FC<MenuProps> = ({ 
  items, 
  open: openProp,
  onOpenChange,
  anchor = 'bottom right',
  elevation = '100',
  closeDelay = 0,
  closeOnContentClick = true,
  disabled = false,
  fullscreen = false,
  location,
  minWidth,
  offset,
  openOnHover = false,
  persistent = false,
  target,
  transition = false,
  nudgeTop,
  nudgeBottom,
  nudgeLeft,
  nudgeRight,
  activator,
  children,
  className,
  ...rest 
}) => {
  const [open, setOpen] = useState(openProp ?? false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const activatorRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Handle controlled vs uncontrolled state
  const isOpen = openProp !== undefined ? openProp : open;
  const setIsOpen = useCallback((value: boolean) => {
    if (openProp === undefined) {
      setOpen(value);
    }
    onOpenChange?.(value);
  }, [openProp, onOpenChange]);

  // Convert anchor to positioning
  const getPositionFromAnchor = useCallback((anchorEl: HTMLElement, anchor: Anchor) => {
    const rect = anchorEl.getBoundingClientRect();
    const [vertical, horizontal] = anchor.split(' ');
    
    let top = 0;
    let left = 0;

    switch (vertical) {
      case 'top':
        top = rect.top;
        break;
      case 'bottom':
        top = rect.bottom;
        break;
      case 'center':
        top = rect.top + rect.height / 2;
        break;
    }

    switch (horizontal) {
      case 'left':
        left = rect.left;
        break;
      case 'right':
        left = rect.right;
        break;
      case 'start':
        left = rect.left;
        break;
      case 'end':
        left = rect.right;
        break;
      case 'center':
        left = rect.left + rect.width / 2;
        break;
    }

    return { top, left };
  }, []);

  // Position menu
  useEffect(() => {
    if (isOpen && activatorRef.current) {
      const pos = getPositionFromAnchor(activatorRef.current, location || anchor);
      
      // Apply nudges
      if (nudgeTop) pos.top += typeof nudgeTop === 'number' ? nudgeTop : parseInt(nudgeTop);
      if (nudgeBottom) pos.top += typeof nudgeBottom === 'number' ? nudgeBottom : parseInt(nudgeBottom);
      if (nudgeLeft) pos.left += typeof nudgeLeft === 'number' ? nudgeLeft : parseInt(nudgeLeft);
      if (nudgeRight) pos.left += typeof nudgeRight === 'number' ? nudgeRight : parseInt(nudgeRight);

      setPosition(pos);
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isOpen, location, anchor, nudgeTop, nudgeBottom, nudgeLeft, nudgeRight, getPositionFromAnchor]);

  // Handle click outside
  useEffect(() => {
    if (!isOpen || persistent) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) &&
          activatorRef.current && !activatorRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, persistent, setIsOpen]);

  // Handle escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, setIsOpen]);

  // Handle hover
  const handleMouseEnter = useCallback(() => {
    if (openOnHover && !disabled) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsOpen(true);
    }
  }, [openOnHover, disabled, setIsOpen]);

  const handleMouseLeave = useCallback(() => {
    if (openOnHover && !persistent) {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, closeDelay);
    }
  }, [openOnHover, persistent, closeDelay, setIsOpen]);

  // Handle item click
  const handleItemClick = useCallback((item: MenuItem) => {
    if (item.disabled) return;
    
    item.onClick?.();
    
    if (closeOnContentClick && !persistent) {
      setIsOpen(false);
    }
  }, [closeOnContentClick, persistent, setIsOpen]);

  // Handle activator click
  const handleActivatorClick = useCallback(() => {
    if (disabled) return;
    setIsOpen(!isOpen);
  }, [disabled, isOpen, setIsOpen]);

  const menuContent = (
    <div
      ref={menuRef}
      className={[
        'rhp-menu',
        `rhp-elevation-${elevation}`,
        fullscreen && 'rhp-menu--fullscreen',
        isVisible && 'rhp-menu--visible',
        className
      ].filter(Boolean).join(' ')}
      style={{
        position: fullscreen ? 'fixed' : 'absolute',
        top: fullscreen ? 0 : position.top,
        left: fullscreen ? 0 : position.left,
        minWidth: minWidth,
        zIndex: 1000,
        ...rest.style
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {items ? (
        <div className="rhp-menu__container">
          <div className="rhp-menu__content">
            {items.map((item, index) => (
              <React.Fragment key={item.id}>
                {item.divider ? (
                  <div className="rhp-menu__divider" />
                ) : (
                  <button
                    type="button"
                    className={[
                      'rhp-menu__item',
                      item.disabled && 'rhp-menu__item--disabled'
                    ].filter(Boolean).join(' ')}
                    onClick={() => handleItemClick(item)}
                    disabled={item.disabled}
                    role="menuitem"
                  >
                    {item.icon && <span className="rhp-menu__icon">{item.icon}</span>}
                    <span className="rhp-menu__label">{item.label}</span>
                  </button>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      ) : (
        children
      )}
    </div>
  );

  return (
    <div className="rhp-menu-wrapper">
      <div
        ref={activatorRef}
        className="rhp-menu__activator"
        onClick={handleActivatorClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {activator}
      </div>
      
      {isOpen && (
        fullscreen ? (
          createPortal(menuContent, document.body)
        ) : (
          createPortal(menuContent, document.body)
        )
      )}
    </div>
  );
};

export default Menu;

