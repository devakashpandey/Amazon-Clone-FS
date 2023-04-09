import React, { useState } from "react";
import logo from "../../assets/amazondark.png";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const CreateAccount = () => {
  const fullYear = new Date();
  const currYear = fullYear.getFullYear();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  // error message handling
  const [errName, setErrName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errCPassword, setErrCPassword] = useState("");

  // handle all inputs here
  const handleName = (e) => {
    setName(e.target.value);
    setErrName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePass = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  const handleCPass = (e) => {
    setCPassword(e.target.value);
    setErrCPassword("");
  };

  // email validation
  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name) {
      setErrName("Enter your name");
    }
    if (!email) {
      setErrEmail("Enter your email or mobile phone number");
    } else {
      if (!emailValidation(email)) {
        setErrEmail(
          "Wrong or Invalid email address or mobile phone number. Please correct and try again."
        );
      }
    }
    if (!password) {
      setErrPassword("Enter your password");
    } else {
      if (password.length < 6) {
        setErrPassword("Minimum 6 characters required");
      }
    }
    if (!cPassword) {
      setErrCPassword("Type your password again");
    } else {
      if (cPassword !== password) {
        setErrCPassword("Passwords must match");
      }
    }

    if (
      name &&
      email &&
      emailValidation(email) &&
      password &&
      password.length >= 6 &&
      cPassword &&
      cPassword === password
    ) {
      console.log(name, email, password, cPassword);
      setName("");
      setEmail("");
      setPassword("");
      setCPassword("");
    }
  };

  return (
    <>
      <div className="w-full -m-2">
        <div className="w-full bg-white pb-10">
          <form className="w-[370px] mx-auto flex flex-col items-center mb-8">
            <img className="w-32" src={logo} alt="logo" />
            <div className="w-full border border-zinc-300 p-5 rounded-sm">
              <h2 className="font-titleFont text-3xl  mb-4">Create account</h2>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-semibold">Your name</p>
                  <input
                    className="w-full py-1 border border-zinc-400 px-2 rounded-sm
                     outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput
                     duration-100"
                    type="text"
                    placeholder="First and last name"
                    onChange={handleName}
                    value={name}
                  />
                  {errName && (
                    <p
                      className="text-red-600 text-[13px] font-medium tracking-wide flex 
                    items-center mt-1"
                    >
                      <span className="italic font-bold text-base mr-2">!</span>{" "}
                      {errName}
                    </p>
                  )}
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
                    onChange={handleEmail}
                    value={email}
                  />
                  {errEmail && (
                    <p
                      className="text-red-600 text-[13px] font-medium tracking-wide flex 
                    items-center mt-1"
                    >
                      <span className="italic font-bold text-base mr-2">!</span>{" "}
                      {errEmail}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-1 mt-3">
                  <p className="text-sm font-semibold ">Password</p>
                  <input
                    className="w-full py-1 border border-zinc-400 px-2 rounded-sm
                     outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput
                     duration-100"
                    type="password"
                    placeholder="At least 6 characters"
                    onChange={handlePass}
                    value={password}
                  />
                  {errPassword && (
                    <p
                      className="text-red-600 text-[13px] font-medium tracking-wide flex 
                    items-center mt-1"
                    >
                      <span className="italic font-bold text-base mr-2">!</span>{" "}
                      {errPassword}
                    </p>
                  )}
                  <span className="text-xs text-gray-600 font-medium">
                    {!errPassword ? (
                      <>
                        <span className="italic text-blue-400 mr-3 font-bold mt-1">
                          i
                        </span>
                        Passwords must be at least 6 characters.
                      </>
                    ) : (
                      ""
                    )}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-semibold">Re-enter password</p>
                  <input
                    className="w-full py-1 border border-zinc-400 px-2 rounded-sm
                     outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput
                     duration-100"
                    type="password"
                    onChange={handleCPass}
                    value={cPassword}
                  />
                  {errCPassword && (
                    <p
                      className="text-red-600 text-[13px] font-medium tracking-wide flex 
                    items-center mt-1"
                    >
                      <span className="italic font-bold text-base mr-2">!</span>{" "}
                      {errCPassword}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleSignup}
                  className="w-full py-1.5 text-[13px] font-normal rounded-sm bg-gradient-to-t
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
                <p className="text-[13px] font-titleFont tracking-wide">
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
                <p className="text-[13px] font-titleFont tracking-wide">
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
            <div className=" flex items-center gap-6 mt-6">
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
