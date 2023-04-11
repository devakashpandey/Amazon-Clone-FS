import React from "react";
import { Link } from "react-router-dom";

const FooterTop = () => {
  return (
    <>
      <div className="w-full bg-white py-6">
        <div className="w-full border-t-[1px] border-b-[1px] py-6">
          <div className="w-64 mx-auto text-center">
            <p className="text-sm py-1">See personalized recommendations</p>
            <Link to="/signin">
              <button
                className="w-full bg-yellow-300 rounded-md py-1.5 text-sm font-medium
              hover:bg-yellow-400 duration-200 cursor-pointer"
              >
                Sign in
              </button>
            </Link>
            <p className="text-xs mt-2">
              New customer?{" "}
              <Link to="/signup">
                <span className="text-blue-600 cursor-pointer">Start here</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterTop;
