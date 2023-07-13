import { ButtonHTMLAttributes, ElementType } from "react";
import { ActionButton } from "./styles";
interface NotificationActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType;
  basicColor: string;
  hoverColor: string;
}

export function NotificationAction({
  icon: Icon,
  basicColor,
  hoverColor,
  ...rest
}: NotificationActionProps) {
  return (
    <ActionButton {...rest} basicColor={basicColor} hoverColor={hoverColor}>
      <Icon size={24} color="#f5f5f5" />
    </ActionButton>
  );
}
