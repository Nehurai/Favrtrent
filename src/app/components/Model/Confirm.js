import React from "react";
import bulletList from "../../../../public/Images/bulletList.png";
import Image from "next/image";

function Confirm({ handleConfirm }) {
  return (
    <>
      <Image
        src={bulletList}
        alt=""
        width={169}
        className="mx-auto w-[160px] h-[165px]"
      />
      <h3 className="hidden my-5 text-xl font-semibold text-gray-900  text-center">
        Write a message to meet
      </h3>
      <p className=" text-center text-sm text-[#606060] my-5">
        Your contact details will be updated on all your ads. Do you wish tp
        continue?
      </p>
      <div className=" flex justify-between gap-8" action="#">
        <button
          type="submit"
          onClick={handleConfirm}
          className="w-1/2  text-white bg-[#005D76]  hover:bg-[#076f8b] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center "
        >
          Ok
        </button>
        <button className="w-1/2 border border-[#005D76] text-[#005D76]  hover:bg-[#f4f6f7] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center ">
          Cancel
        </button>
      </div>
    </>
  );
}

export default Confirm;
