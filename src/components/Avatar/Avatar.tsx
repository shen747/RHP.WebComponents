import React from 'react';
import './avatar.scss';

export type AvatarSize = 'xs' | 's' | 'm' | 'l' | 'xl';
export type AvatarShape = 'circle' | 'square';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  name?: string; // used for initials fallback
  size?: AvatarSize;
  shape?: AvatarShape;
}

function getInitials(name?: string) {
  if (!name) return '';
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? '';
  const second = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return (first + second).toUpperCase();
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, name, size = 'm', shape = 'circle', className, style, ...rest }) => {
  const classes = ['rhp-avatar', `rhp-avatar--${size}`, `rhp-avatar--${shape}`, className].filter(Boolean).join(' ');

  return (
    <div className={classes} style={style as React.CSSProperties} {...rest}>
      {src ? (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img className="rhp-avatar__img" src={src} alt={alt ?? name ?? ''} />
      ) : (
        <span className="rhp-avatar__fallback" aria-hidden>
          {getInitials(name)}
        </span>
      )}
    </div>
  );
};

export default Avatar;

