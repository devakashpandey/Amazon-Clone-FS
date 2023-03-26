import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Sidebar from "../sidebar/Sidebar";

const HeaderBottom = () => {
  // const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <div className="w-full px-3 h-[36px] bg-amazon_light text-white flex items-center justify-between ">
        {/* ========== Header Bottom Items Start here ========== */}
        <div className="left">
          <ul className="px-1 py-1 flex items-center gap-3 text-sm  ">
            <li className="px-1 py-1 headerHover font-medium gap-1">
              <Sidebar />
            </li>
            <li className="px-1 py-1 headerHover">Today's Deals</li>
            <li className="px-1 py-1 headerHover">Customer Service</li>
            <li className="px-1 py-1 headerHover">Registry</li>
            <li className="px-1 py-1 headerHover">Gift Cards</li>
            <li className="px-1 py-1 headerHover">Sell</li>
          </ul>
        </div>

        <div className="right">
          <p className=" px-1 py-1 headerHover text-sm ">
            Shop great deals now
          </p>
        </div>
        {/* ========== Header Bottom Items End here ========== */}

        {/* ==========  SideBar Start here ========== */}

        {/* ========== SideBar End here ========== */}
      </div>
    </>
  );
};

export default HeaderBottom;
