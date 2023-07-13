import { NotificationInterface } from "../interfaces";

interface onMarkAllProps {
  notifications: NotificationInterface[];
  setNotifications: React.Dispatch<React.SetStateAction<NotificationInterface[]>>;
}

export function onMarkAll({ notifications, setNotifications }: onMarkAllProps) {
  const notificationsStorage = Array.from(notifications);
  notificationsStorage.map((item) => (item.wasSeen = true));
  setNotifications(notificationsStorage);
}
