export interface NotificationProps {
  id: string;
  text: string;
  type: "friend-request" | "update-content";
  time: string;
  hasAccept?: boolean | null | undefined;
  wasSeen: boolean;
}

export interface MarkAcceptOrRejectFriendProps {
  id: string;
  type: "accept" | "reject";
}

export interface MarkAsSeenProps {
  id: string;
}

export interface OldNotificationsProps {
  notifications: NotificationProps[] | undefined;
  markAcceptOrRejectFriendFn: ({ id, type }: MarkAcceptOrRejectFriendProps) => void;
}

export interface NewNotificationsProps extends OldNotificationsProps {
  markAsSeenFn: ({ id }: MarkAsSeenProps) => void;
}
