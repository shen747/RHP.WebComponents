import React, { useState, useCallback } from 'react';

export interface HoverRenderProps {
  /** Whether the element is currently being hovered */
  isHovered: boolean;
  /** Props to spread on the hoverable element */
  hoverProps: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };
}

export interface HoverProps {
  /** Render prop function that receives hover state and props */
  children: (props: HoverRenderProps) => React.ReactNode;
  /** Whether hover is disabled */
  disabled?: boolean;
  /** Callback when hover state changes */
  onHoverChange?: (isHovered: boolean) => void;
  /** Initial hover state */
  defaultHovered?: boolean;
}

export const Hover: React.FC<HoverProps> = ({
  children,
  disabled = false,
  onHoverChange,
  defaultHovered = false
}) => {
  const [isHovered, setIsHovered] = useState(defaultHovered);

  const handleMouseEnter = useCallback(() => {
    if (disabled) return;
    setIsHovered(true);
    onHoverChange?.(true);
  }, [disabled, onHoverChange]);

  const handleMouseLeave = useCallback(() => {
    if (disabled) return;
    setIsHovered(false);
    onHoverChange?.(false);
  }, [disabled, onHoverChange]);

  const hoverProps = {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  };

  return (
    <>
      {children({
        isHovered: disabled ? false : isHovered,
        hoverProps
      })}
    </>
  );
};

export default Hover;
