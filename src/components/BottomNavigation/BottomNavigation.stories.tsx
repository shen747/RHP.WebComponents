import type { Meta, StoryObj } from '@storybook/react';
import { BottomNavigation } from './BottomNavigation';
import { Button } from '../Button';
import { Icon } from '../Icon';

const meta: Meta<typeof BottomNavigation> = {
  title: 'Utilities/Bottom Navigation',
  component: BottomNavigation,
  parameters: { layout: 'fullscreen' },
};
export default meta;

export const Default: StoryObj<typeof BottomNavigation> = {
  args: {},
  render: (args) => (
    <BottomNavigation {...args}>
      <Button variant="ghost"><div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><Icon>a-icon-home</Icon><span>Home</span></div></Button>
      <Button variant="ghost"><div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><Icon>a-icon-analytics-bars</Icon><span>Analytics</span></div></Button>
      <Button variant="ghost"><div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><Icon>a-icon-star-filled</Icon><span>Favorites</span></div></Button>
    </BottomNavigation>
  ),
};

