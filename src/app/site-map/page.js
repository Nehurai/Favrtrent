"use client";
import React, { useState } from "react";

function SiteMap() {
  const [activeTab, setActiveTab] = useState("Most Popular");

  const tabs = [
    "Most Popular",
    "Categories",
    "States",
    "Cities",
    "Popular Searches",
  ];
  return (
    <>
      <div className="my-8  container mx-auto  w-[90%] min-[375px]:w-[85%] overflow-hidden  ">
        <div className="w-full mx-auto mt-10  bg-white rounded-lg border">
          <div className="hidden sm:block border-b border-gray-200 mb-6">
            <nav className="-mb-px flex justify-around w-full  mx-auto ">
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
          <div className="block sm:hidden">
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className="w-full border-b border-gray-300 rounded-md p-2"
            >
              {tabs.map((tab) => (
                <option key={tab} value={tab}>
                  {tab}
                </option>
              ))}
            </select>
          </div>
          <div className="p-8 pt-4">
            {activeTab === "Most Popular" && (
              <>
                <div className="">
                  <h1 className="text-customBlue text-xl font-medium text-center">
                    Categories
                  </h1>
                  <p className="text-base text-[#938E8E] text-center my-2">
                    Browse through some of our most popular categories.
                  </p>
                  <div className=" my-10 mb-6">
                    <ul className="flex justify-center flex-wrap gap-8">
                      <li className="flex justify-between items-center py-2.5 px-2 ">
                        {" "}
                        <p className="flex items-center gap-3">
                          {" "}
                          <span className="h-10 w-10 rounded-full bg-[#005D761A] flex items-center justify-center">
                            <img
                              src="/images/dresses.png"
                              className=" object-fill h-5"
                              alt=""
                            />{" "}
                          </span>
                          <span>Dresses</span>{" "}
                        </p>{" "}
                      </li>
                      <li className="flex justify-between items-center py-2.5 px-2 ">
                        {" "}
                        <p className="flex items-center gap-3">
                          {" "}
                          <span className="h-10 w-10 rounded-full bg-[#005D761A] flex items-center justify-center">
                            <img
                              src="/images/shoes.png"
                              className=" object-fill h-4"
                              alt=""
                            />
                          </span>
                          <span> Shoes</span>{" "}
                        </p>
                      </li>
                      <li className="flex justify-between items-center py-2.5 px-2  ">
                        {" "}
                        <p className="flex items-center gap-3">
                          {" "}
                          <span className="h-10 w-10 rounded-full bg-[#005D761A] flex items-center justify-center">
                            <img
                              src="/images/sunglasses.png"
                              className=" object-contain h-3 w-5"
                              alt=""
                            />
                          </span>
                          <span> Sunglasses</span>{" "}
                        </p>
                      </li>
                      <li className="flex justify-between items-center py-2.5 px-2  ">
                        {" "}
                        <p className="flex items-center gap-3">
                          {" "}
                          <span className="h-10 w-10 rounded-full bg-[#005D761A] flex items-center justify-center">
                            <img
                              src="/images/handbag.png"
                              className=" object-fill h-5"
                              alt=""
                            />
                          </span>
                          <span>Handbags</span>{" "}
                        </p>{" "}
                      </li>
                      <li className="flex justify-between items-center py-2.5 px-2  ">
                        {" "}
                        <p className="flex items-center gap-3">
                          {" "}
                          <span className="h-10 w-10 rounded-full bg-[#005D761A] flex items-center justify-center">
                            <img
                              src="/images/jewelery.png"
                              className=" object-fill h-4"
                              alt=""
                            />{" "}
                          </span>
                          <span>Jewelary</span>{" "}
                        </p>{" "}
                      </li>
                      <li className="flex justify-between items-center py-2.5 px-2 ">
                        {" "}
                        <p className="flex items-center gap-3">
                          {" "}
                          <span className="h-10 w-10 rounded-full bg-[#005D761A] flex items-center justify-center">
                            <img
                              src="/images/hats.png"
                              className=" object-fill h-4"
                              alt=""
                            />{" "}
                          </span>
                          <span> Hats</span>{" "}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <hr />
                <div className="mt-10">
                  <h1 className="text-customBlue text-xl font-medium text-center">
                    Locations
                  </h1>
                  <p className="text-base text-[#938E8E] text-center my-2">
                    Browse through some of our most popular locations.
                  </p>
                  <div className=" my-10 mb-6">
                    <ul className="flex justify-center flex-wrap gap-8">
                      <li className="flex justify-between items-center py-2.5 px-2 ">
                        {" "}
                        <p className="flex items-center gap-3">
                          {" "}
                          <span className="h-10 w-10 rounded-full bg-[#005D761A] text-customBlue flex items-center justify-center">
                            01
                          </span>
                          <span>Maharastra</span>{" "}
                        </p>{" "}
                      </li>
                      <li className="flex justify-between items-center py-2.5 px-2 ">
                        {" "}
                        <p className="flex items-center gap-3">
                          {" "}
                          <span className="h-10 w-10 rounded-full bg-[#005D761A] text-customBlue flex items-center justify-center">
                            02
                          </span>
                          <span> Uttar Pradesh</span>{" "}
                        </p>
                      </li>
                      <li className="flex justify-between items-center py-2.5 px-2  ">
                        {" "}
                        <p className="flex items-center gap-3">
                          {" "}
                          <span className="h-10 w-10 rounded-full bg-[#005D761A] text-customBlue flex items-center justify-center">
                            03
                          </span>
                          <span>Kerala</span>{" "}
                        </p>
                      </li>
                      <li className="flex justify-between items-center py-2.5 px-2  ">
                        {" "}
                        <p className="flex items-center gap-3">
                          {" "}
                          <span className="h-10 w-10 rounded-full bg-[#005D761A] text-customBlue flex items-center justify-center">
                            04
                          </span>
                          <span>TamilNadu</span>{" "}
                        </p>{" "}
                      </li>
                      <li className="flex justify-between items-center py-2.5 px-2  ">
                        {" "}
                        <p className="flex items-center gap-3">
                          {" "}
                          <span className="h-10 w-10 rounded-full bg-[#005D761A] text-customBlue flex items-center justify-center">
                            05
                          </span>
                          <span>Karnataka</span>{" "}
                        </p>{" "}
                      </li>
                      <li className="flex justify-between items-center py-2.5 px-2 ">
                        {" "}
                        <p className="flex items-center gap-3">
                          {" "}
                          <span className="h-10 w-10 rounded-full bg-[#005D761A] text-customBlue flex items-center justify-center">
                            06
                          </span>
                          <span>Delhi</span>{" "}
                        </p>
                      </li>
                      <li className="flex justify-between items-center py-2.5 px-2 ">
                        {" "}
                        <p className="flex items-center gap-3">
                          {" "}
                          <span className="h-10 w-10 rounded-full bg-[#005D761A] text-customBlue flex items-center justify-center">
                            07
                          </span>
                          <span>Telangana</span>{" "}
                        </p>
                      </li>
                      <li className="flex justify-between items-center py-2.5 px-2 ">
                        {" "}
                        <p className="flex items-center gap-3">
                          {" "}
                          <span className="h-10 w-10 rounded-full bg-[#005D761A] text-customBlue flex items-center justify-center">
                            08
                          </span>
                          <span>Gujarat</span>{" "}
                        </p>
                      </li>
                      <li className="flex justify-between items-center py-2.5 px-2 ">
                        {" "}
                        <p className="flex items-center gap-3">
                          {" "}
                          <span className="h-10 w-10 rounded-full bg-[#005D761A] text-customBlue flex items-center justify-center">
                            09
                          </span>
                          <span>Punjab</span>{" "}
                        </p>
                      </li>
                      <li className="flex justify-between items-center py-2.5 px-2 ">
                        {" "}
                        <p className="flex items-center gap-3">
                          {" "}
                          <span className="h-10 w-10 rounded-full bg-[#005D761A] text-customBlue flex items-center justify-center">
                            10
                          </span>
                          <span>Haryana</span>{" "}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )}
            {activeTab === "Categories" && (
              <div className=" w-full min-[375px]:w-4/5 mx-auto">
                <div className="">
                  <h1 className="text-customBlue text-xl font-medium text-center">
                    Dresses
                  </h1>
                  <p className="text-base text-[#938E8E] text-center my-2">
                    List of various types of dresses
                  </p>
                  <main className="mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
                      <div>
                        <h2 className="text-xl font-semibold">
                          Casual Dresses
                        </h2>
                        <hr className="my-2 w-4/5 h-[1.2px] bg-[#00000030]" />
                        <ul className="text-[#606060]">
                          <li className="my-2">T-shirt Dress</li>
                          <li className="my-2">Sundress</li>
                          <li className="my-2">Shift Dress</li>
                          <li className="my-2">Maxi Dress</li>
                          <li className="my-2">Mini Dress</li>
                          <li className="my-2">Sweater Dress</li>
                          <li className="my-2">Shirt Dress</li>
                          <li className="my-2">Fit and Flare Dress</li>
                          <li className="my-2">Slip Dress</li>
                        </ul>
                      </div>

                      <div>
                        <h2 className="text-xl font-semibold">
                          Formal Dresses
                        </h2>
                        <hr className="my-2 w-4/5 h-[1.2px] bg-[#00000030]" />
                        <ul className="text-[#606060]">
                          <li className="my-2">Cocktail Dress</li>
                          <li className="my-2">A-Line Dress</li>
                          <li className="my-2">Mermaid Dress</li>
                          <li className="my-2">Ball Gown</li>
                          <li className="my-2">Bodycon Dress</li>
                          <li className="my-2">Peplum Dress</li>
                          <li className="my-2">Evening Gown</li>
                          <li className="my-2">High-Low Dress</li>
                          <li className="my-2">Sheath Dress</li>
                        </ul>
                      </div>

                      <div>
                        <h2 className="text-xl font-semibold">
                          Summer Dresses
                        </h2>
                        <hr className="my-2 w-4/5 h-[1.2px] bg-[#00000030]" />
                        <ul className="text-[#606060]">
                          <li className="my-2">Boho Dress</li>
                          <li className="my-2">Floral Dress</li>
                          <li className="my-2">Strapless Dress</li>
                          <li className="my-2">Off-Shoulder Dress</li>
                          <li className="my-2">Halter Dress</li>
                          <li className="my-2">Beach Dress</li>
                          <li className="my-2">Kimono Dress</li>
                          <li className="my-2">Smocked Dress</li>
                          <li className="my-2">Tiered Dress</li>
                        </ul>
                      </div>

                      <div>
                        <h2 className="text-xl font-semibold">
                          Trendy Dresses
                        </h2>
                        <hr className="my-2 w-4/5 h-[1.2px] bg-[#00000030]" />
                        <ul className="text-[#606060]">
                          <li className="my-2">Cut-Out Dress</li>
                          <li className="my-2">Asymmetrical Dress</li>
                          <li className="my-2">Denim Dress</li>
                          <li className="my-2">Bardot Dress</li>
                          <li className="my-2">Lace Dress</li>
                          <li className="my-2">Polka Dot Dress</li>
                          <li className="my-2">Tie-Dye Dress</li>
                          <li className="my-2">Animal Print Dress</li>
                          <li className="my-2">Fringe Dress</li>
                        </ul>
                      </div>
                    </div>
                  </main>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SiteMap;
