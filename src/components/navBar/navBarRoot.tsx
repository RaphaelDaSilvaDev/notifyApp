import React from "react";
import { RootContainer } from "./styles";

interface NavBarRootProps {
  children: React.ReactNode;
}

export function NavBarRoot({ children }: NavBarRootProps) {
  return <RootContainer>{children}</RootContainer>;
}
