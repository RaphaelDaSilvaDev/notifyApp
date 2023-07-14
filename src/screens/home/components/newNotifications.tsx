import { notificationsTypes } from "./notificationsTypes";

import { GetNotificationByWasSeen } from "../functions/getNotificationsByWasSeen";

import { DropDownItem } from "../styles";
import { NewNotificationsProps } from "../interfaces";

export function NewNotifications({
  notifications,
  markAcceptOrRejectFriendFn,
  markAsSeenFn,
}: NewNotificationsProps) {
  return (
    <>
      {notifications && GetNotificationByWasSeen({ notifications: notifications }).length !== 0 && (
        <DropDownItem>
          <p>Recentes</p>
        </DropDownItem>
      )}
      {notifications &&
        GetNotificationByWasSeen({ notifications }).map((notification) => {
          return notificationsTypes[notification.type]({
            markAcceptOrRejectFriendFn,
            markAsSeenFn,
            notification,
            notifications,
          });
        })}
    </>
  );
}
