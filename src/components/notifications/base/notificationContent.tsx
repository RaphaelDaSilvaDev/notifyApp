import { TextContent } from "./styles";

interface NotificationContentProps {
  text: string;
}

export function NotificationContent({ text }: NotificationContentProps) {
  return (
    <TextContent>
      <p>{text}</p>
      <span>há 3 minutos</span>
    </TextContent>
  );
}
