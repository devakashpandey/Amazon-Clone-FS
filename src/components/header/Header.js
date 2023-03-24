import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <>
      <div>
        <div
          className="w-full bg-amazon_blue text-white 
        px-1 py-1 flex items-center gap-4"
        >
          {/* ========== Image Start here ========== */}
          <div className="px-1 py-1 h-[80%] headerHover">
            <img className="w-24 mt-2" src={logo} alt="logo" />
          </div>
          {/* ========== Image End here ========== */}
          {/* ========== Deliver Start here ========== */}
          <div className="px-2 py-2 headerHover main-location">
            <LocationOnOutlinedIcon style={{ marginTop: 6 }} />
            <p className="flex flex-col">
              <span className="text-xs text-lightText">Deliver to</span>
              <span className="font-semibold india text-sm">India</span>
            </p>
          </div>
          {/* ========== Deliver End here ========== */}
          {/* ========== Search Start here ========== */}
          <div className="h-10 rounded-md flex flex-grow relative">
            <span>All</span>
            <span>
              <ArrowDropDownIcon />
            </span>
            <input
              className=" text-amazon_blue flex-grow outline-none border-none px-2"
              type="text"
              placeholder="Search Amazon"
            />
            <span
              className="w-12 flex items-center justify-center
             bg-amazon_yellow hover:bg-[#f2960c] duration-300 text-amazon_blue cursor-pointer
              rounded-tr-md rounded-br-md"
            >
              <SearchIcon style={{ fontSize: 30 }} />
            </span>
          </div>
          {/* ========== Search End here ========== */}
        </div>
      </div>
    </>
  );
};

export default Header;
