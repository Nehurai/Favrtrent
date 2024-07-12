"use client";
import React, { useState } from "react";
import { FaSearch, FaHeart } from "react-icons/fa";
import { IoMdArrowDropdown, IoIosNotificationsOutline } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import { FiMapPin } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa6";
import { Popover } from "@headlessui/react";
import { FaChevronRight } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import LoggedInNavbar from "./LoggedInNavbar";
import LoggedOutNavbar from "./LoggedOutNavbar";
import Link from "next/link";

const Navbar = () => {
  const [location, setLocation] = useState("Delhi, 110010");
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [isLocation, setIsLocation] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  const showDropDown = () => {
    setIsDropDownVisible(true);
  };

  return (
    <>
      <div className="w-[90%] sm:w-[85%] mx-auto mb-8 overflow-hidden">
        <nav className="bg-white ">
          <div className=" mx-auto  py-2 flex  items-center justify-between">
            <div className="flex items-center space-x-16 w-[48%]">
              {/* <div className="text-2xl font-bold">Rent</div> */}
              <Link href="/" className="lg:text-3xl text-sm font-semibold mb-2">
                Re<span className="font-extralight">nt</span>{" "}
              </Link>
              <div className="relative flex items-center w-full">
                <input
                  type="text"
                  className="w-full py-2 px-4 border rounded-lg  focus:outline-none"
                  placeholder="What are you searching for?"
                />
                <button className="absolute   right-0 mr-2 bg-custom-blue text-customBlue p-2 rounded-r-lg">
                  <FaSearch className="text-[#808080]" />
                </button>
              </div>
            </div>
            <div
              className={`flex items-center w-[44%] ${
                isLoggedIn ? " justify-between" : " justify-end "
              }`}
            >
              <div className="flex gap-2 items-center">
                <img
                  src="/images/flagIndia.png"
                  alt="flag"
                  className="h-6 w-8 object-contain"
                />
                <p className="text-base font-semibold">English</p>
                <IoMdArrowDropdown className="-ml-1" />
              </div>
              {isLoggedIn ? (
                <LoggedInNavbar toggleNotifications={toggleNotifications} />
              ) : (
                <LoggedOutNavbar />
              )}
            </div>
          </div>
          <div className=" mx-auto py-2 flex justify-between items-center">
            <button className="flex items-center gap-2 bg-customBlue py-3 px-4 text-white rounded-lg">
              <FiMapPin className="text-xl" />{" "}
              <span className="text-base">Delhi, 110078 </span> <FaAngleDown />
            </button>
            <a href="#" className="text-base text-[#606060] -ml-2">
              Fresh
            </a>
            <a href="#" className="text-base text-[#606060]">
              Today's Deals
            </a>
            <a href="#" className="text-base text-[#606060]">
              Dresses
            </a>
            <a href="#" className="text-base text-[#606060]">
              Tops and Blouses
            </a>
            <a href="#" className="text-base text-[#606060]">
              Skirts
            </a>
            <a href="#" className="text-base text-[#606060]">
              Shoes
            </a>
            <a href="#" className="text-base text-[#606060]">
              Handbags
            </a>
            <a href="#" className="text-base text-[#606060]">
              Jewelry
            </a>
            <a href="#" className="text-base text-[#606060]">
              Sunglasses
            </a>
            <a href="#" className="text-base text-[#606060]">
              Hats and Caps
            </a>
            {/* <Popover */}

            <a
              href="#"
              className="text-black font-semibold"
              onMouseOver={showDropDown}
              onClick={() => setIsDropDownVisible(false)}
            >
              All Categories
            </a>
          </div>
        </nav>
      </div>
      <div
        className="bg-customBlue rounded-full w-20 h-20 absolute top-16 -left-12 cursor-pointer "
        onClick={() => setIsLocation(true)}
      >
        <FaChevronRight
          className="relative left-12 top-[35%]"
          size="20px"
          color="white"
        />
      </div>
      {isLocation ? (
        <div className="w-[600px] absolute top-0 ">
          <div className="w-full shadow-lg p-6 text-center absolute bg-white z-50 transform ease-in-out  duration-1000">
            <div className="flex justify-between items-center mb-7">
              <p className="text-3xl font-medium">Select Delivery Location</p>
              <button className="bg-customBlue w-[70px] h-[70px] rounded-full flex justify-center items-center">
                <MdClose
                  size="35px"
                  color="white"
                  onClick={() => setIsLocation(false)}
                />
              </button>
            </div>
            <div className="relative flex items-center w-full">
              <input
                type="text"
                className="w-[95%] text-[#808080] text-base py-2 px-4 border rounded-lg  focus:outline-none mx-auto"
                placeholder="Enter your pincode"
              />
              <button className="absolute   right-0 mr-4 bg-custom-blue text-customBlue p-2 rounded-r-lg">
                <FaSearch className="text-[#808080]" />
              </button>
            </div>
            <p className="text-[15px] font-medium my-4 mb-6">
              current selected pincode -{" "}
              <span className="font-semibold text-[17px] ">110078</span>{" "}
            </p>
            <p className="text-2xl font-normal  ">OR SELECT YOUR CITY</p>
            <div className="w-[90%] mx-auto my-10">
              <div className="grid grid-cols-5 gap-4 my-8 text-[#606060] text-sm">
                <div className="w-[70px] ">
                  <img
                    src="/images/Rectangle80.png"
                    alt=""
                    className="max-w-[70px] max-h-[70px]"
                  />
                  <p className="">Bangalore</p>
                </div>
                <div className="w-[70px]">
                  <img
                    src="/images/Rectangle 81.png"
                    alt=""
                    className="max-w-[70px] max-h-[70px]"
                  />

                  <p className="">Mumbai</p>
                </div>
                <div className="w-[70px]">
                  <img
                    src="/images/Rectangle 82.png"
                    alt=""
                    className="max-w-[70px] max-h-[70px]"
                  />

                  <p className="">Pune</p>
                </div>
                <div className="w-[70px]">
                  <img
                    src="/images/Rectangle 83.png"
                    alt=""
                    className="max-w-[70px] max-h-[70px]"
                  />

                  <p className="">Delhi</p>
                </div>
                <div className="w-[70px]">
                  <img
                    src="/images/Rectangle 84.png"
                    alt=""
                    className="max-w-[70px] max-h-[70px]"
                  />

                  <p className=""> Noida</p>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-4 my-8 text-[#606060] text-sm">
                <div className="w-[70px] ">
                  <img
                    src="/images/Rectangle80.png"
                    alt=""
                    className="max-w-[70px] max-h-[70px]"
                  />
                  <p className="">Bangalore</p>
                </div>
                <div className="w-[70px]">
                  <img
                    src="/images/Rectangle 81.png"
                    alt=""
                    className="max-w-[70px] max-h-[70px]"
                  />

                  <p className="">Mumbai</p>
                </div>
                <div className="w-[70px]">
                  <img
                    src="/images/Rectangle 82.png"
                    alt=""
                    className="max-w-[70px] max-h-[70px]"
                  />

                  <p className="">Pune</p>
                </div>
                <div className="w-[70px]">
                  <img
                    src="/images/Rectangle 83.png"
                    alt=""
                    className="max-w-[70px] max-h-[70px]"
                  />

                  <p className="">Delhi</p>
                </div>
                <div className="w-[70px]">
                  <img
                    src="/images/Rectangle 84.png"
                    alt=""
                    className="max-w-[70px] max-h-[70px]"
                  />

                  <p className=""> Noida</p>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-4 my-8 text-[#606060] text-sm">
                <div className="w-[70px] ">
                  <img
                    src="/images/Rectangle80.png"
                    alt=""
                    className="max-w-[70px] max-h-[70px]"
                  />
                  <p className="">Bangalore</p>
                </div>
                <div className="w-[70px]">
                  <img
                    src="/images/Rectangle 81.png"
                    alt=""
                    className="max-w-[70px] max-h-[70px]"
                  />

                  <p className="">Mumbai</p>
                </div>
                <div className="w-[70px]">
                  <img
                    src="/images/Rectangle 82.png"
                    alt=""
                    className="max-w-[70px] max-h-[70px]"
                  />

                  <p className="">Pune</p>
                </div>
                <div className="w-[70px]">
                  <img
                    src="/images/Rectangle 83.png"
                    alt=""
                    className="max-w-[70px] max-h-[70px]"
                  />

                  <p className="">Delhi</p>
                </div>
                <div className="w-[70px]">
                  <img
                    src="/images/Rectangle 84.png"
                    alt=""
                    className="max-w-[70px] max-h-[70px]"
                  />

                  <p className=""> Noida</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {isDropDownVisible ? (
        <div className="relative w-[90%] sm:w-[85%] mx-auto h-auto mt-4">
          <div className="absolute z-10 bg-white p-4  rounded w-full">
            <div className="flex justify-between gap-12 w-full">
              <div>
                <h2 className=" text-2xl text-black">All Categories</h2>
                <div className="grid grid-cols-4 gap-8 mt-2">
                  <div>
                    <ul className="text-base text-[#606060]">
                      <li className="my-2.5">Dresses</li>
                      <li className="my-2.5">Tops</li>
                      <li className="my-2.5">Blouses</li>
                      <li className="my-2.5">Jeans</li>
                      <li className="my-2.5">Pants</li>
                      <li className="my-2.5">Skirts</li>
                      <li className="my-2.5">Shoes</li>
                      <li className="my-2.5">Heels</li>
                      <li className="my-2.5">Boots</li>
                      <li className="my-2.5">Sneakers</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-base text-[#606060]">
                      <li className="my-2.5">Handbags</li>
                      <li className="my-2.5">Jewelry</li>
                      <li className="my-2.5">Necklaces</li>
                      <li className="my-2.5">Earrings</li>
                      <li className="my-2.5">Bracelets</li>
                      <li className="my-2.5">Sunglasses</li>
                      <li className="my-2.5">Hats</li>
                      <li className="my-2.5">Caps</li>
                      <li className="my-2.5">Scarves</li>
                      <li className="my-2.5">Straighteners</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-base text-[#606060]">
                      <li className="my-2.5">Curling Irons</li>
                      <li className="my-2.5">Workout clothes</li>
                      <li className="my-2.5">Sneakers</li>
                      <li className="my-2.5">Yoga mats</li>
                      <li className="my-2.5">Fitness trackers</li>
                      <li className="my-2.5">Water bottles</li>
                      <li className="my-2.5">Bedding</li>
                      <li className="my-2.5">Pillows</li>
                      <li className="my-2.5">Books</li>
                      <li className="my-2.5">Musical instruments</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-base text-[#606060]">
                      <li className="my-2.5">Sunglasses</li>
                      <li className="my-2.5">Watches</li>
                      <li className="my-2.5">Hats</li>
                      <li className="my-2.5">Caps</li>
                      <li className="my-2.5">Designer handbags</li>
                      <li className="my-2.5">Gift cards</li>
                      <li className="my-2.5">Stationery</li>
                      <li className="my-2.5">Pet accessories</li>
                      <li className="my-2.5">Boots</li>
                      <li className="my-2.5">Sneakers</li>
                    </ul>
                  </div>
                </div>
              </div>
              <img
                src="https://s3-alpha-sig.figma.com/img/925e/66ab/bfa55f39ded78e1252c31df29cb8ede7?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ts7tuPnbpdCtuM4Z7CVOpOexzt7LVy3RFot2AZxtMUpB6DAPm0wOLtzBiSZAMW8UvoQ7NzNlKUDPuN~Su2UYe-2oDO~BDK05FhdFf30msXxM7WSAiZmqXV6-HI~VG-BSAwdN7KR55rFUDy3oy2PTgQh8Wanphx9QwlyueAq8QDMb~3c1kSBQeozjKYT8nXvJRHLs8lxJjYr-XlmI3nHyeSA9sWzcFqeklWgftE5bJO0nwswsUUDckdtP9ry9i8yB9aZzX~r8cb1vfc-yF-~MAweY2wDXK27RFWiyLOQ8-7CBADyufvyzeJJ7nmUM0v5lDMhgjOJocO2~QEhG5cxRSg__"
                alt=""
                className="w-[450px] h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* {isNotificationsOpen && (
        <div className="absolute right-10 top-16 w-96 bg-white shadow-lg rounded-lg">
          <div className="p-4 border-b border-gray-200 flex justify-between">
            <h3 className="text-lg font-semibold">Notifications</h3>
            <button className="text-blue-500 text-sm">Mark read to all</button>
          </div>
          <div className="p-4">
            <div className="flex items-center mb-4">
              <img
                src="https://s3-alpha-sig.figma.com/img/0032/2573/83698f9a5030dead064afa3b60692d9d?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jztn5pOOw3eGpUhnlw6NCjfQWSA1COH8F2jaIIjGgSLRH-lbi6cZJpbw-0ZFF5R9UgUzd0eC3MSbAdooZ8PBAuTS36m5ZgXEHYlend6JZIyWgNxW3k2CYqn1Rrnn3ZPM3OSKOkZ95X05-BcsgeR~HazHtkEftRaS6GeB0YKW4o~RGwADO5wsUJQhmNThW8EiPronhpdBlO8B8aKjr7Ar-gc4hq5B1w0KDNJcolZitOPbCmPWbazy4CKCaV~d4Kw7IaukP56HAXWGWZGkbqcEBuTFlBuz1N2r1wjigaVERSS~6F0DhQ6iX90ylqMS~qV91DYn7fEN~FqNe4WMMFlPKg__"
                alt="profile"
                className="h-10 w-10 rounded-full mr-4"
              />
              <div className="flex flex-col">
                <span className="font-semibold">Rohan Sharma</span>
                <span className="text-sm text-gray-500">Today</span>
                <span>Rohan Sharma wants to contact you.</span>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="https://s3-alpha-sig.figma.com/img/0032/2573/83698f9a5030dead064afa3b60692d9d?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jztn5pOOw3eGpUhnlw6NCjfQWSA1COH8F2jaIIjGgSLRH-lbi6cZJpbw-0ZFF5R9UgUzd0eC3MSbAdooZ8PBAuTS36m5ZgXEHYlend6JZIyWgNxW3k2CYqn1Rrnn3ZPM3OSKOkZ95X05-BcsgeR~HazHtkEftRaS6GeB0YKW4o~RGwADO5wsUJQhmNThW8EiPronhpdBlO8B8aKjr7Ar-gc4hq5B1w0KDNJcolZitOPbCmPWbazy4CKCaV~d4Kw7IaukP56HAXWGWZGkbqcEBuTFlBuz1N2r1wjigaVERSS~6F0DhQ6iX90ylqMS~qV91DYn7fEN~FqNe4WMMFlPKg__"
                alt="profile"
                className="h-10 w-10 rounded-full mr-4"
              />
              <div className="flex flex-col">
                <span className="font-semibold">Prachi</span>
                <span className="text-sm text-gray-500">Yesterday</span>
                <span>Prachi wants to contact you.</span>
              </div>
            </div>
          </div>
        </div>
      )} */}

      {/* {isNotificationsOpen && (
        <div className="absolute right-10 top-16 w-96 bg-white shadow-lg rounded-lg">
          <div className="p-4 border-b border-gray-200 flex justify-between">
            <h3 className="text-lg font-semibold">Notifications</h3>
            <button className="text-blue-500 text-sm">Mark read to all</button>
          </div>
          <div className="p-4">
            <div className="flex items-center mb-4">
              <img
                src="https://s3-alpha-sig.figma.com/img/0032/2573/83698f9a5030dead064afa3b60692d9d?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jztn5pOOw3eGpUhnlw6NCjfQWSA1COH8F2jaIIjGgSLRH-lbi6cZJpbw-0ZFF5R9UgUzd0eC3MSbAdooZ8PBAuTS36m5ZgXEHYlend6JZIyWgNxW3k2CYqn1Rrnn3ZPM3OSKOkZ95X05-BcsgeR~HazHtkEftRaS6GeB0YKW4o~RGwADO5wsUJQhmNThW8EiPronhpdBlO8B8aKjr7Ar-gc4hq5B1w0KDNJcolZitOPbCmPWbazy4CKCaV~d4Kw7IaukP56HAXWGWZGkbqcEBuTFlBuz1N2r1wjigaVERSS~6F0DhQ6iX90ylqMS~qV91DYn7fEN~FqNe4WMMFlPKg__"
                alt="profile"
                className="h-10 w-10 rounded-full mr-4"
              />
              <div className="flex flex-col">
                <span className="font-semibold">Rohan Sharma</span>
                <span className="text-sm text-gray-500">Today</span>
                <span>Rohan Sharma wants to contact you.</span>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="https://s3-alpha-sig.figma.com/img/0032/2573/83698f9a5030dead064afa3b60692d9d?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jztn5pOOw3eGpUhnlw6NCjfQWSA1COH8F2jaIIjGgSLRH-lbi6cZJpbw-0ZFF5R9UgUzd0eC3MSbAdooZ8PBAuTS36m5ZgXEHYlend6JZIyWgNxW3k2CYqn1Rrnn3ZPM3OSKOkZ95X05-BcsgeR~HazHtkEftRaS6GeB0YKW4o~RGwADO5wsUJQhmNThW8EiPronhpdBlO8B8aKjr7Ar-gc4hq5B1w0KDNJcolZitOPbCmPWbazy4CKCaV~d4Kw7IaukP56HAXWGWZGkbqcEBuTFlBuz1N2r1wjigaVERSS~6F0DhQ6iX90ylqMS~qV91DYn7fEN~FqNe4WMMFlPKg__"
                alt="profile"
                className="h-10 w-10 rounded-full mr-4"
              />
              <div className="flex flex-col">
                <span className="font-semibold">Prachi</span>
                <span className="text-sm text-gray-500">Yesterday</span>
                <span>Prachi wants to contact you.</span>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default Navbar;
