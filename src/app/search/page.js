"use client";
import Image from "next/image";
import ItemCard from "../components/Cards/ItemCard";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useState } from "react";

export default function SearchPage() {
  const [price, setPrice] = useState(70);

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const items = [
    {
      id: 1,
      title: "Inalsa Air Fryer Fry-Light-1400W",
      price: "₹4,627.00/mo",
      image: "/images/Rec.jpg",
      available: true,
    },
    {
      id: 2,
      title: "Oneplus Bullets Z2 Bluetooth Wireless",
      price: "₹1,699.00/mo",
      image: "/images/Rec3.png",
      available: true,
    },
    {
      id: 3,
      title: "New Fastrack Reflex Play| AMOLED Display",
      price: "₹5,699.00/mo",
      image: "/images/Rec4.png",
      available: true,
    },

    {
      id: 4,
      title: "Samsung Galaxy Tab S8+ - Wifi Only, Graphite",
      price: "₹74,998.00/mo",
      image: "/images/Rec2.png",
      available: true,
    },
  ];
  return (
    <div className="font-poppins">
      <div className="w-full h-20 flex items-center bg-[#005D760D] my-12">
        <div className="w-[85%] mx-auto h-full flex items-center gap-2 text-[#606060] text-base">
          <span>Home</span>{" "}
          <span>
            <FaChevronRight className="inline-block text-xs text-[#606060]" />{" "}
            <FaChevronRight className="inline-block -ml-3 text-xs " />{" "}
          </span>{" "}
          <span className="text-customBlue">Dress</span>
        </div>
      </div>
      <div className="w-[85%] mx-auto  mb-16">
        <div className="flex min-h-screen gap-12 ">
          {/* Sidebar */}
          <aside className="w-[235px] hidden sm:block  bg-white rounded">
            <div>
              <h2 className="mb-4 text-xl font-medium text-customBlue">
                Dress Categories
              </h2>
              <ul className="text-[#606060]">
                <li className="my-1.5">
                  <input
                    type="checkbox"
                    id="t-shirt-dress"
                    name="t-shirt-dress"
                    className="mr-2"
                  />
                  <label htmlFor="t-shirt-dress">T-shirt Dress</label>
                </li>
                <li className="my-1.5">
                  <input
                    type="checkbox"
                    id="sundress"
                    name="sundress"
                    className="mr-2"
                  />
                  <label htmlFor="sundress">Sundress</label>
                </li>
                <li className="my-1.5">
                  <input
                    type="checkbox"
                    id="shift-dress"
                    name="shift-dress"
                    className="mr-2"
                  />
                  <label htmlFor="shift-dress">Shift Dress</label>
                </li>
                <li className="my-1.5">
                  <input
                    type="checkbox"
                    id="maxi-dress"
                    name="maxi-dress"
                    className="mr-2"
                  />
                  <label htmlFor="maxi-dress">Maxi Dress</label>
                </li>
                <li className="my-1.5">
                  <input
                    type="checkbox"
                    id="mini-dress"
                    name="mini-dress"
                    className="mr-2"
                  />
                  <label htmlFor="mini-dress">Mini Dress</label>
                </li>
                <li className="my-1.5">
                  <input
                    type="checkbox"
                    id="sweater-dress"
                    name="sweater-dress"
                    className="mr-2"
                  />
                  <label htmlFor="sweater-dress">Sweater Dress</label>
                </li>
                <li className="my-1.5">
                  <input
                    type="checkbox"
                    id="shirt-dress"
                    name="shirt-dress"
                    className="mr-2"
                  />
                  <label htmlFor="shirt-dress">Shirt Dress</label>
                </li>
                <li className="my-1.5">
                  <input
                    type="checkbox"
                    id="fit-and-flare-dress"
                    name="fit-and-flare-dress"
                    className="mr-2"
                  />
                  <label htmlFor="fit-and-flare-dress">
                    Fit and Flare Dress
                  </label>
                </li>
              </ul>
            </div>
            <div className="my-8">
              <h2 className="mb-4 text-xl font-medium text-customBlue">
                Filter by price
              </h2>
              <div className="flex justify-between">
                <span className="text-[#606060]">Price: $0 — ${price}</span>{" "}
                <span className="font-bold text-customBlue">Filter</span>{" "}
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={price}
                onChange={handlePriceChange}
                className="w-full text-customBlue bg-customBlue accent-customBlue hover:accent-customBlue"
              />
            </div>
            <div>
              <h2 className="mb-2 text-xl font-medium text-customBlue">
                Product Status
              </h2>
              <ul className="text-[#606060]">
                <li className="my-1.5">
                  <input
                    type="checkbox"
                    id="in-stock"
                    name="in-stock"
                    className="mr-2"
                  />
                  <label htmlFor="in-stock">In Stock</label>
                </li>
                <li className="my-1.5">
                  <input
                    type="checkbox"
                    id="on-rent"
                    name="on-rent"
                    className="mr-2"
                  />
                  <label htmlFor="on-rent">On Rent</label>
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <img src="Images/Rectangle 141724.png" alt="" />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="overflow-hidden bg-white rounded shadow-md">
              <Image
                src="/Images/Rectangle 141725.png"
                alt="Dress Image"
                width={1176}
                height={247}
                layout="responsive"
              />
            </div>
            {/* <div className="mt-4"> */}
            <div className=" text-left mt-4 bg-[#005D760D] h-20 flex items-center">
              <button
                type="button"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium rounded-md text-customBlue hover:bg-gray-50 "
                id="options-menu"
                aria-expanded="true"
                aria-haspopup="true"
              >
                Sort by latest
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            {/* </div> */}
            <div className="grid grid-cols-2 gap-6 mt-10 lg:grid-cols-3 xl:grid-cols-4 lg:gap-4 ">
              {items.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            {/* </div> */}
            {/* <div className="grid grid-cols-2 gap-6 mt-10 lg:grid-cols-4 lg:gap-4 "> */}
              {items.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            {/* </div> */}
            {/* <div className="grid grid-cols-2 gap-6 mt-10 lg:grid-cols-4 lg:gap-4 "> */}
              {items.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
