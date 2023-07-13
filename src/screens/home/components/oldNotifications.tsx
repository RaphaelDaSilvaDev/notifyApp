import { GetNotificationByWasSeen } from "../functions/getNotificationsByWasSeen";

import { notificationsTypes } from "./notificationsTypes";

import { DropDownItem } from "../styles";
import { NotificationInterface } from "../interfaces";

interface OldNotificationsProps {
  notifications: NotificationInterface[];
  setNotifications: React.Dispatch<React.SetStateAction<NotificationInterface[]>>;
}

export function OldNotifications({ notifications, setNotifications }: OldNotificationsProps) {
  return (
    <>
      {GetNotificationByWasSeen({ notifications, wasSeen: true }).length !== 0 && (
        <DropDownItem>
          <p>Antigas</p>
        </DropDownItem>
      )}
      {GetNotificationByWasSeen({ notifications, wasSeen: true }).map((notification) => {
        return notificationsTypes[notification.type]({
          notification,
          notifications,
          setNotifications,
        });
      })}
    </>
  );
}
