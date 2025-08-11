import React, { useState, useCallback, useMemo } from 'react';
import { Icon } from '../Icon';
import './image.scss';

export interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'width' | 'height'> {
  /** Alternative text for the image */
  alt?: string;
  /** Aspect ratio (width/height) of the image */
  aspectRatio?: number | string;
  /** If true, the image will cover its container */
  cover?: boolean;
  /** If true, the image will be loaded eagerly */
  eager?: boolean;
  /** Icon to display if the image fails to load */
  fallbackIcon?: string;
  /** Fallback image URL to use if the main image fails to load */
  fallbackImage?: string;
  /** CSS gradient to apply over the image */
  gradient?: string;
  /** Height of the image (in pixels or CSS units) */
  height?: number | string;
  /** Source for a low-quality placeholder image to show while loading */
  lazySrc?: string;
  /** Maximum height of the image (in pixels or CSS units) */
  maxHeight?: number | string;
  /** Maximum width of the image (in pixels or CSS units) */
  maxWidth?: number | string;
  /** Minimum height of the image (in pixels or CSS units) */
  minHeight?: number | string;
  /** Minimum width of the image (in pixels or CSS units) */
  minWidth?: number | string;
  /** Sizes attribute for responsive images */
  sizes?: string;
  /** Image source URL */
  src?: string;
  /** Srcset attribute for responsive images */
  srcSet?: string;
  /** Transition effect when loading the image */
  transition?: boolean | string;
  /** Width of the image (in pixels or CSS units) */
  width?: number | string;
  /** Callback when image fails to load */
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  /** Callback when image loads successfully */
  onLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export const Image: React.FC<ImageProps> = ({
  alt,
  aspectRatio,
  cover = false,
  eager = false,
  fallbackIcon = 'a-icon-image',
  fallbackImage,
  gradient,
  height,
  lazySrc,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  sizes,
  src,
  srcSet,
  transition = 'fade-transition',
  width,
  onError,
  onLoad,
  className,
  style,
  children,
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLazy, setShowLazy] = useState(!!lazySrc);

  const handleError = useCallback((event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setHasError(true);
    onError?.(event);
  }, [onError]);

  const handleLoad = useCallback((event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoaded(true);
    setShowLazy(false);
    onLoad?.(event);
  }, [onLoad]);

  const currentSrc = useMemo(() => {
    if (hasError && fallbackImage) {
      return fallbackImage;
    }
    return src;
  }, [hasError, fallbackImage, src]);

  const containerStyle = useMemo(() => {
    const styles: React.CSSProperties = {
      ...style,
      width: typeof width === 'number' ? `${width}px` : width,
      height: typeof height === 'number' ? `${height}px` : height,
      maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
      maxHeight: typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight,
      minWidth: typeof minWidth === 'number' ? `${minWidth}px` : minWidth,
      minHeight: typeof minHeight === 'number' ? `${minHeight}px` : minHeight,
    };

    if (aspectRatio) {
      styles.aspectRatio = aspectRatio.toString();
    }

    if (gradient) {
      styles.background = gradient;
    }

    return styles;
  }, [style, width, height, maxWidth, maxHeight, minWidth, minHeight, aspectRatio, gradient]);

  const imageClasses = [
    'rhp-image',
    cover && 'rhp-image--cover',
    isLoaded && 'rhp-image--loaded',
    transition && `rhp-image--${typeof transition === 'string' ? transition : 'fade'}`,
    className
  ].filter(Boolean).join(' ');

  // If there's an error and no fallback image, show fallback icon
  if (hasError && !fallbackImage) {
    return (
      <div 
        className={[imageClasses, 'rhp-image--error'].join(' ')}
        style={containerStyle}
        {...(rest as any)}
      >
        <div className="rhp-image__fallback">
          <Icon name={fallbackIcon} />
        </div>
        {children}
      </div>
    );
  }

  return (
    <div className={imageClasses} style={containerStyle} {...(rest as any)}>
      {/* Lazy loading placeholder */}
      {showLazy && lazySrc && (
        <img
          className="rhp-image__lazy"
          src={lazySrc}
          alt=""
          aria-hidden="true"
        />
      )}
      
      {/* Main image */}
      {currentSrc && (
        <img
          className="rhp-image__img"
          src={currentSrc}
          alt={alt}
          sizes={sizes}
          srcSet={srcSet}
          loading={eager ? 'eager' : 'lazy'}
          onError={handleError}
          onLoad={handleLoad}
        />
      )}
      
      {/* Gradient overlay */}
      {gradient && <div className="rhp-image__gradient" />}
      
      {children}
    </div>
  );
};

export default Image;
