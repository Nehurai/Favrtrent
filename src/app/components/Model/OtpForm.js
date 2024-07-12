import React from "react";
import Image from "next/image";
import asteriks from "../../../../public/Images/asteriks.png";

function OtpForm({ handleOtpSubmit }) {
  return (
    <>
      <Image src={asteriks} alt="" width={169} className="mx-auto w-[160px] " />
      <h3 className=" my-5 mb-0 text-xl font-semibold text-gray-900  text-center">
        Enter verification code
      </h3>
      <p className=" text-center text-sm text-[#606060] my-5 mt-1">
        We sent a 4-digit code to{" "}
        <span className="text-blue-500">+91 9927232770 </span>
      </p>
      <form className="flex justify-center flex-col items-center gap-7">
        <div class="flex  border-2 py-1 rounded-md ">
          <input
            type="text"
            maxlength="1"
            class="w-20 h-14  text-center text-lg border-r border-gray-300  focus:outline-none "
          />
          <input
            type="text"
            maxlength="1"
            class="w-20  h-14 text-center text-lg border-r border-gray-300  focus:outline-none "
          />
          <input
            type="text"
            maxlength="1"
            class="w-20  h-14 text-center text-lg border-r  border-gray-300  focus:outline-none "
          />
          <input
            type="text"
            maxlength="1"
            class="w-20  h-14 text-center text-lg  border-gray-300 rounded focus:outline-none  "
          />
        </div>
        <button
          type="submit"
          onClick={handleOtpSubmit}
          className="w-80 mb-8  text-white bg-[#005D76]  hover:bg-[#076f8b] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center "
        >
          Submit
        </button>
      </form>

      <div
        className="mt-24 flex justify-center items-center flex-col text-[#1976D2]"
        action="#"
      >
        <a href="#" className="mb-1">
          Resend code by sms
        </a>
        <p>Resend Code by Call</p>
      </div>
    </>
  );
}

export default OtpForm;
