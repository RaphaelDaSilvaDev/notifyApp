import { NotificationInterface } from "../interfaces";

interface markAcceptOrRejectFriendProps {
  id: string;
  type: "accept" | "reject";
  notifications: NotificationInterface[];
  setNotifications: React.Dispatch<React.SetStateAction<NotificationInterface[]>>;
}

export function markAcceptOrRejectFriend({
  id,
  notifications,
  setNotifications,
  type,
}: markAcceptOrRejectFriendProps) {
  const notificationsStorage = Array.from(notifications);
  const notificationIndex = notificationsStorage.findIndex((item) => item.id === id);
  const notification = notificationsStorage.find((item) => item.id === id);
  if (notification !== undefined) {
    notification.hasAccept = type === "accept" ? true : false;
    notificationsStorage.splice(notificationIndex, 1, notification);
    setNotifications(notificationsStorage);
  }
}
