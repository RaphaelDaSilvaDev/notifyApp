import { ElementType } from "react";
import { NotificationBase } from "../../base";

interface NotificationIconProps {
  text: string;
  icon: ElementType;
}

export function NotificationIcon({ text, icon }: NotificationIconProps) {
  return (
    <NotificationBase.Root>
      <NotificationBase.Icon icon={icon} />
      <NotificationBase.Content text={text} />
    </NotificationBase.Root>
  );
}
