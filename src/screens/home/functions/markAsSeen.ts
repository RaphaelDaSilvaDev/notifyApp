/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from "axios";
import { MarkAsSeenProps } from "../interfaces";

export function markAsSeen({ id }: MarkAsSeenProps) {
  return axios.patch(`${import.meta.env.VITE_API_URL}/notifications/${id}`, { wasSeen: true });
}
