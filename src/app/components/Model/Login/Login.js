import Image from "next/image";
import React from "react";
import userIcon from "../../../../../public/Images/user.png";
import smartPhone from "../../../../../public/Images/smartphone.png";
import googleIcon from "../../../../../public/Images/google_icon.png";
import mailIcon from "../../../../../public/Images/mail.png";

function Login({ handleLogin }) {
  return (
    <>
      <Image src={userIcon} alt="" className="mx-auto w-[126px] h-[115px]" />
      <h3 className="mt-6 text-xl font-semibold text-gray-900  text-center">
        Log In
      </h3>

      <div>
        <div
          className="border flex py-4 rounded-lg my-6 cursor-pointer"
          onClick={() => handleLogin("phone")}
        >
          <Image src={smartPhone} alt="phone" className="w-6 h-6 mx-4" />
          <a className="text-[#005D76] font-medium">Continue with phone</a>
        </div>

        <p className="text-center text-[#606060]">OR</p>
        <div className="flex justify-center gap-6 my-5">
          <Image src={googleIcon} alt="google" className="h-7 w-7 " />
          <span className="border-r"></span>
          <Image
            src={mailIcon}
            alt="mail"
            className="h-6 w-7 cursor-pointer"
            onClick={() => handleLogin("email")}
          />
        </div>

        <div className="mt-20">
          <p className="text-center text-sm text-[#606060]">
            If you continue, you are accepting{" "}
            <span className="text-[#4783FB]">
              Rent <br /> Conditions and Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
