import { NotificationInterface } from "../interfaces";

interface markAsSeenProps {
  id: string;
  notifications: NotificationInterface[];
  setNotifications: React.Dispatch<React.SetStateAction<NotificationInterface[]>>;
}

export function markAsSeen({ id, notifications, setNotifications }: markAsSeenProps) {
  const notificationsStorage = Array.from(notifications);
  const notificationIndex = notificationsStorage.findIndex((item) => item.id === id);
  const notification = notificationsStorage.find((item) => item.id === id);
  if (notification !== undefined) {
    notification.wasSeen = true;
    notificationsStorage.splice(notificationIndex, 1, notification);
    setNotifications(notificationsStorage);
  }
}
