import React, { useState } from "react";
import "./Sidebar.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Sidebar() {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      className="box"
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* ========== Sidebar Signin Start here ========== */}
      <div className="relative">
        <div
          className="w-96 h-12 bg-amazon_light flex items-center 
        justify-left fixed z-50"
        >
          <h1
            className="flex items-center 
        justify-left ml-10 gap-2  text-white font-bold text-lg"
          >
            <AccountCircleIcon style={{ fontSize: 30 }} /> Hello, Sign in
          </h1>
        </div>

        {/* ========== Sidebar Signin End here ========== */}
        <div className="absolute w-full top-14">
          <List>
            <h1 className="text-lg font-bold ml-12">
              Digital Content & Devices
            </h1>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <div className="ml-8 mt-1 font-medium flex justify-between w-full">
                    <p>{text}</p>
                    <div className=" flex text-gray-400">
                      <ArrowForwardIosIcon style={{ fontSize: 18 }} />
                    </div>
                  </div>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <h1 className="text-lg font-bold ml-12">Shop By Department</h1>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <p>{text}</p>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <h1 className="text-lg font-bold ml-12">Programs & Features</h1>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <p>{text}</p>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <h1 className="text-lg font-bold ml-12">Help & Setings</h1>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <p>{text}</p>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </Box>
  );

  return (
    <div className="w-full">
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
            All
          </button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <div className="sideBar-container">{list(anchor)}</div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
