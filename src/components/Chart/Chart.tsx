import React from 'react';
import './chart.scss';

export type ChartType = 'bar' | 'bubble' | 'line' | 'scatter' | 'polarArea' | 'pie';

export interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: ChartType;
  loading?: boolean;
}

export const Chart: React.FC<ChartProps> = ({ type = 'bar', loading, className, style, ...rest }) => {
  return (
    <div className={["rhp-chart", className].filter(Boolean).join(" ")} style={style as React.CSSProperties} {...rest}>
      {loading && <div className="rhp-chart__loading" />}
      <canvas />
    </div>
  );
};

export default Chart;

