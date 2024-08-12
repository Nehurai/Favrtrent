"use client";
import React, { useState } from "react";
import ToggleSwitch from "./ToggleSwitch.js";

function Setting() {
  const [activeTab, setActiveTab] = useState("Privacy");

  const tabs = [
    "Privacy",
    "Notifications",
    "Logout from all devices",
    "Delete account",
    "Chat safety tips",
  ];
  return (
    <>
      <div className="my-8  container mx-auto  w-[90%] min-[375px]:w-[85%] overflow-hidden  ">
        <div className="w-full mx-auto mt-10 bg-white border rounded-lg">
          <div className="hidden mb-6 border-b border-gray-200 sm:block">
            <nav className="flex justify-around w-full mx-auto -mb-px ">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 pb-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab
                      ? "border-[#005D76] text-[#005D76]"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
          {/* Dropdown for smaller screens */}
          <div className="block mb-4 sm:hidden">
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className="w-full p-2 border-b border-gray-300 rounded-md"
            >
              {tabs.map((tab) => (
                <option className="1  `" key={tab} value={tab}>
                  {tab}
                </option>
              ))}
            </select>
          </div>
          {activeTab === "Privacy" && (
            <div className=" w-[90%] min-[375px]:w-4/5 mx-auto h-80">
              <p className="text-center text-[#005D76] text-lg font-medium">
                Create Password
              </p>
              <div className="flex flex-col gap-4 my-8 md:flex-row md:space-x-4">
                <div className="flex-1">
                  <input
                    type="password"
                    placeholder="New password"
                    className="mt-1 block w-full min-[375px]:w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="password"
                    placeholder="Confirm new password"
                    className="mt-1 block w-full min-[375px]:w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
              </div>
              <p className="-mt-6 text-[#938E8E] text-sm">
                Use minimum 6 characters, and at least one letter and one number
              </p>
              <div className="my-12 flex justify-center w-4/5 min-[375px]:w-4/5 mx-auto">
                <button className="bg-[#005D76] text-white px-4 py-2 rounded-md">
                  Create Password
                </button>
              </div>
            </div>
          )}
          {activeTab === "Notifications" && (
            <div className=" w-full min-[375px]:w-4/5 mx-auto h-80">
              <h2 className="text-center text-lg font-semibold text-[#005D76]">
                Notifications
              </h2>
              <div className="my-8 ">
                <div className="flex items-center justify-between">
                  <div className="my-4">
                    <p className="font-medium">Receive updates & Offers</p>
                    <p className="text-[#938E8E] text-sm">
                      Get notified for special offers, updates and more
                    </p>
                  </div>
                  <div>
                    <ToggleSwitch />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="my-4 mb-10">
                    <p className="font-medium">Receive updates & Offers</p>
                    <p className="text-[#938E8E] text-sm">
                      Get notified for special offers, updates and more
                    </p>
                  </div>
                  <div>
                    <ToggleSwitch />
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "Logout from all devices" && (
            <div className=" w-[90%] min-[375px]:w-4/5 mx-auto h-80">
              <p className="text-center text-[#005D76] text-lg font-medium">
                Logout from all devices
              </p>
              <div className="flex flex-col gap-4 my-8 md:flex-row md:justify-between">
                <div className="">
                  <p>Logout from everywhere</p>
                  <p className="text-[#938E8E] text-sm">
                    Youll get logged out from all devices and browsers. Do you
                    still want to continue?
                  </p>
                </div>
                <div className="">
                  <button className="mt-1 block w-full p-2 border text-gray-100 text-base  rounded-lg shadow-sm bg-[#005D76] ">
                    Logout from everywhere
                  </button>
                </div>
              </div>
            </div>
          )}
          {activeTab === "Delete account" && (
            <div className=" w-[90%] min-[375px]:w-4/5 mx-auto h-80">
              <p className="text-center text-[#005D76] text-lg font-medium">
                Delete your account
              </p>
              <div className="flex flex-col gap-4 my-8 md:flex-row md:justify-between">
                <div className="">
                  <p>Delete account</p>
                  <p className="text-[#938E8E] text-sm">
                    You are about to permanently delete your account. Are you
                    sure about this?
                  </p>
                </div>
                <div className="">
                  <button className="mt-1 block w-full p-2 border text-gray-100 text-base  rounded-lg shadow-sm bg-[#005D76] ">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
          {activeTab === "Chat safety tips" && (
            <div className=" w-full min-[375px]:w-4/5 mx-auto h-80">
              <p className="text-center text-[#005D76] text-lg font-medium">
                Chat safety tips
              </p>
              <div className="flex flex-row justify-between my-8 md:space-x-4">
                <div className="">
                  <p>Safety tips</p>
                  <p className="text-[#938E8E] text-sm">
                    Receive safety tips based on your chat activity
                  </p>
                </div>
                <div className="">
                  <ToggleSwitch />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Setting;
