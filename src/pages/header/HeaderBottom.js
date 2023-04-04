import React from "react";

import Sidebar from "../../components/sidebar/Sidebar";

const HeaderBottom = () => {
  return (
    <>
      <div className="w-full px-3 h-[36px] bg-amazon_light text-white flex items-center justify-between ">
        {/* ========== Header Bottom Items Start here ========== */}
        <div className="left">
          <ul className="px-1 py-1 flex items-center gap-3 text-sm  ">
            <li className="px-1 py-1 headerHover font-medium gap-1">
              <Sidebar />
            </li>
            <li className="px-1 py-1 headerHover hidden bb-list ">
              Today's Deals
            </li>
            <li className="px-1 py-1 headerHover hidden bb-list">
              Customer Service
            </li>
            <li className="px-1 py-1 headerHover hidden bb-list">Registry</li>
            <li className="px-1 py-1 headerHover hidden bb-list">Gift Cards</li>
            <li className="px-1 py-1 headerHover hidden bb-list">Sell</li>
          </ul>
        </div>

        <div className="right">
          <p className=" px-1 py-1 headerHover text-sm ">
            Shop great deals now
          </p>
        </div>
      </div>
    </>
  );
};

export default HeaderBottom;
