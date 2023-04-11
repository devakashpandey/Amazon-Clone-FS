import React from "react";
import FooterBottom from "./FooterBottom";
import FooterMiddle from "./FooterMiddle";
import FooterTop from "./FooterTop";
import { useSelector } from "react-redux";

const Footer = () => {
  const userInfo = useSelector((state) => state.amazon.userInfo);
  return (
    <>
      <div className="font-titleFont">
        {userInfo ? "" : <FooterTop />}

        <FooterMiddle />
        <FooterBottom />
      </div>
    </>
  );
};

export default Footer;
