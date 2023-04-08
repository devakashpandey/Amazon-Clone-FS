import React from "react";
import logo from "../../assets/darkLogo.png";

const SignIn = () => {
  return (
    <>
      <div className="w-full">
        <div className="w-full bg-gray-100 pb-10">
          <form className="w-[350px] mx-auto flex flex-col items-center">
            <img className="w-32" src={logo} alt="logo" />
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
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
