import React from "react";
import logo from "../../assets/logo.png";
import LanguageIcon from "@mui/icons-material/Language";
import flag from "../../assets/flag.png.crdownload";

const FooterMiddle = () => {
  return (
    <>
      <div className="w-full bg-amazon_light text-white">
        <div
          className="w-full bg-[#37475a] py-3 text-center text-sm 
        hover:bg-[#37476b] cursor-pointer"
        >
          Back to top
        </div>

        <div className="w-full py-10">
          <div className="max-w-5xl mx-auto text-gray-300">
            <div className="w-full grid grid-cols-4">
              <div>
                <h3 className="font-titleFont text-white font-semibold mb-3">
                  Get to Know Us
                </h3>
                <ul className="flex flex-col gap-2 font-bodyFont text-sm">
                  <li className="footerLinkHover">Careers</li>
                  <li className="footerLinkHover">Blog</li>
                  <li className="footerLinkHover">About Amazon</li>
                  <li className="footerLinkHover">Investor Relation</li>
                  <li className="footerLinkHover">Amazon Devices</li>
                  <li className="footerLinkHover">Amazon Science</li>
                </ul>
              </div>
              <div>
                <h3 className="font-titleFont text-white font-semibold mb-3">
                  Make Money with Us
                </h3>
                <ul className="flex flex-col gap-2 font-bodyFont text-sm">
                  <li className="footerLinkHover">Sell products on Amazon</li>
                  <li className="footerLinkHover">Sell on Amazon Business</li>
                  <li className="footerLinkHover">Sell apps on Amazon</li>
                  <li className="footerLinkHover">Become an Affiliate</li>
                  <li className="footerLinkHover">Advertise Your Products</li>
                  <li className="footerLinkHover">Self-Publish with Us</li>
                  <li className="footerLinkHover">Host an Amazon Hub</li>
                </ul>
              </div>
              <div>
                <h3 className="font-titleFont text-white font-semibold mb-3">
                  Amazon Payment Products
                </h3>
                <ul className="flex flex-col gap-2 font-bodyFont text-sm">
                  <li className="footerLinkHover">Amazon Business Card</li>
                  <li className="footerLinkHover">Shop with Points</li>
                  <li className="footerLinkHover">Reload Your Balance</li>
                  <li className="footerLinkHover">Amazon Currency Converter</li>
                </ul>
              </div>
              <div>
                <h3 className="font-titleFont text-white font-semibold mb-3">
                  Let Us Help You
                </h3>
                <ul className="flex flex-col gap-2 font-bodyFont text-sm">
                  <li className="footerLinkHover">Amazon and COVID-19</li>
                  <li className="footerLinkHover">Your Account</li>
                  <li className="footerLinkHover">Your Orders</li>
                  <li className="footerLinkHover">Shipping Rates & Policies</li>
                  <li className="footerLinkHover">Returns & Replacements</li>
                  <li className="footerLinkHover">
                    Manage Your Content and Devices
                  </li>
                  <li className="footerLinkHover">Amazon Assistant</li>
                  <li className="footerLinkHover">Help</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-3 items-center justify-center py-6 border-t-[1px] border-gray-500">
          <div className="mr-12">
            <img className="w-20 pt-3" src={logo} alt="logo" />
          </div>
          <div className="flex gap-2 border border-gray-500 cursor-pointer px-3 py-1 rounded-sm">
            <LanguageIcon style={{ fontSize: 18 }} />
            <p className="text-sm">English &nbsp;&nbsp;</p>
          </div>
          <div className="flex gap-2 border border-gray-500 cursor-pointer px-3 py-1 rounded-sm">
            <p className="text-sm">$</p>
            <p className="text-sm">USD - U.S. Doller</p>
          </div>
          <div className="flex gap-2 border border-gray-500 cursor-pointer px-3 py-1 rounded-sm justify-center items-center">
            <img className="w-5" src={flag} alt="flag" />
            <p className="text-sm">United States</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterMiddle;
