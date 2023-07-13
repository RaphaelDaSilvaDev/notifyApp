import { NotificationInterface } from "../interfaces";

interface GetNotificationByWasSeenProps {
  wasSeen?: boolean;
  notifications: NotificationInterface[];
}

export function GetNotificationByWasSeen({
  notifications,
  wasSeen = false,
}: GetNotificationByWasSeenProps) {
  return notifications.filter((item) => item.wasSeen === wasSeen);
}
