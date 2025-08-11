import React, { useMemo } from 'react';
import { Panel } from '../Panel';
import './recent.scss';

export interface RecentAction { id: string; caption: string; href?: string; onClick?: () => void }
export interface RecentItem { id: string; caption: string; subtitle?: string; icon?: string; iconColor?: string; favorite?: boolean; actions?: RecentAction[] }

export interface RecentProps extends React.HTMLAttributes<HTMLDivElement> {
  favorites?: RecentItem[];
  recents?: RecentItem[];
  favoritesTitle?: string;
  recentsTitle?: string;
  showFavorites?: boolean;
  showRecents?: boolean;
  maxEntries?: number | string;
}

export const Recent: React.FC<RecentProps> = ({ favorites = [], recents = [], favoritesTitle = 'Favorites', recentsTitle = 'Recents', showFavorites = true, showRecents = true, maxEntries, className }) => {
  const max = useMemo(() => (maxEntries !== undefined ? Number(maxEntries) : undefined), [maxEntries]);
  const favs = useMemo(() => (max ? favorites.slice(0, max) : favorites), [favorites, max]);
  const recs = useMemo(() => (max ? recents.slice(0, max) : recents), [recents, max]);

  return (
    <Panel className={["rhp-recent", className].filter(Boolean).join(" ")}> 
      {showFavorites && favs.length > 0 && (
        <>
          <div className="rhp-panel__header">{favoritesTitle}</div>
          <ul className="rhp-recent__list">
            {favs.map((i) => (
              <li key={i.id} className="rhp-recent__item">{i.caption}</li>
            ))}
          </ul>
        </>
      )}
      {showRecents && recs.length > 0 && (
        <>
          <div className="rhp-panel__header">{recentsTitle}</div>
          <ul className="rhp-recent__list">
            {recs.map((i) => (
              <li key={i.id} className="rhp-recent__item">{i.caption}</li>
            ))}
          </ul>
        </>
      )}
    </Panel>
  );
};

export default Recent;

