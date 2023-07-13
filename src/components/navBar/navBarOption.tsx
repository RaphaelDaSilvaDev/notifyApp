import { ButtonHTMLAttributes, ElementType } from "react";
import { ButtonContainer, ButtonMark } from "./styles";

interface NavBarOptionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType;
  mark?: boolean;
}

export function NavBarOption({ icon: Icon, mark = false, ...rest }: NavBarOptionProps) {
  return (
    <ButtonContainer {...rest}>
      {mark && <ButtonMark />}
      <Icon size={24} color="#f4f4f4" />
    </ButtonContainer>
  );
}
