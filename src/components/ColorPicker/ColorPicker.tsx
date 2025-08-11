import React, { useState, useCallback, useMemo } from 'react';
import './color-picker.scss';

export type ColorMode = 'hexa' | 'rgba' | 'hsla' | 'hex' | 'rgb' | 'hsl';

export interface ColorPickerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: string;
  onChange?: (value: string) => void;
  canvasHeight?: number | string;
  dotSize?: number | string;
  hideCanvas?: boolean;
  // New props from WtgColorPicker
  disabled?: boolean;
  elevation?: number | string;
  hideInputs?: boolean;
  hideSliders?: boolean;
  mode?: ColorMode;
  modes?: ColorMode[];
  showSwatches?: boolean;
  swatches?: Array<Array<string | number | Record<string, number>>>;
  swatchMaxHeight?: number | string;
  tile?: boolean;
  width?: number | string;
  border?: boolean | number | string;
  position?: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky';
  onModeChange?: (mode: ColorMode) => void;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({ 
  value = '#000000', 
  onChange,
  canvasHeight = 150,
  dotSize = 10,
  hideCanvas = false,
  disabled = false,
  elevation,
  hideInputs = false,
  hideSliders = false,
  mode = 'hexa',
  modes = ['hexa'],
  showSwatches = false,
  swatches,
  swatchMaxHeight = 150,
  tile = false,
  width = 300,
  border = false,
  position,
  onModeChange,
  className, 
  style, 
  ...rest 
}) => {
  const [currentMode, setCurrentMode] = useState<ColorMode>(mode);
  const [isOpen, setIsOpen] = useState(false);

  const handleModeChange = useCallback((newMode: ColorMode) => {
    setCurrentMode(newMode);
    onModeChange?.(newMode);
  }, [onModeChange]);

  const handleColorChange = useCallback((newColor: string) => {
    onChange?.(newColor);
  }, [onChange]);

  const containerStyle = useMemo(() => ({
    width: typeof width === 'number' ? `${width}px` : width,
    position,
    ...(elevation && { 
      boxShadow: `0 ${typeof elevation === 'number' ? elevation : 0}px ${typeof elevation === 'number' ? elevation * 2 : 0}px rgba(0,0,0,0.1)` 
    }),
    ...(border && { 
      border: typeof border === 'number' ? `${border}px solid var(--s-neutral-border-weak-default)` : border 
    }),
    ...style
  } as React.CSSProperties), [width, position, elevation, border, style]);

  const canvasStyle = useMemo(() => ({
    height: typeof canvasHeight === 'number' ? `${canvasHeight}px` : canvasHeight,
    borderRadius: tile ? '0' : 'var(--s-radius-s)'
  } as React.CSSProperties), [canvasHeight, tile]);

  const swatchContainerStyle = useMemo(() => ({
    maxHeight: typeof swatchMaxHeight === 'number' ? `${swatchMaxHeight}px` : swatchMaxHeight
  } as React.CSSProperties), [swatchMaxHeight]);

  const classes = [
    'rhp-color-picker',
    disabled && 'rhp-color-picker--disabled',
    tile && 'rhp-color-picker--tile',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} style={containerStyle} {...rest}>
      {/* Mode Selector */}
      {modes.length > 1 && (
        <div className="rhp-color-picker__mode-selector">
          <select 
            value={currentMode} 
            onChange={(e) => handleModeChange(e.target.value as ColorMode)}
            disabled={disabled}
          >
            {modes.map(mode => (
              <option key={mode} value={mode}>{mode.toUpperCase()}</option>
            ))}
          </select>
        </div>
      )}

      {/* Canvas */}
      {!hideCanvas && (
        <div className="rhp-color-picker__canvas" style={canvasStyle}>
          <div 
            className="rhp-color-picker__canvas-bg"
            style={{ 
              background: `linear-gradient(to right, transparent, ${value}), linear-gradient(to top, black, transparent)` 
            }}
          />
          <div 
            className="rhp-color-picker__dot"
            style={{ 
              width: typeof dotSize === 'number' ? `${dotSize}px` : dotSize,
              height: typeof dotSize === 'number' ? `${dotSize}px` : dotSize,
              backgroundColor: value
            }}
          />
        </div>
      )}

      {/* Sliders */}
      {!hideSliders && (
        <div className="rhp-color-picker__sliders">
          <div className="rhp-color-picker__slider">
            <label>Hue</label>
            <input 
              type="range" 
              min="0" 
              max="360" 
              value="0" 
              disabled={disabled}
              onChange={(e) => {
                // Convert HSL to hex and update
                const hue = parseInt(e.target.value);
                const newColor = `hsl(${hue}, 50%, 50%)`;
                handleColorChange(newColor);
              }}
            />
          </div>
          <div className="rhp-color-picker__slider">
            <label>Saturation</label>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value="50" 
              disabled={disabled}
              onChange={(e) => {
                // Update saturation
                const sat = parseInt(e.target.value);
                const newColor = `hsl(0, ${sat}%, 50%)`;
                handleColorChange(newColor);
              }}
            />
          </div>
          <div className="rhp-color-picker__slider">
            <label>Lightness</label>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value="50" 
              disabled={disabled}
              onChange={(e) => {
                // Update lightness
                const light = parseInt(e.target.value);
                const newColor = `hsl(0, 50%, ${light}%)`;
                handleColorChange(newColor);
              }}
            />
          </div>
        </div>
      )}

      {/* Inputs */}
      {!hideInputs && (
        <div className="rhp-color-picker__inputs">
          <div className="rhp-color-picker__input-group">
            <label>Color</label>
            <input 
              type="color" 
              value={value} 
              onChange={(e) => handleColorChange(e.target.value)}
              disabled={disabled}
              aria-label="Color picker"
            />
          </div>
          <div className="rhp-color-picker__input-group">
            <label>Hex</label>
            <input 
              type="text" 
              value={value} 
              onChange={(e) => handleColorChange(e.target.value)}
              disabled={disabled}
              placeholder="#000000"
              aria-label="Hex color value"
            />
          </div>
          {currentMode === 'rgba' && (
            <>
              <div className="rhp-color-picker__input-group">
                <label>R</label>
                <input 
                  type="number" 
                  min="0" 
                  max="255" 
                  value="0" 
                  disabled={disabled}
                  aria-label="Red value"
                />
              </div>
              <div className="rhp-color-picker__input-group">
                <label>G</label>
                <input 
                  type="number" 
                  min="0" 
                  max="255" 
                  value="0" 
                  disabled={disabled}
                  aria-label="Green value"
                />
              </div>
              <div className="rhp-color-picker__input-group">
                <label>B</label>
                <input 
                  type="number" 
                  min="0" 
                  max="255" 
                  value="0" 
                  disabled={disabled}
                  aria-label="Blue value"
                />
              </div>
              <div className="rhp-color-picker__input-group">
                <label>A</label>
                <input 
                  type="number" 
                  min="0" 
                  max="1" 
                  step="0.1" 
                  value="1" 
                  disabled={disabled}
                  aria-label="Alpha value"
                />
              </div>
            </>
          )}
        </div>
      )}

      {/* Swatches */}
      {showSwatches && swatches && (
        <div className="rhp-color-picker__swatches" style={swatchContainerStyle}>
          <div className="rhp-color-picker__swatches-title">Swatches</div>
          <div className="rhp-color-picker__swatches-grid">
            {swatches.flat().map((swatch, index) => {
              const color = typeof swatch === 'string' ? swatch : '#000000';
              return (
                <button
                  key={index}
                  className="rhp-color-picker__swatch"
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorChange(color)}
                  disabled={disabled}
                  aria-label={`Select color ${color}`}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;

