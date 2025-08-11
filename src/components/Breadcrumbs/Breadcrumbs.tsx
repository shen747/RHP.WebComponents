import React from 'react';
import './breadcrumbs.scss';
import { Button } from '../Button';
import { Icon } from '../Icon';

export interface BreadcrumbItem {
    caption: string;
    href?: string;
    onClick?: () => void;
}

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLDivElement> {
    items: BreadcrumbItem[];
    moreCaption?: string;
    isMobile?: boolean; // allow override; otherwise uses media query
}

function useIsMobile(exp: string = '(max-width: 600px)') {
    const supportsMM = typeof window !== 'undefined' && typeof window.matchMedia === 'function';
    const [mobile, setMobile] = React.useState<boolean>(() => (supportsMM ? window.matchMedia(exp).matches : false));
    React.useEffect(() => {
        if (!supportsMM) return;
        const mql = window.matchMedia(exp);
        const handler = (e: MediaQueryListEvent) => setMobile(e.matches);
        if ('addEventListener' in mql) mql.addEventListener('change', handler as any);
        else (mql as any).addListener(handler);
        return () => {
            if ('removeEventListener' in mql) mql.removeEventListener('change', handler as any);
            else (mql as any).removeListener(handler);
        };
    }, [exp, supportsMM]);
    return mobile;
}

const BreadcrumbsItem: React.FC<{ item: BreadcrumbItem; current?: boolean }> = ({ item, current }) => {
    const { caption, href, onClick } = item;
    if (current || (!href && !onClick))
        return (
            <span className="rhp-breadcrumbs__item rhp-breadcrumbs__item--current" aria-current="page">
                {caption}
            </span>
        );
    if (href)
        return (
            <a className="rhp-breadcrumbs__item" href={href} onClick={onClick}>
                {caption}
            </a>
        );
    return (
        <button type="button" className="rhp-breadcrumbs__item rhp-breadcrumbs__button-link" onClick={onClick}>
            {caption}
        </button>
    );
};

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
    items,
    moreCaption = 'More',
    isMobile,
    className,
    style,
    ...rest
}) => {
    const autoMobile = useIsMobile();
    const mobile = isMobile ?? autoMobile;
    const classes = [mobile ? 'rhp-breadcrumbs--mobile' : 'rhp-breadcrumbs', className].filter(Boolean).join(' ');

    const first = items[0];
    const last = items[items.length - 1];
    const middle = items.slice(1, -1);

    const [open, setOpen] = React.useState(false);
    const btnRef = React.useRef<HTMLButtonElement | null>(null);
    const menuRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        function onDocClick(e: MouseEvent) {
            if (!open) return;
            const t = e.target as Node;
            if (menuRef.current && !menuRef.current.contains(t) && btnRef.current && !btnRef.current.contains(t)) {
                setOpen(false);
            }
        }
        function onKey(e: KeyboardEvent) {
            if (e.key === 'Escape') setOpen(false);
        }
        document.addEventListener('mousedown', onDocClick);
        document.addEventListener('keydown', onKey);
        return () => {
            document.removeEventListener('mousedown', onDocClick);
            document.removeEventListener('keydown', onKey);
        };
    }, [open]);

    if (!items?.length) return null;

    if (mobile) {
        return (
            <div className={classes} style={style as React.CSSProperties} {...rest}>
                <BreadcrumbsItem item={last} current />
            </div>
        );
    }

    return (
        <div className={classes} style={style as React.CSSProperties} {...rest}>
            {first && <BreadcrumbsItem item={first} />}
            {items.length === 3 && (
                <>
                    <Icon>a-icon-forward-slash</Icon>
                    <BreadcrumbsItem item={middle[0]} />
                </>
            )}
            {items.length > 3 && (
                <>
                    <Icon>a-icon-forward-slash</Icon>
                    <div className="rhp-breadcrumbs__more">
                        <Button
                            ref={btnRef as any}
                            className="rhp-breadcrumbs__button"
                            aria-haspopup="menu"
                            aria-expanded={open ? 'true' : 'false'}
                            variant="ghost"
                            onClick={() => setOpen(!open)}
                            tooltip={moreCaption}
                        >
                            ...
                        </Button>
                        {open && (
                            <div ref={menuRef} className="rhp-breadcrumbs__menu" role="menu">
                                {middle.map((mi) => (
                                    <div key={mi.caption} role="menuitem" className="rhp-breadcrumbs__menu-item">
                                        <BreadcrumbsItem item={mi} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </>
            )}
            {items.length > 1 && <Icon>a-icon-forward-slash</Icon>}
            <BreadcrumbsItem item={last} current />
        </div>
    );
};

export default Breadcrumbs;
