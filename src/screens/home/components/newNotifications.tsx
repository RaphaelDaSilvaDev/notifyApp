import { notificationsTypes } from "./notificationsTypes";

import { GetNotificationByWasSeen } from "../functions/getNotificationsByWasSeen";

import { DropDownItem } from "../styles";
import { NotificationInterface } from "../interfaces";

interface NewNotificationsProps {
  notifications: NotificationInterface[];
  setNotifications: React.Dispatch<React.SetStateAction<NotificationInterface[]>>;
}

export function NewNotifications({ notifications, setNotifications }: NewNotificationsProps) {
  return (
    <>
      {GetNotificationByWasSeen({ notifications: notifications }).length !== 0 && (
        <DropDownItem>
          <p>Recentes</p>
        </DropDownItem>
      )}
      {GetNotificationByWasSeen({ notifications }).map((notification) => {
        return notificationsTypes[notification.type]({
          notification,
          notifications,
          setNotifications,
        });
      })}
    </>
  );
}
