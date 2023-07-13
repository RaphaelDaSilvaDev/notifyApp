import { ReactNode } from "react";
import { ActionsContainer } from "./styles";

interface NotificationActionsProps {
  children: ReactNode;
}

export function NotificationActions({ children }: NotificationActionsProps) {
  return <ActionsContainer>{children}</ActionsContainer>;
}
