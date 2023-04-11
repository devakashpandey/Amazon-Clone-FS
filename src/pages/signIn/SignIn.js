import React, { useState } from "react";
import logo from "../../assets/amazondark.png";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { RotatingLines } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../redux/AmazonSlice";

const SignIn = () => {
  const dispatch = useDispatch();
  const fullYear = new Date();
  const currYear = fullYear.getFullYear();

  const auth = getAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // error messages handling
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");

  // firebase error handling
  const [userEmailErr, setUserEmailErr] = useState("");
  const [userPassErr, setUserPasssErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  // handle inputs here
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
    setUserEmailErr("");
  };
  const handlePass = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
    setUserPasssErr("");
  };

  //email validation
  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
  };

  // handle signin button
  const handleSignin = (e) => {
    e.preventDefault();

    if (!email) {
      setErrEmail("Enter your email");
    } else {
      if (!emailValidation(email)) {
        setErrEmail(
          "Wrong or Invalid email address or mobile phone number. Please correct and try again."
        );
      }
    }
    if (!password) {
      setErrPassword("Enter your password");
    }

    if (email && password && emailValidation(email)) {
      setLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userData) => {
          const user = userData.user;
          dispatch(
            setUserInfo({
              id: user.uid,
              userName: user.displayName,
              email: user.email,
              image: user.photoURL,
            })
          );
          setLoading(false);
          setSuccessMsg("Logged in Successfully!");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        })
        .catch((error) => {
          setLoading(false);
          const errorMessage = error.message;
          const errorCode = error.code;
          console.log(errorCode, errorMessage);
          if (errorCode.includes("auth/user-not-found")) {
            setUserEmailErr("Invalid email");
            setEmail(email);
            setPassword(password);
          }
          if (errorCode.includes("auth/wrong-password")) {
            setLoading(false);
            setUserPasssErr("Wrong password! try again");
            setEmail(email);
            setPassword(password);
          }
        });
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <div className="w-full -m-2 ">
        <div className="w-full bg-white pb-10">
          {successMsg ? (
            <div className="w-full flex justify-center items-center py-32">
              <p
                className="border-[1px] border-green-600 text-green-500 font-titleFont
            text-lg font-medium px-6 py-2"
              >
                {successMsg}
              </p>
            </div>
          ) : (
            <>
              <form className="w-[370px] mx-auto flex flex-col items-center">
                <Link to="/">
                  <img className="w-32 cursor-pointer" src={logo} alt="logo" />
                </Link>
                <div className="w-full border border-zinc-300 p-5 rounded-sm">
                  <h2 className="font-titleFont text-3xl  mb-4">Sign in</h2>
                  <div className="flex flex-col gap-3  font-titleFont tracking-wide">
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-semibold">
                        Email or mobile phone number
                      </p>
                      <input
                        className="w-full py-1 border border-zinc-400 px-2 rounded-sm
                     outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput
                     duration-100"
                        type="email"
                        onChange={handleEmail}
                        value={email}
                      />
                      {errEmail && (
                        <p
                          className="text-red-600 text-[13px] font-medium tracking-wide flex 
                    items-center mt-1"
                        >
                          <span className="italic font-bold text-base mr-2">
                            !
                          </span>{" "}
                          {errEmail}
                        </p>
                      )}
                      {userEmailErr && (
                        <p
                          className="text-red-600 text-[13px] font-medium tracking-wide flex 
                    items-center mt-1"
                        >
                          <span className="italic font-bold text-base mr-2">
                            !
                          </span>{" "}
                          {userEmailErr}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-semibold">Password</p>
                      <input
                        className="w-full py-1 border border-zinc-400 px-2 rounded-sm
                     outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput
                     duration-100"
                        type="password"
                        onChange={handlePass}
                        value={password}
                      />
                      {errPassword && (
                        <p
                          className="text-red-600 text-[13px] font-medium tracking-wide flex 
                    items-center mt-1"
                        >
                          <span className="italic font-bold text-base mr-2">
                            !
                          </span>{" "}
                          {errPassword}
                        </p>
                      )}
                      {userPassErr && (
                        <p
                          className="text-red-600 text-[13px] font-medium tracking-wide flex 
                    items-center mt-1"
                        >
                          <span className="italic font-bold text-base mr-2">
                            !
                          </span>{" "}
                          {userPassErr}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={handleSignin}
                      className="w-full py-1.5 text-[13px] tracking-wide font-normal rounded-sm bg-gradient-to-t
                 from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-[#a88734]
                 active:border-yellow-800 active:shadow-amazonInput duration-100"
                    >
                      Continue
                    </button>
                    {loading && (
                      <div className="flex justify-center">
                        <RotatingLines
                          strokeColor="#febd69"
                          strokeWidth="5"
                          animationDuration="0.75"
                          width="50"
                          visible={true}
                        />
                      </div>
                    )}
                  </div>
                  <p className="text-xs tracking-wide  mt-4 w-full ">
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
                  <p className="text-[13px] font-titleFont pt-5">
                    <a
                      className="hover:underline text-blue-600 hover:text-red-500 "
                      href="#"
                      rel="noreferrer"
                    >
                      Forgot your password?
                    </a>
                  </p>
                </div>
                <p className="w-full text-xs text-gray-500 mt-4 flex items-center">
                  <span className="w-1/3 h-[1px] bg-zinc-300 inline-flex"></span>
                  <span className="w-1/3 text-center">New to Amazon?</span>
                  <span className="w-1/3 h-[1px] bg-zinc-300 inline-flex"></span>
                </p>
                <Link className="w-full" to="/signup">
                  <button
                    className="w-full py-1.5 mt-4 text-[13px] font-normal rounded-sm bg-gradient-to-t
              from-slate-200 to-slate-100 hover:bg-gradient-to-b border border-zinc-400
              active:border-yellow-800 active:shadow-amazonInput duration-100 mb-5"
                  >
                    Create your Amazon account
                  </button>
                </Link>
              </form>
            </>
          )}

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
