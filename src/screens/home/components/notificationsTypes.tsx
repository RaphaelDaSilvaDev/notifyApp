import { Rocket } from "@phosphor-icons/react";

import { markAsSeen } from "../functions/markAsSeen";
import { markAcceptOrRejectFriend } from "../functions/markAcceptOrRejectFriend";

import { Notification } from "../../../components/notifications";

import { NotificationInterface } from "../interfaces";

interface notificationsTypesProps {
  notification: NotificationInterface;
  notifications: NotificationInterface[];
  setNotifications: React.Dispatch<React.SetStateAction<NotificationInterface[]>>;
}

export const notificationsTypes = {
  "update-content": ({
    notification,
    notifications,
    setNotifications,
  }: notificationsTypesProps): JSX.Element => (
    <div onClick={() => markAsSeen({ id: notification.id, notifications, setNotifications })}>
      <Notification.Simple text={notification.text} />
    </div>
  ),
  "friend-request": ({
    notification,
    notifications,
    setNotifications,
  }: notificationsTypesProps): JSX.Element => {
    return notification.hasAccept === null ? (
      <div onClick={() => markAsSeen({ id: notification.id, notifications, setNotifications })}>
        <Notification.Full
          icon={Rocket}
          text={notification.text}
          onAccept={() =>
            markAcceptOrRejectFriend({
              id: notification.id,
              notifications,
              setNotifications,
              type: "accept",
            })
          }
          onReject={() =>
            markAcceptOrRejectFriend({
              id: notification.id,
              notifications,
              setNotifications,
              type: "reject",
            })
          }
        />
      </div>
    ) : (
      <div onClick={() => markAsSeen({ id: notification.id, notifications, setNotifications })}>
        <Notification.Icon icon={Rocket} text={notification.text} />
      </div>
    );
  },
};
