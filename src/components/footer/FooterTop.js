import React from "react";

const FooterTop = () => {
  return (
    <>
      <div className="w-full bg-white py-6">
        <div className="w-full border-t-[1px] border-b-[1px] py-6">
          <div className="w-64 mx-auto text-center">
            <p className="text-sm py-1">See personalized recommendations</p>
            <button
              className="w-full bg-yellow-400 rounded-md py-2 text-sm font-semibold 
              hover:bg-yellow-500 cursor-pointer"
            >
              Sign in
            </button>
            <p className="text-xs mt-2">
              New customer?{" "}
              <span className="text-blue-600 cursor-pointer">Start here</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterTop;
