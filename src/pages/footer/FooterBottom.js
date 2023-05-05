import React from "react";
import { footerBottomList } from "./FooterBottomList";

const FooterBottom = () => {
  return (
    <>
      <div className="w-full bg-footerBottom py-8">
        <div className="max-w-5xl mx-auto">
          <div className="w-full grid-cols-3 px-5 last: lgl:px-0 md:grid-cols-5 place-items-center grid lgl:grid-cols-7 text-gray-400">
            {footerBottomList.map((item) => {
              return (
                <div key={item.id} className="group">
                  <h3
                    className="w-24 font-semibold text-[12px] text-[#DDD] 
                  group-hover:underline cursor-pointer"
                  >
                    {item.title}
                  </h3>
                  <p
                    className="w-24 tracking-tight text-[12px] group-hover:underline 
                  leading-3 mb-4 cursor-pointer"
                  >
                    {item.des}
                  </p>
                </div>
              );
            })}
          </div>
          <p className="text-gray-300 text-[13px] mt-10 w-[90%] m-auto text-center">
            <span className="hover:underline cursor-pointer">
              Conditions of Use
            </span>{" "}
            &nbsp;&nbsp;{" "}
            <span className="hover:underline cursor-pointer">
              Privacy Notice
            </span>
            &nbsp;&nbsp;{" "}
            <span className="hover:underline cursor-pointer">
              Your Ads Privacy Choices
            </span>{" "}
            <br />© 1996-2023, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>
    </>
  );
};

export default FooterBottom;
