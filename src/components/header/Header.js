import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const Header = () => {
  return (
    <>
      <div>
        <div
          className="w-full bg-amazon_blue text-white 
        px-1 py-1 flex items-center gap-4"
        >
          {/* ========== Image Start here ========== */}
          <div
            className="px-2 py-1 h-[80%] flex items-center border border-transparent
           hover:border-white cursor-pointer duration-100"
          >
            <img className="w-24 mt-2" src={logo} alt="logo" />
          </div>
          {/* ========== Image End here ========== */}

          {/* ========== Deliver Start here ========== */}
          <div
            className="flex items-center border border-transparent
           hover:border-white cursor-pointer duration-100"
          >
            <LocationOnOutlinedIcon />
            <p>
              Deliver to <span>India</span>
            </p>
          </div>
          {/* ========== Deliver End here ========== */}
        </div>
      </div>
    </>
  );
};

export default Header;
