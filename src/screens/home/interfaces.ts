export interface NotificationInterface {
  id: string;
  text: string;
  type: "friend-request" | "update-content";
  time: string;
  hasAccept?: boolean | null | undefined;
  wasSeen: boolean;
}
