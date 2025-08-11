import React from 'react';
import './navigation-drawer.scss';
import { Drawer, DrawerProps } from '../Drawer';

export interface NavigationDrawerProps extends DrawerProps {}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = (props) => {
  return <Drawer side="left" {...props} />;
};

export default NavigationDrawer;

