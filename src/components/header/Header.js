import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <img
          className="header-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        ></img>
        <div className="header-search">
          <input
            type="text"
            className="search-input"
            placeholder="Search Amazon.in"
          />
        </div>
        <div className="header-nav">
          <div className="header-option">
            <span className="option-1">🇮🇳</span>
          </div>
          <div className="header-option">
            <span className="option-2">Hello, sign in</span>
            <span className="option-2">Accounts & Lists</span>
          </div>
          <div className="header-option">
            <span className="option-3">Returns</span>
            <span className="option-3">& Orders</span>
          </div>
          <div className="header-option">
            <span className="option-4">Hello, sign in</span>
            <span className="option-4">Accounts & Lists</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
