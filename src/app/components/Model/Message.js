import React from "react";
import Image from "next/image";
import msg from "../../../../public/Images/msg.png";

function Message() {
  return (
    <>
      <Image
        src={msg}
        alt=""
        width={169}
        className="mx-auto w-[160px] h-[165px]"
      />
      <h3 className="my-5 text-xl font-semibold text-gray-900  text-center">
        Write a message to meet
      </h3>
      <p className="hidden text-center text-sm text-[#606060] my-5">
        Fill the form just once to get faster response, We will share your
        details with the owner.
      </p>
      <form className="space-y-4" action="#">
        <div>
          <textarea
            name="msg"
            id=""
            placeholder="Write your message here"
            // cols={8}
            rows={8}
            className="border border-gray-300 text-[#938E8E] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full  text-white bg-[#005D76]  hover:bg-[#076f8b] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center "
        >
          Send Message
        </button>
      </form>
    </>
  );
}

export default Message;
