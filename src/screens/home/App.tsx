/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useEffect, useRef, useState } from "react";

import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { Bell, SignOut } from "@phosphor-icons/react";

import { NavBar } from "../../components/navBar";
import { DropDown } from "../../components/dropDown";
import { NewNotifications } from "./components/newNotifications";
import { OldNotifications } from "./components/oldNotifications";

import { onMarkAll } from "./functions/markAll";
import { markAsSeen } from "./functions/markAsSeen";
import { markAcceptOrRejectFriend } from "./functions/markAcceptOrRejectFriend";
import { GetNotificationByWasSeen } from "./functions/getNotificationsByWasSeen";

import { MarkAcceptOrRejectFriendProps, MarkAsSeenProps, NotificationProps } from "./interfaces";
import { Logo, DropDownOverlay, DropdownPosition } from "./styles";

function App() {
  const dropDownRef = useRef(null);
  const [openNotifications, setOpenNotifications] = useState(false);

  const {
    data: notifications,
    isLoading,
    refetch,
  } = useQuery<NotificationProps[]>("notifications", () => {
    return axios
      .get(`${import.meta.env.VITE_API_URL}/notifications`)
      .then((response) => response.data);
  });

  const markAcceptOrRejectFriendFn = useMutation({
    mutationFn: ({ id, type }: MarkAcceptOrRejectFriendProps) =>
      markAcceptOrRejectFriend({ id, type }),
    onSuccess: async () => {
      await refetch();
    },
  });

  const wasSeenAll = useMutation({
    mutationFn: (notifications: NotificationProps[]) => onMarkAll({ notifications }),
    onSuccess: async () => {
      await refetch();
    },
  });

  const markAsSeenFn = useMutation({
    mutationFn: ({ id }: MarkAsSeenProps) => markAsSeen({ id }),
    onSuccess: async () => {
      await refetch();
    },
  });

  useEffect(() => {
    const handle = (e) => {
      if (dropDownRef.current !== null && dropDownRef.current.className == e.target.className) {
        setOpenNotifications(false);
      }
    };

    document.addEventListener("mousedown", handle);
  });

  return (
    <>
      <NavBar.Root>
        <Logo>Logo</Logo>
        <NavBar.Options>
          <NavBar.Option
            icon={Bell}
            onClick={() => setOpenNotifications((prev) => !prev)}
            mark={
              notifications &&
              notifications.length !== 0 &&
              notifications &&
              notifications.filter((item: NotificationProps) => item.wasSeen === false).length !== 0
            }
          />
          <NavBar.Option icon={SignOut} onClick={() => console.log("SingOut")} />
        </NavBar.Options>
      </NavBar.Root>

      <DropDownOverlay
        className={`dropdown-menu ${openNotifications ? "active" : "inactive"}`}
        ref={dropDownRef}
      >
        <DropdownPosition>
          <DropDown.Root>
            <DropDown.Header>
              <p>Norificações</p>
              {notifications &&
                GetNotificationByWasSeen({ notifications, wasSeen: false }).length !== 0 && (
                  <span onClick={() => wasSeenAll.mutate(notifications)}>
                    Marcar todas como lida
                  </span>
                )}
            </DropDown.Header>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <>
                <NewNotifications
                  notifications={notifications}
                  markAcceptOrRejectFriendFn={markAcceptOrRejectFriendFn.mutate}
                  markAsSeenFn={markAsSeenFn.mutate}
                />
                <OldNotifications
                  notifications={notifications}
                  markAcceptOrRejectFriendFn={markAcceptOrRejectFriendFn.mutate}
                />
              </>
            )}
          </DropDown.Root>
        </DropdownPosition>
      </DropDownOverlay>
    </>
  );
}

export default App;
