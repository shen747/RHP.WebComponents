import React from 'react';
import './vertical-step.scss';
import { Icon } from '../Icon';

export type StepType = 'first' | 'middle' | 'last' | 'single';
export type LineStyle = 'solid' | 'dashed' | 'dotted';
export type Sentiment = 'primary' | 'neutral' | 'success' | 'warning' | 'critical';

export interface VerticalStepProps extends React.HTMLAttributes<HTMLDivElement> {
  stepType?: StepType;
  icon?: string;
  markerSentiment?: Sentiment;
  bottomConnectorSentiment?: Sentiment;
  bottomConnectorLineStyle?: LineStyle;
  bottomPadding?: number;
}

export const VerticalStep: React.FC<VerticalStepProps> = ({ stepType = 'middle', icon = 'a-icon-dot', markerSentiment = 'primary', bottomConnectorSentiment = 'neutral', bottomConnectorLineStyle = 'solid', bottomPadding = 0, className, children, ...rest }) => {
  const classes = ['rhp-vertical-step', `rhp-vertical-step--${stepType}`, className].filter(Boolean).join(' ');
  return (
    <div className={classes} {...rest}>
      <div className={["rhp-vertical-step__marker", `is-${markerSentiment}`].join(' ')}>
        <Icon>{icon}</Icon>
      </div>
      <div className="rhp-vertical-step__content" style={{ paddingBottom: bottomPadding }}>{children}</div>
      {stepType !== 'last' && stepType !== 'single' && (
        <div className={["rhp-vertical-step__connector", `is-${bottomConnectorSentiment}`, `is-${bottomConnectorLineStyle}`].join(' ')} />
      )}
    </div>
  );
};

export default VerticalStep;

