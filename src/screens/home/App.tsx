import { useEffect, useRef, useState } from "react";
import { Bell, SignOut } from "@phosphor-icons/react";

import { NavBar } from "../../components/navBar";
import { DropDown } from "../../components/dropDown";
import { NewNotifications } from "./components/newNotifications";
import { OldNotifications } from "./components/oldNotifications";

import { onMarkAll } from "./functions/markAll";

import mock from "./mock.json";
import { NotificationInterface } from "./interfaces";
import { Logo, DropDownOverlay, DropdownPosition } from "./styles";

function App() {
  const dropDownRef = useRef(null);
  const [notifications, setNotifications] = useState<NotificationInterface[]>(mock.data);
  const [openNotifications, setOpenNotifications] = useState(false);

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
              notifications.length !== 0 &&
              notifications.filter((item) => item.wasSeen === false).length !== 0
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
              <span onClick={() => onMarkAll({ notifications, setNotifications })}>
                Marcar todas como lida
              </span>
            </DropDown.Header>
            <NewNotifications notifications={notifications} setNotifications={setNotifications} />
            <OldNotifications notifications={notifications} setNotifications={setNotifications} />
          </DropDown.Root>
        </DropdownPosition>
      </DropDownOverlay>
    </>
  );
}

export default App;
