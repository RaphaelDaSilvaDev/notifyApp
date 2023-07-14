import { Rocket } from "@phosphor-icons/react";

import { Notification } from "../../../components/notifications";

import { MarkAcceptOrRejectFriendProps, MarkAsSeenProps, NotificationProps } from "../interfaces";

interface NotificationsTypesProps {
  notification: NotificationProps;
  notifications: NotificationProps[];
}

interface UpdateContentProps extends NotificationsTypesProps {
  markAsSeenFn?: ({ id }: MarkAsSeenProps) => void;
}

interface FrindRequestProps extends NotificationsTypesProps {
  markAcceptOrRejectFriendFn: ({ id, type }: MarkAcceptOrRejectFriendProps) => void;
}

export const notificationsTypes = {
  "update-content": ({ notification, markAsSeenFn }: UpdateContentProps): JSX.Element => (
    <div
      onClick={() => !notification.wasSeen && markAsSeenFn && markAsSeenFn({ id: notification.id })}
    >
      <Notification.Simple text={notification.text} />
    </div>
  ),
  "friend-request": ({
    notification,
    markAcceptOrRejectFriendFn,
  }: FrindRequestProps): JSX.Element => {
    return notification.hasAccept === null ? (
      <div>
        <Notification.Full
          icon={Rocket}
          text={notification.text}
          onAccept={() => markAcceptOrRejectFriendFn({ id: notification.id, type: "accept" })}
          onReject={() => markAcceptOrRejectFriendFn({ id: notification.id, type: "reject" })}
        />
      </div>
    ) : (
      <div>
        <Notification.Icon icon={Rocket} text={notification.text} />
      </div>
    );
  },
};
