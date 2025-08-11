import React from 'react';
import { Button, ButtonProps } from '../Button';
import { useSegmentedControl, SegmentedControlValue } from './SegmentedControl';

export interface SegmentedControlButtonProps extends Omit<ButtonProps, 'onClick' | 'active' | 'value'> {
  value: SegmentedControlValue;
  onClick?: (value: SegmentedControlValue) => void;
}

export const SegmentedControlButton: React.FC<SegmentedControlButtonProps> = ({
  value,
  onClick,
  className,
  ...rest
}) => {
  const { value: selectedValue, multiple, onToggle } = useSegmentedControl();

  const isSelected = React.useMemo(() => {
    if (Array.isArray(selectedValue)) {
      return selectedValue.includes(value);
    }
    return selectedValue === value;
  }, [selectedValue, value]);

  const handleClick = React.useCallback(() => {
    onClick?.(value);
    onToggle(value, !isSelected);
  }, [onClick, onToggle, value, isSelected]);

  return (
    <Button
      {...rest}
      className={[
        'rhp-segmented-control__button',
        isSelected && 'rhp-button--selected',
        className
      ].filter(Boolean).join(' ')}
      active={isSelected}
      onClick={handleClick}
    />
  );
};

export default SegmentedControlButton;
