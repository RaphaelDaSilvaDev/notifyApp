import { NotificationProps } from "../interfaces";

interface GetNotificationByWasSeenProps {
  wasSeen?: boolean;
  notifications: NotificationProps[];
}

export function GetNotificationByWasSeen({
  notifications,
  wasSeen = false,
}: GetNotificationByWasSeenProps) {
  return notifications.filter((item) => item.wasSeen === wasSeen);
}
