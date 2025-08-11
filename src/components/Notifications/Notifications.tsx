import React from 'react';
import './notifications.scss';
import { Notification, NotificationProps } from '../Notification/Notification';

export interface NotificationsProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: Array<NotificationProps & { id: string | number }>;
}

export const Notifications: React.FC<NotificationsProps> = ({ items, className, children, ...rest }) => {
  return (
    <div className={["rhp-notifications", className].filter(Boolean).join(" ")} {...rest}>
      {items?.map(({ id, ...n }) => (
        <Notification key={id} {...n} />
      ))}
      {children}
    </div>
  );
};

export default Notifications;

