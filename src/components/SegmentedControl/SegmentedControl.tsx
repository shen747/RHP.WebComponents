import React, { createContext, useContext, useMemo } from 'react';
import './segmented-control.scss';

export type SegmentedControlValue = string | number | boolean;

export interface SegmentedControlContextValue {
  value?: SegmentedControlValue | SegmentedControlValue[];
  multiple?: boolean;
  onToggle: (value: SegmentedControlValue, isSelected: boolean) => void;
}

const SegmentedControlContext = createContext<SegmentedControlContextValue | null>(null);

export const useSegmentedControl = () => {
  const context = useContext(SegmentedControlContext);
  if (!context) {
    throw new Error('useSegmentedControl must be used within a SegmentedControl');
  }
  return context;
};

export interface SegmentedControlProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: SegmentedControlValue | SegmentedControlValue[];
  multiple?: boolean;
  onChange?: (value: SegmentedControlValue | SegmentedControlValue[]) => void;
}

export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  value,
  multiple = false,
  onChange,
  children,
  className,
  ...rest
}) => {
  const contextValue = useMemo<SegmentedControlContextValue>(() => ({
    value,
    multiple,
    onToggle: (toggleValue: SegmentedControlValue, isSelected: boolean) => {
      if (!onChange) return;

      if (multiple) {
        const currentValues = Array.isArray(value) ? value : (value !== undefined ? [value] : []);
        
        if (isSelected) {
          // Add to selection
          const newValues = [...currentValues, toggleValue];
          onChange(newValues);
        } else {
          // Remove from selection
          const newValues = currentValues.filter(v => v !== toggleValue);
          onChange(newValues);
        }
      } else {
        // Single selection mode
        if (!isSelected && !Array.isArray(value)) {
          // Don't allow deselecting in single mode
          return;
        }
        onChange(toggleValue);
      }
    }
  }), [value, multiple, onChange]);

  return (
    <SegmentedControlContext.Provider value={contextValue}>
      <div 
        className={[
          'rhp-segmented-control',
          className
        ].filter(Boolean).join(' ')}
        {...rest}
      >
        {children}
      </div>
    </SegmentedControlContext.Provider>
  );
};

export default SegmentedControl;
