"use client";
import { useState } from "react";
import Link from "next/link";

const EditProfile = () => {
  const [activeTab, setActiveTab] = useState("basic");

  return (
    <>
      <div className="bg-[#005D760D] h-20 flex items-center">
        <div className="flex justify-between w-[85%] mx-auto ">
          <h1 className="text-[#005D76] text-3xl">Edit Profile</h1>
          <p className="flex items-center  max-[500px]:hidden">
            <Link href="/profile/view-profile" className="text-[#005D76]">
              click here to view your profile
            </Link>
          </p>
        </div>
      </div>
      <div className="my-8  container mx-auto  w-[90%] min-[375px]:w-[85%]  ">
        <div className="w-full mx-auto mt-10 p-6 bg-white rounded-lg border">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <img
                className="h-24 w-24 object-cover rounded-full"
                src="https://s3-alpha-sig.figma.com/img/0032/2573/83698f9a5030dead064afa3b60692d9d?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=msf77sR8O51ZVApiNUDuxgZ7s~jkYZbxza-objAhue8~JbnizPFrOlbv2m9wvGhDo8I9e58ZYRq1vw8q7HwvlJI6I7D5tbZYlTm5dh5ldkDO9TdwWAEWN1JeG8-Y~4j1f5jO-UDWMXmBuCHPQhM2XmF7FE2syW9N8T6pP31wnTh5-ERbD5gkoVTdbjMM7aYJltTScGu0xh1XVoHylcMK6AiWh1BMvkjLo32kRJknmgU2uLwhqJZ7dWx4ju9UH7VZYgXd5e0tx4TeCpPCS0Uvf~vzth0xcifWwfCmLS4jz1g8MhVktnv-XYjupTkSicU6R5cHHfdPoWjH~rCQ026I9A__"
                alt="Profile Picture"
                width={50}
                height={50}
              />
              <span className="absolute bottom-0 right-0 w-12  h-8 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs">
                Upload
              </span>
            </div>
          </div>
          <div className="border-b border-gray-200 mb-6">
            <nav className="-mb-px flex justify-between w-full min-[375px]:w-4/5 mx-auto ">
              <button
                onClick={() => setActiveTab("basic")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "basic"
                    ? "border-teal-500 text-teal-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Basic information
              </button>
              <button
                onClick={() => setActiveTab("contact")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "contact"
                    ? "border-teal-500 text-teal-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Contact information
              </button>
              <button
                onClick={() => setActiveTab("additional")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "additional"
                    ? "border-teal-500 text-teal-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Additional information
              </button>
            </nav>
          </div>
          {activeTab === "basic" && (
            <div className="space-y-6  w-full min-[375px]:w-4/5 mx-auto">
              <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Name"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
                <div className="flex-1">
                  <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500">
                    <option>Female</option>
                    <option>Male</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <textarea
                  rows="4"
                  placeholder=" About me (optional)"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                ></textarea>
              </div>
            </div>
          )}
          {activeTab === "contact" && (
            <div className="space-y-6">
              {/* Add contact information fields here */}
              <div className="text-center">Contact Information Form</div>
            </div>
          )}
          {activeTab === "additional" && (
            <div className="space-y-6">
              {/* Add additional information fields here */}
              <div className="text-center">Additional Information Form</div>
            </div>
          )}
          <div className="mt-6 flex justify-between w-full min-[375px]:w-4/5 mx-auto">
            <button className="bg-transparent border border-[#005D76] text-[#005D76] px-4 py-2 rounded-md">
              Discard
            </button>
            <button className="bg-[#005D76] text-white px-4 py-2 rounded-md">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
