import { ReactNode } from "react";
import { NotificationRootContainer } from "./styles";

interface NotificationRootProps {
  children: ReactNode;
}

export function NotificationRoot({ children }: NotificationRootProps) {
  return <NotificationRootContainer>{children}</NotificationRootContainer>;
}
