import React from "react";
import logo from "../../assets/amazondark.png";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const CreateAccount = () => {
  const fullYear = new Date();
  const currYear = fullYear.getFullYear();
  return (
    <>
      <div className="w-full">
        <div className="w-full bg-white pb-10">
          <form className="w-[400px] mx-auto flex flex-col items-center mb-8">
            <img className="w-36" src={logo} alt="logo" />
            <div className="w-full border border-zinc-300 p-6 rounded-sm">
              <h2 className="font-titleFont text-3xl  mb-4">Create account</h2>
              <div className="flex flex-col gap-3 font-titleFont tracking-wide">
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-semibold">Your name</p>
                  <input
                    className="w-full py-1 border border-zinc-400 px-2 rounded-sm
                     outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput
                     duration-100"
                    type="text"
                    placeholder="First and last name"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-semibold">
                    Mobile number or email
                  </p>
                  <input
                    className="w-full py-1 border border-zinc-400 px-2 rounded-sm
                     outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput
                     duration-100"
                    type="mail"
                  />
                </div>
                <div className="flex flex-col gap-1 mt-3">
                  <p className="text-sm font-semibold ">Password</p>
                  <input
                    className="w-full py-1 border border-zinc-400 px-2 rounded-sm
                     outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput
                     duration-100"
                    type="password"
                    placeholder="At least 6 characters"
                  />
                  <span className="text-xs text-gray-600">
                    Passwords must be at least 6 characters.
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-semibold">Re-enter password</p>
                  <input
                    className="w-full py-1 border border-zinc-400 px-2 rounded-sm
                     outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput
                     duration-100"
                    type="password"
                  />
                </div>
                <button
                  onClick={(e) => e.preventDefault()}
                  className="w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t
                 from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-[#a88734]
                 active:border-yellow-800 active:shadow-amazonInput duration-100 tracking-wide"
                >
                  Continue
                </button>
              </div>
              <p className="text-xs mt-6 w-full tracking-wide">
                By creating an account, you agree to Amazon's{" "}
                <a
                  href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088"
                  rel="noreferrer"
                  className="hover:underline text-blue-600 hover:text-red-500 "
                >
                  Conditions of Use{" "}
                </a>
                and{" "}
                <a
                  href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496"
                  rel="noreferrer"
                  className="hover:underline text-blue-600 hover:text-red-500 "
                >
                  Privacy Notice
                </a>
              </p>
              <div className="mt-8">
                <p className="text-sm font-titleFont tracking-wide">
                  Already have an account?{" "}
                  <Link to="/signin">
                    <span className="cursor-pointer hover:underline text-blue-700 hover:text-red-500">
                      Sign in
                      <span className="-ml-1">
                        <ArrowRightIcon />
                      </span>
                    </span>
                  </Link>
                </p>
                <p className="text-sm font-titleFont tracking-wide">
                  Buying for work?{" "}
                  <span className=" cursor-pointer hover:underline text-blue-700 hover:text-red-500">
                    Create a free business account
                    <span className="-ml-1">
                      <ArrowRightIcon />
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </form>
          <div
            className="w-full bg-gradient-to-t from-white via-white to-zinc-100
          flex  flex-col justify-center items-center gap-4 mt-2"
          >
            <div className=" flex items-center gap-6 mt-8">
              <a
                href="#"
                rel="noreferrer"
                className="text-xs hover:underline text-blue-700 hover:text-red-500"
              >
                {" "}
                Conditions of Use{" "}
              </a>
              <a
                href="#"
                rel="noreferrer"
                className="text-xs  hover:underline text-blue-700 hover:text-red-500"
              >
                {" "}
                Privacy Notice{" "}
              </a>
              <a
                href="#"
                rel="noreferrer"
                className="text-xs  hover:underline text-blue-700 hover:text-red-500"
              >
                {" "}
                Help{" "}
              </a>
            </div>
            <p className="text-xs text-gray-500 font-titleFont tracking-wide">
              © 1996-{currYear}, Amazon.com, Inc. or its affiliates
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
