import React from "react";
import logo from "../../assets/amazondark.png";

const SignIn = () => {
  const fullYear = new Date();
  const currYear = fullYear.getFullYear();

  return (
    <>
      <div className="w-full">
        <div className="w-full bg-white  pb-10">
          <form className="w-[380px] mx-auto flex flex-col items-center">
            <img className="w-36" src={logo} alt="logo" />
            <div className="w-full border border-zinc-300 p-6 rounded-sm">
              <h2 className="font-titleFont text-3xl font-medium mb-4">
                Sign in
              </h2>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium">
                    Email or mobile phone number
                  </p>
                  <input
                    className="w-full py-1 border border-zinc-400 px-2 rounded-sm
                     outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput
                     duration-100"
                    type="email"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium">Password</p>
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
                 active:border-yellow-800 active:shadow-amazonInput duration-100"
                >
                  Continue
                </button>
              </div>
              <p className="text-xs mt-4 w-full">
                By continuing, you agree to Amazon's{" "}
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
                .
              </p>
              <p className="text-sm font-titleFont pt-5">
                <a
                  className="hover:underline text-blue-600 hover:text-red-500 "
                  href="#"
                  rel="noreferrer"
                >
                  Forgot your password?
                </a>
              </p>
            </div>
            <p className="w-full text-[13px] text-gray-500 mt-4 flex items-center">
              <span className="w-1/3 h-[1px] bg-zinc-300 inline-flex"></span>
              <span className="w-1/3 text-center">New to Amazon?</span>
              <span className="w-1/3 h-[1px] bg-zinc-300 inline-flex"></span>
            </p>
            <button
              onClick={(e) => e.preventDefault()}
              className="w-full py-1.5 mt-4 text-sm font-normal rounded-sm bg-gradient-to-t
              from-slate-200 to-slate-100 hover:bg-gradient-to-b border border-zinc-400
              active:border-yellow-800 active:shadow-amazonInput duration-100 mb-5"
            >
              Create your Amazon account
            </button>
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

export default SignIn;
