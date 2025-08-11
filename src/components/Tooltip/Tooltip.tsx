import React, { useMemo, useState } from 'react';
import {
    useFloating,
    offset,
    flip,
    shift,
    autoUpdate,
    useHover,
    useClick,
    useFocus,
    useDismiss,
    useRole,
    useInteractions,
    FloatingPortal,
    Placement,
} from '@floating-ui/react';

export interface TooltipProps {
    content?: React.ReactNode;
    placement?: Placement;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    disabled?: boolean;
    openOnHover?: boolean;
    openOnClick?: boolean;
    openDelay?: number;
    closeDelay?: number;
    className?: string;
    contentClassName?: string;
    maxWidth?: number | string;
    children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({
    content,
    placement = 'bottom',
    open,
    defaultOpen,
    onOpenChange,
    disabled,
    openOnHover = true,
    openOnClick = false,
    openDelay = 100,
    closeDelay = 100,
    className,
    contentClassName,
    maxWidth,
    children,
}) => {
    const [uncontrolledOpen, setUncontrolledOpen] = useState<boolean>(defaultOpen ?? false);
    const actualOpen = open ?? uncontrolledOpen;
    const setOpen = (v: boolean) => (onOpenChange ? onOpenChange(v) : setUncontrolledOpen(v));

    const { refs, floatingStyles, context } = useFloating({
        placement,
        open: !disabled && actualOpen,
        onOpenChange: (v) => !disabled && setOpen(v),
        middleware: [offset(6), flip(), shift({ padding: 8 })],
        whileElementsMounted: autoUpdate,
    });

    const hover = useHover(context, {
        enabled: openOnHover && !disabled,
        restMs: openDelay,
        delay: { open: openDelay, close: closeDelay } as any,
    });
    const click = useClick(context, { enabled: openOnClick && !disabled });
    const focus = useFocus(context, { enabled: !disabled });
    const dismiss = useDismiss(context);
    const role = useRole(context, { role: 'tooltip' });
    const { getReferenceProps, getFloatingProps } = useInteractions([hover, click, focus, dismiss, role]);

    const tooltipClassName = useMemo(
        () => ['rhp-tooltip', contentClassName].filter(Boolean).join(' '),
        [contentClassName]
    );

    return (
        <span
            className={['rhp-tooltip__activator', className].filter(Boolean).join(' ')}
            ref={refs.setReference}
            {...getReferenceProps()}
        >
            {children}
            {!disabled && actualOpen && (
                <FloatingPortal>
                    <div
                        ref={refs.setFloating}
                        style={{ ...floatingStyles, maxWidth }}
                        className={tooltipClassName}
                        {...getFloatingProps()}
                    >
                        {content}
                    </div>
                </FloatingPortal>
            )}
        </span>
    );
};

export default Tooltip;
