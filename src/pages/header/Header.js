import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import AllLists from "../../components/allLists/AllLists";
import { FaShoppingCart } from "react-icons/fa";
import HeaderBottom from "./HeaderBottom";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="w-full sticky top-0 z-50">
        <div
          className="w-full bg-amazon_blue text-white 
        px-3 py-1 flex items-center gap-4"
        >
          {/* ========== Image Start here ========== */}
          <div className="px-1 py-1 h-[80%] headerHover flex items-center justify-center">
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
            <span
              className="w-14 bg-gray-200 hover:bg-gray-300 hover:text-amazon_blue border-2 cursor-pointer duration-300
             text-sm text-gray-600 font-bodyFont flex items-center justify-center 
             rounded-tl-md rounded-bl-md"
              onClick={() => setShow(!show)}
            >
              All
              <span>
                <ArrowDropDownIcon />
              </span>
            </span>
            {/* ========== Show List Start here ========== */}
            <AllLists show={show} />
            <input
              className=" text-amazon_blue flex-grow outline-none border-none px-2"
              type="text"
              placeholder="Search Amazon"
            />
            <span
              className="w-12 flex items-center justify-center
             bg-[#fcbb17] hover:bg-amazon_yellow duration-300 text-amazon_blue cursor-pointer
              rounded-tr-md rounded-br-md"
            >
              <SearchIcon style={{ fontSize: 30 }} />
            </span>
          </div>
          {/* ========== Search End here ========== */}
          {/* ========== Signin Start here ========== */}
          <div className="px-2 py-2 headerHover flex flex-col items-start justify-center">
            <p className="text-xs text-lightText">Hello, sign in</p>
            <p className="font-semibold india text-sm">
              Accounts & Lists
              <span className="text-gray-400 signin-arrow">
                <ArrowDropDownIcon />
              </span>
            </p>
          </div>
          {/* ========== Signin End here ========== */}
          {/* ========== Oders Start here ========== */}
          <div className="px-1 py-2 headerHover flex flex-col items-start justify-center orders">
            <p className="text-xs text-lightText">Returns</p>
            <p className="font-semibold india text-sm">& Oders</p>
          </div>
          {/* ========== Orders End here ========== */}
          {/* ========== Cart Start here ========== */}
          <div className="px-1 py-1.5 headerHover flex  items-start justify-center relative ">
            <FaShoppingCart size={33} />
            <p className="text-md font-semibold mt-3 ml-1">
              Cart
              <span
                className="absolute text-sm font-semibold top-0 left-7 p-1 h-5 bg-[#f3a847]
             text-amazon_blue rounded-full flex items-center justify-center "
              >
                0
              </span>
            </p>
          </div>
          {/* ========== Cart End here ========== */}
        </div>
        {/* ========== HeaderBottom Start here ========== */}
      </div>
      <HeaderBottom />
    </>
  );
};

export default Header;
