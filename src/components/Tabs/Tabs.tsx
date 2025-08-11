import React, { useState, useCallback, useMemo } from 'react';
import './tabs.scss';
import { AlertBadge } from '../AlertBadge';

export interface TabItem { 
  id: string; 
  label: string;
  badge?: {
    type: 'info' | 'success' | 'warning' | 'error';
    count?: number;
  };
  disabled?: boolean;
}

export type TabAlignment = 'start' | 'center' | 'end';

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: TabItem[];
  value?: string | number;
  onChange?: (id: string | number) => void;
  alignTabs?: TabAlignment;
  mobile?: boolean;
  right?: boolean; // deprecated, use alignTabs="end"
  children?: React.ReactNode;
}

export interface TabProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: string | number;
  badge?: {
    type: 'info' | 'success' | 'warning' | 'error';
    count?: number;
  };
  disabled?: boolean;
  children: React.ReactNode;
}

export interface TabsWindowProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string | number;
  onChange?: (value: string | number) => void;
  children: React.ReactNode;
}

export interface TabsWindowItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string | number;
  fitToHeight?: boolean;
  children: React.ReactNode;
}

// Individual Tab component
export const Tab: React.FC<TabProps> = ({ 
  value, 
  badge, 
  disabled = false, 
  children, 
  className,
  ...rest 
}) => {
  return (
    <button
      className={[
        'rhp-tab',
        disabled && 'rhp-tab--disabled',
        className
      ].filter(Boolean).join(' ')}
      disabled={disabled}
      data-value={value}
      {...rest}
    >
      <AlertBadge 
        variant={badge?.type} 
        value={badge?.count}
        visible={!!badge}
      >
        <div className="rhp-tab-content">
          {children}
        </div>
      </AlertBadge>
    </button>
  );
};

// TabsWindow component for content panels
export const TabsWindow: React.FC<TabsWindowProps> = ({ 
  value, 
  onChange, 
  children, 
  className,
  ...rest 
}) => {
  return (
    <div 
      className={['rhp-tabs-window', className].filter(Boolean).join(' ')}
      data-value={value}
      {...rest}
    >
      {children}
    </div>
  );
};

// TabsWindowItem component for individual content panels
export const TabsWindowItem: React.FC<TabsWindowItemProps> = ({ 
  value, 
  fitToHeight = false, 
  children, 
  className,
  style,
  ...rest 
}) => {
  const computedStyle = useMemo(() => ({
    ...style,
    ...(fitToHeight && { height: '100%', display: 'flex', flexDirection: 'column' })
  }), [style, fitToHeight]);

  return (
    <div
      className={[
        'rhp-tabs-window-item',
        fitToHeight && 'rhp-tabs-window-item--fit-height',
        className
      ].filter(Boolean).join(' ')}
      data-value={value}
      style={computedStyle}
      {...rest}
    >
      {children}
    </div>
  );
};

// Main Tabs component
export const Tabs: React.FC<TabsProps> = ({ 
  items, 
  value, 
  onChange, 
  alignTabs = 'start',
  mobile = false,
  right = false, // deprecated
  className,
  children,
  ...rest 
}) => {
  const [internalValue, setInternalValue] = useState<string | number>(value ?? items?.[0]?.id ?? '');
  
  // Handle controlled vs uncontrolled state
  const currentValue = value !== undefined ? value : internalValue;
  
  // Handle deprecated right prop
  const computedAlignTabs = right ? 'end' : alignTabs;

  const handleTabClick = useCallback((tabValue: string | number) => {
    if (value === undefined) {
      setInternalValue(tabValue);
    }
    onChange?.(tabValue);
  }, [value, onChange]);

  // Find the active tab content
  const activeTabContent = useMemo(() => {
    if (!children) return null;
    
    const childrenArray = React.Children.toArray(children);
    const tabsWindow = childrenArray.find(child => 
      React.isValidElement(child) && child.type === TabsWindow
    );
    
    if (tabsWindow && React.isValidElement(tabsWindow)) {
      const windowChildren = React.Children.toArray(tabsWindow.props.children);
      return windowChildren.find(child => 
        React.isValidElement(child) && 
        child.type === TabsWindowItem && 
        child.props.value === currentValue
      );
    }
    
    return null;
  }, [children, currentValue]);

  return (
    <div 
      className={[
        'rhp-tabs',
        mobile && 'rhp-tabs--mobile',
        className
      ].filter(Boolean).join(' ')} 
      {...rest}
    >
      <div 
        className={[
          'rhp-tabs__list',
          `rhp-tabs__list--align-${computedAlignTabs}`
        ].join(' ')}
        role="tablist"
      >
        {items?.map((item) => (
          <button
            key={item.id}
            className={[
              'rhp-tab',
              currentValue === item.id && 'rhp-tab--active',
              item.disabled && 'rhp-tab--disabled'
            ].filter(Boolean).join(' ')}
            role="tab"
            aria-selected={currentValue === item.id}
            aria-disabled={item.disabled}
            onClick={() => !item.disabled && handleTabClick(item.id)}
            disabled={item.disabled}
          >
            <AlertBadge 
              variant={item.badge?.type} 
              value={item.badge?.count}
              visible={!!item.badge}
            >
              <div className="rhp-tab-content">
                {item.label}
              </div>
            </AlertBadge>
          </button>
        ))}
        {!items && children && (
          // Extract Tab components from children
          React.Children.map(children, child => {
            if (React.isValidElement(child) && child.type === Tab) {
              const isActive = child.props.value === currentValue;
              return React.cloneElement(child, {
                key: child.props.value,
                className: [
                  child.props.className,
                  isActive && 'rhp-tab--active'
                ].filter(Boolean).join(' '),
                'aria-selected': isActive,
                onClick: () => handleTabClick(child.props.value),
                role: 'tab'
              });
            }
            return null;
          })
        )}
      </div>
      
      {activeTabContent && (
        <div className="rhp-tabs__panel" role="tabpanel">
          {activeTabContent}
        </div>
      )}
    </div>
  );
};

export default Tabs;

