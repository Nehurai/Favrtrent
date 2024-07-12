import Image from "next/image";
import React from "react";

const Payment1 = ({ handlePayment }) => {
  return (
    <>
      <div className="h-80 bg-[#F2F7F8]">
        <img
          src="/Images/userPayment.png"
          alt=""
          width={169}
          className="mx-auto w-[160px] h-[140px] object-cover pt-8 mb-10"
        />
        <p className="text-base text-center my-1.5 font-medium">Total Amount</p>
        <p className="text-xl text-customBlue font-semibold text-center">
          ₹5699/mo
        </p>
      </div>
      <div className="my-4">
        <select
          name=""
          id=""
          className="p-4 border text-[#938E8E] w-full text-base rounded-md"
        >
          <option value="Choose month">Choose month e.g 1</option>
        </select>
        <div className="flex border items-center border-gray-300 rounded-md text-base text-[#938E8E] my-3">
          <span className="border-r-2 px-3 py-1 ">+91</span>
          <input
            type="number"
            placeholder="Set a price*"
            className="w-full h-full rounded-md p-4 focus:outline-none"
          />
        </div>
        <button
          className="w-full flex justify-center bg-customBlue text-white py-3 rounded-md mt-6"
          onClick={() => {
            handlePayment();
          }}
        >
          Proceed{" "}
        </button>
      </div>
    </>
  );
};

export default Payment1;
