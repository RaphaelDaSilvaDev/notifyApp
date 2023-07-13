import { ElementType } from "react";
import { Check, X } from "@phosphor-icons/react";
import { NotificationBase } from "../../base";

interface NotificationFullProps {
  text: string;
  icon: ElementType;
  onAccept: () => void;
  onReject: () => void;
}

export function NotificationFull({ text, icon, onAccept, onReject }: NotificationFullProps) {
  return (
    <NotificationBase.Root>
      <NotificationBase.Icon icon={icon} />
      <NotificationBase.Content text={text} />
      <NotificationBase.Actions>
        <NotificationBase.Action
          icon={X}
          basicColor="#862507"
          hoverColor="#862507"
          onClick={onReject}
        />
        <NotificationBase.Action
          icon={Check}
          basicColor="#078607"
          hoverColor="#078607"
          onClick={onAccept}
        />
      </NotificationBase.Actions>
    </NotificationBase.Root>
  );
}
