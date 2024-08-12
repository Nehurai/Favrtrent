import Image from "next/image";
import React from "react";
import { MdOutlineStarBorder } from "react-icons/md";

const ReviewCard = () => {
  return (
    <div className="flex flex-row items-center h-full gap-10 p-2 border-2 rounded-lg lg:justify-center font-poppins">
      <div className="sm:w-[50vw] w-full">
      <Image
        width={200}
        height={200}
        src="/images/Rectangle12.png"
        alt="iPhone 14 Pro Max with Apple M1 chip"
        className="w-full rounded-t-lg shadow-md lg:shadow-none"
      />
        </div> 
      <div className="text-xs text-balance lg:text-xl">
        <div className="lg:text-[20px] text-[10px] sm:text-[14px] font-semibold">
          2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi,
          128GB)
        </div>
        <p className="sm:mt-4 mt-2 text-[8px] sm:text-base text-gray-600">
          You can rent it at the best price
        </p>
        <p className="mt-0 text-xs font-semibold lg:text-2xl">₹9,900.00 / mo</p>
        <div className="flex-col hidden lg:flex lg:flex-row lg:items-center lg:mt-2">
          <div className="flex gap-1 ">
            <img
              src="/images/star.png"
              alt=""
              className="object-cover w-7 h-7"
            />
            <img
              src="/images/star.png"
              alt=""
              className="object-cover w-7 h-7"
            />
            <img
              src="/images/star.png"
              alt=""
              className="object-cover w-7 h-7"
            />
            <img
              src="/images/star.png"
              alt=""
              className="object-cover w-7 h-7"
            />
            <img
              src="/images/star.png"
              alt=""
              className="object-cover w-7 h-7"
            />
            {/* <svg className="w-5 h-5 " fill="currentColor" viewBox="0 0 20 20">
              <path
                className=""
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.462 4.503a1 1 0 00.95.69h4.742c.969 0 1.371 1.24.588 1.81l-3.833 2.783a1 1 0 00-.364 1.118l1.462 4.503c.3.921-.755 1.688-1.538 1.118l-3.833-2.783a1 1 0 00-1.176 0l-3.833 2.783c-.783.57-1.838-.197-1.538-1.118l1.462-4.503a1 1 0 00-.364-1.118L2.06 9.93c-.783-.57-.381-1.81.588-1.81h4.742a1 1 0 00.95-.69L9.049 2.927z"
              />
            </svg>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.462 4.503a1 1 0 00.95.69h4.742c.969 0 1.371 1.24.588 1.81l-3.833 2.783a1 1 0 00-.364 1.118l1.462 4.503c.3.921-.755 1.688-1.538 1.118l-3.833-2.783a1 1 0 00-1.176 0l-3.833 2.783c-.783.57-1.838-.197-1.538-1.118l1.462-4.503a1 1 0 00-.364-1.118L2.06 9.93c-.783-.57-.381-1.81.588-1.81h4.742a1 1 0 00.95-.69L9.049 2.927z" />
            </svg>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.462 4.503a1 1 0 00.95.69h4.742c.969 0 1.371 1.24.588 1.81l-3.833 2.783a1 1 0 00-.364 1.118l1.462 4.503c.3.921-.755 1.688-1.538 1.118l-3.833-2.783a1 1 0 00-1.176 0l-3.833 2.783c-.783.57-1.838-.197-1.538-1.118l1.462-4.503a1 1 0 00-.364-1.118L2.06 9.93c-.783-.57-.381-1.81.588-1.81h4.742a1 1 0 00.95-.69L9.049 2.927z" />
            </svg>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.462 4.503a1 1 0 00.95.69h4.742c.969 0 1.371 1.24.588 1.81l-3.833 2.783a1 1 0 00-.364 1.118l1.462 4.503c.3.921-.755 1.688-1.538 1.118l-3.833-2.783a1 1 0 00-1.176 0l-3.833 2.783c-.783.57-1.838-.197-1.538-1.118l1.462-4.503a1 1 0 00-.364-1.118L2.06 9.93c-.783-.57-.381-1.81.588-1.81h4.742a1 1 0 00.95-.69L9.049 2.927z" />
            </svg> */}
          </div>
          <span className="text-[#EBBC00] text-base ml-2">0 rating</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
