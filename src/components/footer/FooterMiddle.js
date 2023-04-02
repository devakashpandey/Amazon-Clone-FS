import React from "react";

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
            <div>
              <h3 className="font-titleFont text-white font-semibold mb-3">
                Get to Know Us
              </h3>
              <ul className="flex flex-col gap-1 font-bodyFont text-sm">
                <li className="footerLinkHover">Careers</li>
                <li className="footerLinkHover">Blog</li>
                <li className="footerLinkHover">About Amazon</li>
                <li className="footerLinkHover">Investor Relation</li>
                <li className="footerLinkHover">Amazon Devices</li>
                <li className="footerLinkHover">Amazon Science</li>
              </ul>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default FooterMiddle;
