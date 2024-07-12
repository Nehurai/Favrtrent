import React from "react";
import blulb from "../../../../public/Images/bulb.png";
import Image from "next/image";
import Link from "next/link";

function TipForDeal() {
  return (
    <>
      <Image
        src={blulb}
        alt=""
        width={169}
        className="mx-auto w-[83px] h-[83px] p-3 rounded-lg bg-[#005D76]"
      />
      <h3 className="mt-6 text-xl font-semibold text-gray-900  text-center">
        Tip for a safe deal
      </h3>

      <ul className="marker:text-green list-disc mb-16 px-8">
        <li className=" text-sm text-[#005D76] my-5">
          <span className="text-[#606060]">
            {" "}
            Be safe, take necessary precautions while meeting with owner and
            customer
          </span>
        </li>
        <li className=" text-sm text-[#005D76] my-5">
          <span className="text-[#606060]">
            Do not enter UPI PIN while receving money
          </span>
        </li>
        <li className=" text-sm text-[#005D76] my-5">
          <span className="text-[#606060]">
            {" "}
            Do not enter UPI PIN while receving money
          </span>
        </li>
        <li className=" text-sm text-[#005D76] my-5">
          <span className="text-[#606060]">
            {" "}
            Report suspicious users to Rent
          </span>
        </li>
      </ul>

      <Link
        href="/chat"
        type="submit"
        className="w-full block  text-white bg-[#005D76]  hover:bg-[#076f8b] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center "
      >
        Continue to chat
      </Link>
    </>
  );
}

export default TipForDeal;
