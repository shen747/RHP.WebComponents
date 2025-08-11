import React from 'react';
import './skeleton-loader.scss';

export interface SkeletonLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  loading?: boolean;
  height?: number | string;
  width?: number | string;
  type?: string;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ loading = true, height, width, className, style, children, ...rest }) => {
  if (!loading) return <>{children}</> as any;
  const styles: React.CSSProperties = {
    height: typeof height === 'number' ? `${height}px` : height,
    width: typeof width === 'number' ? `${width}px` : width,
    ...style,
  };
  return <div className={["rhp-skeleton", className].filter(Boolean).join(" ")} style={styles} {...rest} />;
};

export default SkeletonLoader;

