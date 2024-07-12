import React from "react";

function ContactUs() {
  return (
    <div className="w-[85%] mx-auto border">
      <div className="flex">
        <div className="w-[57%] pl-12 overflow-visible pt-10">
          <h1 className="font-semibold text-3xl">Contact US</h1>
          <div className="grid grid-cols-2 gap-10 relative mt-6">
            <div className="shadow-md rounded-md h-[350px] mt-8">
              <img src="/Images/image 3.png" alt="" className="object-cover " />
              <div className="py-4 px-4">
                <h2 className="text-2xl font-semibold mb-3">
                  Support Helpline
                </h2>
                <div className="text-[#606060]">
                  <p>Number:- 0000-000-0000</p>
                  <p className="my-2">Email Address: - 123@gmail.com</p>
                  <p>Email Address: - 123@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="shadow-md rounded-md overflow-visible absolute -right-16 z-20 h-[420px] w-80 bg-white">
              <img
                src="/Images/image 6.png"
                alt=""
                className="object-cover  "
              />
              <div className="py-4 px-4 z-20 relative">
                <h2 className="text-2xl font-semibold mb-3">
                  Support Helpline
                </h2>
                <div className="text-[#606060]">
                  <p>Number:- 0000-000-0000</p>
                  <p className="my-2">Email Address: - 123@gmail.com</p>
                  <p>Email Address: - 123@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[43%]">
          <img
            src="/Images/image 9.png"
            className="h-full object-cover relative"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
