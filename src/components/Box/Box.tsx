import React from 'react';
import './box.scss';

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  // Positioning props
  absolute?: boolean;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;
  top?: number | string;
  
  // Layout props
  layout?: string;
  noGutters?: boolean;
  
  // Flex props
  flexAlign?: string;
  flexDirection?: string;
  flexJustify?: string;
  flexWrap?: string;
  
  // Measure props
  height?: number | string;
  maxHeight?: number | string;
  maxWidth?: number | string;
  minHeight?: number | string;
  minWidth?: number | string;
  width?: number | string;
  
  // Fill props
  fillAvailable?: boolean;
}

const convertToUnit = (value: string | number | null | undefined, unit = 'px'): string | undefined => {
  if (value == null || value === '') {
    return undefined;
  } else if (value && isNaN(+value)) {
    return String(value);
  } else {
    return `${Number(value)}${unit}`;
  }
};

export const Box: React.FC<BoxProps> = ({ 
  absolute, 
  bottom, 
  left, 
  right, 
  top,
  layout,
  noGutters,
  flexAlign,
  flexDirection,
  flexJustify,
  flexWrap,
  height,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  width,
  fillAvailable,
  className, 
  style, 
  children, 
  ...rest 
}) => {
  // Build styles object
  const styles: React.CSSProperties = { ...style } as React.CSSProperties;
  
  // Handle absolute positioning
  if (absolute) {
    styles.position = 'absolute';
    if (bottom !== undefined) styles.bottom = convertToUnit(bottom);
    if (left !== undefined) styles.left = convertToUnit(left);
    if (right !== undefined) styles.right = convertToUnit(right);
    if (top !== undefined) styles.top = convertToUnit(top);
  }
  
  // Handle measure props
  const measureHeight = convertToUnit(height);
  const measureMinHeight = convertToUnit(minHeight);
  const measureMinWidth = convertToUnit(minWidth);
  const measureMaxHeight = convertToUnit(maxHeight);
  const measureMaxWidth = convertToUnit(maxWidth);
  const measureWidth = convertToUnit(width);
  
  if (measureHeight) styles.height = measureHeight;
  if (measureMinHeight) styles.minHeight = measureMinHeight;
  if (measureMinWidth) styles.minWidth = measureMinWidth;
  if (measureMaxHeight) styles.maxHeight = measureMaxHeight;
  if (measureMaxWidth) styles.maxWidth = measureMaxWidth;
  if (measureWidth) styles.width = measureWidth;
  
  // Build classes array
  const classes = ['rhp-box'];
  
  // Handle layout classes
  if (layout) {
    const layoutType = layout.split('-')[0];
    switch (layoutType) {
      case 'grid':
        if (layout.includes('grid-fill')) {
          classes.push('rhp-grid-fill');
        } else {
          classes.push('rhp-grid');
        }
        break;
      case 'fill':
        classes.push('rhp-fill');
        break;
      case 'flex':
        classes.push('rhp-flex');
        if (flexAlign) classes.push(flexAlign);
        if (flexDirection) classes.push(flexDirection);
        if (flexJustify) classes.push(flexJustify);
        if (flexWrap) classes.push(flexWrap);
        break;
    }
  }
  
  // Handle fill available
  if (fillAvailable) {
    classes.push('rhp-fill-available');
  }
  
  // Add custom className
  if (className) {
    classes.push(className);
  }
  
  // Handle grid layout rendering
  if (layout && layout.startsWith('grid')) {
    return (
      <div className={classes.filter(Boolean).join(' ')} style={styles} {...rest}>
        <div className={`rhp-layout-grid ${noGutters ? 'rhp-no-gutters' : ''}`}>
          {children}
        </div>
      </div>
    );
  }
  
  return (
    <div className={classes.filter(Boolean).join(' ')} style={styles} {...rest}>
      {children}
    </div>
  );
};

export default Box;

