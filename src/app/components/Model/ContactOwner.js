import Image from "next/image";
import React from "react";
import phone from "../../../../public/Images/phone.png";

function ContactOwner({ handleFormSubmit }) {
  return (
    <>
      <Image
        src={phone}
        alt=""
        width={169}
        className="mx-auto w-[160px] h-[165px]"
      />
      <h3 className="mt-6 text-xl font-semibold text-gray-900  text-center">
        Contact Owner
      </h3>
      <p className="text-center text-sm text-[#606060] my-5">
        Fill the form just once to get faster response, We will share your
        details with the owner.
      </p>
      <form className="space-y-4" action="#">
        <div>
          <input
            type="text"
            name="name"
            id="name"
            className="border border-gray-300 text-[#938E8E] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
            placeholder="Enter Your Full Name*"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            className="border border-gray-300 text-[#938E8E] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
            placeholder="Enter Your Email"
            required
          />
        </div>

        <div>
          <input
            type="number"
            name="phone"
            id="phone"
            className="border border-gray-300 text-[#938E8E] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
            placeholder="Enter Number*"
            required
          />
        </div>
        <div className="flex justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300   rounded bg-gray-50 focus:ring-3  "
                required
              />
            </div>
            <label
              for="remember"
              className=" ms-2 text-sm font-medium text-[#005D76] "
            >
              I am ok to be contacted by other advertisers too
            </label>
          </div>
        </div>
        <button
          type="submit"
          onClick={handleFormSubmit}
          className="w-full  text-white bg-[#005D76]  hover:bg-[#076f8b] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center "
        >
          Request Callback
        </button>
      </form>
    </>
  );
}

export default ContactOwner;
