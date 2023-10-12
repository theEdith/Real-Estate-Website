import React from "react";
import { Avatar, Menu, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { useNavigate } from "react-router-dom";
import { replace } from "lodash";
const ProfileMenu = ({ user, logout }) => {
  const navigate = useNavigate();
  return (
    <MantineProvider>
      <Menu>
        <Menu.Target>
          <Avatar src={user?.picture} alt="user image" radius={"xl"} />
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item onClick={() => navigate("./favorites", { replace: true })}>
            Favorites
          </Menu.Item>
          <Menu.Item onClick={() => navigate("./bookings", { replace: true })}>
            Bookings
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              localStorage.clear();
              logout();
            }}
          >
            Logout
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </MantineProvider>
  );
};

export default ProfileMenu;
