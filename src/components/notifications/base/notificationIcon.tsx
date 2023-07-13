import { ElementType } from "react";

interface NotificationIconProps {
  icon: ElementType;
}

export function NotificationIcon({ icon: Icon }: NotificationIconProps) {
  return <Icon size={32} color="#f5f5f5" />;
}
