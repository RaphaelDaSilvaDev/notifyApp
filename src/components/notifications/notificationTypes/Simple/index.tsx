import { NotificationBase } from "../../base";

interface NotificationSimpleProps {
  text: string;
}

export function NotificationSimple({ text }: NotificationSimpleProps) {
  return (
    <NotificationBase.Root>
      <NotificationBase.Content text={text} />
    </NotificationBase.Root>
  );
}
