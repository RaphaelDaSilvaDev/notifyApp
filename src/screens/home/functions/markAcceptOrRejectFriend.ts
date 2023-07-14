/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import axios from "axios";

interface markAcceptOrRejectFriendProps {
  id: string;
  type: "accept" | "reject";
}

export function markAcceptOrRejectFriend({ id, type }: markAcceptOrRejectFriendProps) {
  const data: any = {};
  switch (type) {
    case "accept":
      data.hasAccept = true;
      break;
    case "reject":
      data.hasAccept = false;
      break;
  }
  data.wasSeen = true;

  return axios.patch(`${import.meta.env.VITE_API_URL}/notifications/${id}`, data);
}
