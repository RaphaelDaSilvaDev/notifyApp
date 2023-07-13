import React from "react";
import { OptionsContainer } from "./styles";

interface NavBarOptionsProps {
  children: React.ReactNode;
}

export function NavBarOptions({ children }: NavBarOptionsProps) {
  return <OptionsContainer>{children}</OptionsContainer>;
}
