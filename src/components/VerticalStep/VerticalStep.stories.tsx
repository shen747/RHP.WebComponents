import type { Meta, StoryObj } from '@storybook/react';
import { VerticalStep } from './VerticalStep';
import { Panel } from '../Panel';

const meta: Meta<typeof VerticalStep> = {
  title: 'Navigation/VerticalStep',
  component: VerticalStep,
};
export default meta;

export const Basic: StoryObj<typeof VerticalStep> = {
  render: () => (
    <Panel>
      <div style={{ display: 'flex', alignItems: 'stretch' }}>
        <VerticalStep stepType="first" markerSentiment="primary" bottomConnectorLineStyle="solid" bottomPadding={20} />
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div>Terminal</div>
          <div>Sydney Port (Port Botany)</div>
          <div>09:00 to 17:00</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'stretch' }}>
        <VerticalStep stepType="middle" markerSentiment="success" bottomConnectorLineStyle="solid" bottomPadding={20} />
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div>Another location</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'stretch' }}>
        <VerticalStep stepType="last" markerSentiment="warning" />
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div>Destination</div>
        </div>
      </div>
    </Panel>
  ),
};

