/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from "axios";
import { NotificationProps } from "../interfaces";

interface onMarkAllProps {
  notifications: NotificationProps[] | undefined;
}

export async function onMarkAll({ notifications }: onMarkAllProps) {
  if (notifications) {
    const allIds = notifications?.map((notifications) => notifications.id);
    const wasSeen = true;

    if (allIds) {
      console.log(allIds);

      for (const id of allIds) {
        console.log(id);
        await axios.patch(`${import.meta.env.VITE_API_URL}/notifications/${id}`, { wasSeen });
      }
    }
  }
}
