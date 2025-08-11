import React from 'react';
import './draggable.scss';

export interface DraggableProps extends React.HTMLAttributes<HTMLDivElement> {
  onPositionChange?: (x: number, y: number) => void;
  defaultPosition?: { x: number; y: number };
}

export const Draggable: React.FC<DraggableProps> = ({ onPositionChange, defaultPosition, className, style, children, ...rest }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [pos, setPos] = React.useState(defaultPosition ?? { x: 0, y: 0 });

  React.useEffect(() => setPos(defaultPosition ?? { x: 0, y: 0 }), [defaultPosition?.x, defaultPosition?.y]);

  React.useEffect(() => { onPositionChange?.(pos.x, pos.y); }, [pos.x, pos.y]);

  React.useEffect(() => {
    const el = ref.current!;
    let last = { x: 0, y: 0 };
    let dragging = false;
    const onDown = (e: MouseEvent) => { dragging = true; last = { x: e.clientX, y: e.clientY }; e.preventDefault(); };
    const onMove = (e: MouseEvent) => {
      if (!dragging) return;
      const dx = e.clientX - last.x; const dy = e.clientY - last.y;
      last = { x: e.clientX, y: e.clientY };
      setPos(p => ({ x: p.x + dx, y: p.y + dy }));
    };
    const onUp = () => { dragging = false; };
    el.addEventListener('mousedown', onDown);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      el.removeEventListener('mousedown', onDown);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, []);

  return (
    <div ref={ref} className={["rhp-draggable", className].filter(Boolean).join(" ")} style={{ ...style as React.CSSProperties, transform: `translate(${pos.x}px, ${pos.y}px)` }} {...rest}>
      {children}
    </div>
  );
};

export default Draggable;

