import React from 'react';
import './calendar.scss';

export interface CalendarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Calendar: React.FC<CalendarProps> = ({ className, style, ...rest }) => {
  return <div className={["rhp-calendar", className].filter(Boolean).join(" ")} style={style as React.CSSProperties} {...rest} />;
};

export default Calendar;

