import { GetNotificationByWasSeen } from "../functions/getNotificationsByWasSeen";

import { notificationsTypes } from "./notificationsTypes";

import { DropDownItem } from "../styles";
import { OldNotificationsProps } from "../interfaces";

export function OldNotifications({
  notifications,
  markAcceptOrRejectFriendFn,
}: OldNotificationsProps) {
  return (
    <>
      {notifications && GetNotificationByWasSeen({ notifications, wasSeen: true }).length !== 0 && (
        <DropDownItem>
          <p>Antigas</p>
        </DropDownItem>
      )}
      {notifications &&
        GetNotificationByWasSeen({ notifications, wasSeen: true }).map((notification) => {
          return notificationsTypes[notification.type]({
            markAcceptOrRejectFriendFn,
            notification,
            notifications,
          });
        })}
    </>
  );
}
