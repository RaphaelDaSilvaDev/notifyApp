import { ReactNode } from "react";
import { NotificationRootHeader } from "./styles";

interface DropDownHeaderProps {
  children: ReactNode;
}

export function DropDownHeader({ children }: DropDownHeaderProps) {
  return <NotificationRootHeader>{children}</NotificationRootHeader>;
}
