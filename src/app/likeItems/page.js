"use client";
import React, { useState } from "react";
import ItemCard from "../components/Cards/ItemCard";
import EmptyState from "../profile/view-profile/EmptyState";

function page() {
  const [activeTab, setActiveTab] = useState("My Posts");
  const tabs = ["My Posts", "Favourite"];
  const likeItem = [
    {
      id: 1,
      title: "Inalsa Air Fryer Fry-Light-1400W",
      price: "₹4,627.00/mo",
      image: "/images/Rectangle1.png",
      available: true,
      like: true,
    },
    {
      id: 2,
      title: "Oneplus Bullets Z2 Bluetooth Wireless",
      price: "₹1,699.00/mo",
      image: "/images/Rectangle2.png",
      available: true,
      like: true,
    },
    {
      id: 3,
      title: "New Fastrack Reflex Play| AMOLED Display",
      price: "₹5,699.00/mo",
      image: "/images/Rectangle3.png",
      available: true,
      like: true,
    },
    {
      id: 4,
      title: "Apple iPhone 13 (128GB) - Green",
      price: "₹76,900.00/mo",
      image: "/images/Rectangle4.png",
      available: true,
      like: true,
    },
  ];
  return (
    <>
      <div className="pb-4 mb-24 -mt-4 container mx-auto  w-[90%] min-[375px]:w-[85%] overflow-hidden  ">
        <div className="w-full mx-auto mt-10  bg-white rounded-lg">
          {/* <EmptyState /> */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="-mb-px flex gap-24 w-full ml-8">
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
          {activeTab === "My Posts" && (
            <div className=" mx-auto">
              <section className="w-full">
                <div className="flex-1 mr-0  flex-col flex justify-center">
                  <div className="flex justify-between">
                    {likeItem.map((item) => (
                      <ItemCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              </section>
            </div>
          )}
          {activeTab === "Favourite" && (
            <div className=" w-full min-[375px]:w-4/5 mx-auto h-80">
              <h2 className="text-center text-lg font-semibold text-[#005D76]">
                Notifications
              </h2>
              <div className="my-8 ">
                <div className="flex justify-between items-center">
                  <div className="my-4">
                    <p className="font-medium">Receive updates & Offers</p>
                    <p className="text-[#938E8E] text-sm">
                      Get notified for special offers, updates and more
                    </p>
                  </div>
                  <div></div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="my-4 mb-10">
                    <p className="font-medium">Receive updates & Offers</p>
                    <p className="text-[#938E8E] text-sm">
                      Get notified for special offers, updates and more
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default page;
