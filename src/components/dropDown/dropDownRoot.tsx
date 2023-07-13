import { ReactNode } from "react";
import { DropDownContainer } from "./styles";

interface DropDownRootProps {
  children: ReactNode;
}

export function DropDownRoot({ children }: DropDownRootProps) {
  return <DropDownContainer>{children}</DropDownContainer>;
}
