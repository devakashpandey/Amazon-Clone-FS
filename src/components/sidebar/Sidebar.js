import React, { useState } from "react";
import "./Sidebar.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
          className="w-80 md:w-96 h-12 bg-amazon_light flex items-center 
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
        <div className="absolute w-full top-14 text-sm">
          <List>
            <h1 className="text-lg font-bold ml-12 mb-1 mt-1">
              Digital Content & Devices
            </h1>
            {[
              "Amazon Music",
              "Kindle E-readers & Books",
              "Amazon Appstore",
            ].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <div className="ml-8 mt-2 font-medium flex justify-between w-full">
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
            <h1 className="text-lg font-bold ml-12 mt-3">Shop By Department</h1>
            {["Electronics", "Computers", "Smart Home", "Arts & Crafts"].map(
              (text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <div className="ml-8 mt-2 font-medium flex justify-between w-full">
                      <p>{text}</p>
                      <div className=" flex text-gray-400">
                        <ArrowForwardIosIcon style={{ fontSize: 18 }} />
                      </div>
                    </div>
                  </ListItemButton>
                </ListItem>
              )
            )}
            <ListItemButton>
              <div className="ml-8 font-medium flex">
                <p>See All</p>
                <div className="text-gray-500 flex">
                  <KeyboardArrowDownIcon />
                </div>
              </div>
            </ListItemButton>
          </List>
          <Divider />
          <List>
            <h1 className="text-lg font-bold ml-12 mt-3">
              Programs & Features
            </h1>
            {[
              "Gift Cards",
              "Shop By Interest",
              "Amazon Live",
              "International Shopping",
            ].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <div className="ml-8 mt-2 font-medium flex justify-between w-full">
                    <p>{text}</p>
                    <div className=" flex text-gray-400">
                      <ArrowForwardIosIcon style={{ fontSize: 18 }} />
                    </div>
                  </div>
                </ListItemButton>
              </ListItem>
            ))}

            <ListItemButton>
              <div className="ml-8 font-medium flex">
                <p>See All</p>
                <div className="text-gray-500 flex">
                  <KeyboardArrowDownIcon />
                </div>
              </div>
            </ListItemButton>
          </List>
          <Divider />
          <List>
            <h1 className="text-lg font-bold ml-12 mt-3">Help & Setings</h1>
            {[
              "Your Account",
              "🌍 English",
              "United States",
              "Customer Service",
              "Sign in",
            ].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <div className="ml-8 mt-2 font-medium flex justify-between w-full">
                    <p>{text}</p>
                  </div>
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
          <button
            onClick={toggleDrawer(anchor, true)}
            className="flex justify-center items-center"
          >
            <MenuIcon />

            <span>All</span>
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
