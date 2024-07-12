import React from "react";
import Image from "next/image";
import mailIcon from "../../../../../public/Images/questionmark.png";

function LoginWithEmail() {
  return (
    <>
      <Image
        src={mailIcon}
        alt=""
        width={169}
        className="mx-auto w-[114px] h-[90px]"
      />
      <h3 className="my-6 text-xl font-semibold text-gray-900  text-center">
        Enter your email
      </h3>

      <form className="mt-10" action="#">
        <div>
          <input
            type="email"
            name="email"
            id="email"
            className="border border-gray-300 text-[#938E8E] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="flex justify-between"></div>
        <button
          type="submit"
          className="w-full my-8  text-white bg-[#005D76]  hover:bg-[#076f8b] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center "
        >
          Next
        </button>
      </form>
      <div className="mt-12">
        <p className="my-4 text-center text-sm text-[#606060]">
          Dont have any account <span className="text-[#4783FB]">sign up</span>{" "}
        </p>
        <p className="text-center text-sm text-[#606060]">
          If you continue, you are accepting{" "}
          <span className="text-[#4783FB]">
            Rent <br /> Conditions and Privacy Policy
          </span>
        </p>
      </div>
    </>
  );
}

export default LoginWithEmail;
