"use client";
import React, { useState,useEffect } from "react";
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
import { BiSolidDashboard } from "react-icons/bi";
import { ImCross } from "react-icons/im";

import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState("Delhi, 110010");
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [isLocation, setIsLocation] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  const showDropDown = () => {
    setIsDropDownVisible(true);
  };

  return (
    <>
      <div className="w-[90%] sm:w-[85%] mx-auto overflow-hidden">
        <nav className="bg-white ">
          <div className="flex items-center justify-between py-2 mx-auto ">
            <div className="flex items-center space-x-16 w-[30%] md:w-[48%]">
              {/* <div className="text-2xl font-bold">Rent</div> */}
              <Link href="/" className="mb-2 text-sm font-semibold lg:text-3xl">
                Re<span className="font-extralight">nt</span>{" "}
              </Link>
              <div className="relative flex items-center w-full">
                <input
                  type="text"
                  className="hidden w-full px-4 py-2 border rounded-lg sm:block focus:outline-none"
                  placeholder="What are you searching for?"
                />
                <button className="absolute right-0 p-2 mr-2 rounded-r-lg bg-custom-blue text-customBlue">
                  <FaSearch className="text-[#808080]" />
                </button>
              </div>
            </div>
            <div
              className={`flex items-center w-[60%] md:w-[44%] ${
                isLoggedIn ? " justify-between" : " justify-end "
              }`}
            >
              <div className="flex items-center gap-2">
                <img
                  src="/images/flagIndia.png"
                  alt="flag"
                  className="object-contain w-8 h-6"
                />
                <p className="hidden text-base font-semibold sm:block">English</p>
                <IoMdArrowDropdown className="-ml-1" />
              </div>
              {isLoggedIn ? (
                <LoggedInNavbar toggleNotifications={toggleNotifications} />
              ) : (
                <LoggedOutNavbar />
              )}
            </div>
          </div>
          <div className="flex items-center justify-between py-2 mx-auto ">
            <button className="flex items-center gap-1 px-2 py-1 text-white rounded-lg sm:py-3 sm:gap-2 sm:px-4 bg-customBlue">
              <FiMapPin className="sm:text-xl text-[16px]" />{" "}
              <span className="text-base">Delhi, 110078 </span> <FaAngleDown />
            </button>
            {/* <div>
   
      <button
        className="xl:hidden text-[12px] text-[#606060] p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
      </button>
            <div
            //  className="flex xl:flex text-[12px] gap-x-3 xl:gap-x-1 2xl:gap-x-3 "
            className={`${
              isOpen ? "block" : "hidden"
            } xl:flex text-[12px] gap-x-3 xl:gap-x-1 2xl:gap-x-3`}
 
             >
            <a href="#" className="xl:text-base text-[#606060] -ml-2">
              Fresh
            </a>
            <a href="#" className="xl:text-base text-[#606060]">
              Today's Deals
            </a>
            <a href="#" className="xl:text-base text-[#606060]">
              Dresses
            </a>
            <a href="#" className="xl:text-base text-[#606060]">
              Tops and Blouses
            </a>
            <a href="#" className="xl:text-base text-[#606060]">
              Skirts
            </a>
            <a href="#" className="xl:text-base text-[#606060]">
              Shoes
            </a>
            <a href="#" className="xl:text-base text-[#606060]">
              Handbags
            </a>
            <a href="#" className="xl:text-base text-[#606060]">
              Jewelry
            </a>
            <a href="#" className="xl:text-base text-[#606060]">
              Sunglasses
            </a>
            <a href="#" className="xl:text-base text-[#606060]">
              Hats and Caps
            </a>
            </div>
            </div> */}

<div className="flex flex-row-reverse md:gap-x-4 2xl:flex-row ">
<div className="">
      {/* Toggle Button for Mobile */}
      {/* <div className="flex ml-auto "> */}
        <button
        className="2xl:hidden text-[16px] text-[#606060] p-2 "
        onClick={() => setIsOpen(!isOpen)}
      >
       <BiSolidDashboard className="text-[22px]"/>
      </button>
      {/* </div> */}
      {/* Full-Screen Overlay for Mobile Menu */}
      <div
        className={`fixed   inset-0 bg-black bg-opacity-50 z-50 transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out 2xl:hidden`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className="w-[200px] h-full p-5 pt-10 ml-auto overflow-auto bg-white"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
        >
          <button
            className="text-[white] p-2 rounded-md bg-customBlue items-center flex text-[16px] mb-5"
            onClick={() => setIsOpen(false)}
          >
            Close <span className="mx-2 "><ImCross className=""/></span>
          </button>
          <div className="flex flex-col gap-x-2 text-[16px] gap-y-4">
            <a href="#" className="text-[#606060]">
              Fresh
            </a>
            <a href="#" className="text-[#606060]">
              Today's Deals
            </a>
            <a href="#" className="text-[#606060]">
              Dresses
            </a>
            <a href="#" className="text-[#606060]">
              Tops and Blouses
            </a>
            <a href="/products/5" className="text-[#606060]">
              Skirts
            </a>
            <a href="#" className="text-[#606060]">
              Shoes
            </a>
            <a href="#" className="text-[#606060]">
              Handbags
            </a>
            <a href="#" className="text-[#606060]">
              Jewelry
            </a>
            <a href="#" className="text-[#606060]">
              Sunglasses
            </a>
            <a href="#" className="text-[#606060]">
              Hats and Caps
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Links for Desktop */}
      <div className="hidden 2xl:flex text-[12px] gap-x-3 xl:gap-x-1 2xl:gap-x-3">
        <a href="#" className="xl:text-base text-[#606060] -ml-2">
          Fresh
        </a>
        <a href="#" className="xl:text-base text-[#606060]">
          Today's Deals
        </a>
        <a href="#" className="xl:text-base text-[#606060]">
          Dresses
        </a>
        <a href="#" className="xl:text-base text-[#606060]">
          Tops and Blouses
        </a>
        <a href="#" className="xl:text-base text-[#606060]">
          Skirts
        </a>
        <a href="#" className="xl:text-base text-[#606060]">
          Shoes
        </a>
        <a href="#" className="xl:text-base text-[#606060]">
          Handbags
        </a>
        <a href="#" className="xl:text-base text-[#606060]">
          Jewelry
        </a>
        <a href="#" className="xl:text-base text-[#606060]">
          Sunglasses
        </a>
        <a href="#" className="xl:text-base text-[#606060]">
          Hats and Caps
        </a>
      </div>
    </div>
            {/* <Popover */}

            <div className="flex items-center align-middle"><a
              href="#"
              className="font-semibold text-black"
              onMouseOver={showDropDown}
              onClick={() => setIsDropDownVisible(false)}
            >
              All Categories
            </a>
            </div>
            </div>
          </div>
        </nav>
      </div>
      <div
        className="absolute w-20 h-20 rounded-full cursor-pointer bg-customBlue top-16 -left-12 "
        onClick={() => setIsLocation(true)}
      >
        <FaChevronRight
          className="relative left-12 top-[35%]"
          size="20px"
          color="white"
        />
      </div>
      {isLocation ? (
        <div className="max-w-[600px] min-w-full absolute top-0 ">
          <div className="absolute z-50 w-full p-6 text-center duration-1000 ease-in-out transform bg-white shadow-lg">
            <div className="flex items-center justify-between mb-7">
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
              <button className="absolute right-0 p-2 mr-4 rounded-r-lg bg-custom-blue text-customBlue">
                <FaSearch className="text-[#808080]" />
              </button>
            </div>
            <p className="text-[15px] font-medium my-4 mb-6">
              current selected pincode -{" "}
              <span className="font-semibold text-[17px] ">110078</span>{" "}
            </p>
            <p className="text-2xl font-normal ">OR SELECT YOUR CITY</p>
            <div className="w-[90%] mx-auto my-10">
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-4 my-8 text-[#606060] text-sm">
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
              {/* </div> */}
              {/* <div className="grid grid-cols-4 gap-4 my-8 text-[#606060] text-sm"> */}
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
              {/* </div> */}
              {/* <div className="grid grid-cols-4 gap-4 my-8 text-[#606060] text-sm"> */}
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
        <div className="relative w-[90%] sm:w-[85%] mx-auto h-auto ">
          <div className="absolute z-10 w-full px-4 pb-4 bg-white rounded">
            <div className="flex justify-between w-full gap-12">
              <div>
                <h2 className="text-2xl text-black underline underline-offset-8 decoration-blue-950 ">All Categories</h2>
                <div className="flex">
                <div className="grid sm:grid-cols-4 grid-cols-2 justify-between gap-8 lg:gap-4 sm:gap-6 md:w-full md:justify-between mt-2 lg:w-[60vw]">
                  <div>
                    <ul className="text-base text-[#606060]">
                      <Link href="/products/1"><li className="my-2.5">Dresses</li></Link>
                      <Link href="/products/1"><li className="my-2.5">Tops</li></Link>
                      <Link href="/products/1"><li className="my-2.5">Blouses</li></Link>
                      <Link href="/products/1"><li className="my-2.5">Jeans</li></Link>
                      <Link href="/products/1"><li className="my-2.5">Pants</li></Link>
                      <Link href="/products/1"><li className="my-2.5">Skirts</li></Link>
                      <Link href="/products/1"><li className="my-2.5">Shoes</li></Link>
                      <Link href="/products/1"><li className="my-2.5">Heels</li></Link>
                      <Link href="/products/1"><li className="my-2.5">Boots</li></Link>
                      <Link href="/products/1"><li className="my-2.5">Sneakers</li></Link>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-base text-[#606060]">
                      <Link href="/products/1"><li className="my-2.5">Handbags</li></Link>
                      <Link href="/products/1"><li className="my-2.5">Jewelry</li></Link>
                      <Link href="/products/1"><li className="my-2.5">Necklaces</li></Link>
                      <Link href="/products/1"><li className="my-2.5">Earrings</li></Link>
                      <Link href="/products/1"><li className="my-2.5">Bracelets</li></Link>
                      <Link href="/products/1"><li className="my-2.5">Sunglasses</li></Link>
                      <Link href="/products/1"><li className="my-2.5">Hats</li></Link>
                      <Link href="/products/1"><li className="my-2.5">Caps</li></Link>
                      <Link href="/products/1"><li className="my-2.5">Scarves</li></Link>
                      <Link href="/products/1"><li className="my-2.5">Straighteners</li></Link>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-base text-[#606060]">
                      <Link href="/products/1"><li className="my-2.5">Curling Irons</li></Link>
                      <Link href="/products/1"><li className="my-2.5">Workout clothes</li></Link>
                      <Link href="/products/1"><li className="my-2.5">Sneakers</li></Link>
                      <Link href="/products/1"><li className="my-2.5">Yoga mats</li></Link>
                      <Link href="/products/1"><li className="my-2.5">Fitness trackers</li></Link>
                      <Link href="/products/1"><li className="my-2.5">Water bottles</li></Link>
                      <Link href="/products/1"><li className="my-2.5">Bedding</li></Link>
                      <Link href="/products/1"><li className="my-2.5">Pillows</li></Link>
                      <Link href="/products/1"><li className="my-2.5">Books</li></Link>
                      <Link href="/products/1"><li className="my-2.5">Musical instruments</li></Link>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-base text-[#606060]">
                      <Link href="/products/1"><li className="my-2.5">Sunglasses</li></Link>
                      <Link href="/products/1"><li className="my-2.5">Watches</li></Link>
                      <Link href="/products/1"><li className="my-2.5">Hats</li></Link>
                      <Link href="/products/1"><li className="my-2.5">Caps</li></Link>
                      <Link href="/products/1"><li className="my-2.5">Designer handbags</li></Link>
                      <Link href="/products/1"><li className="my-2.5">Gift cards</li></Link>
                      <Link href="/products/1"><li className="my-2.5">Stationery</li></Link>
                      <Link href="/products/1"><li className="my-2.5">Pet accessories</li></Link>
                      <Link href="/products/1"><li className="my-2.5">Boots</li></Link>
                      <Link href="/products/1"><li className="my-2.5">Sneakers</li></Link>
                    </ul>
                  </div>
                  
                </div>
                <div className="lg:w-[25vw] hidden lg:block">
                   <img
                      src="/images/dropdown.svg"
                      alt=""
                      className="object-cover py-2 max-h-[400px] w-full"
                    />
              </div>
              </div>
              </div>
              
              
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* {isNotificationsOpen && (
        <div className="absolute bg-white rounded-lg shadow-lg right-10 top-16 w-96">
          <div className="flex justify-between p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold">Notifications</h3>
            <button className="text-sm text-blue-500">Mark read to all</button>
          </div>
          <div className="p-4">
            <div className="flex items-center mb-4">
              <img
                src="https://s3-alpha-sig.figma.com/img/0032/2573/83698f9a5030dead064afa3b60692d9d?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jztn5pOOw3eGpUhnlw6NCjfQWSA1COH8F2jaIIjGgSLRH-lbi6cZJpbw-0ZFF5R9UgUzd0eC3MSbAdooZ8PBAuTS36m5ZgXEHYlend6JZIyWgNxW3k2CYqn1Rrnn3ZPM3OSKOkZ95X05-BcsgeR~HazHtkEftRaS6GeB0YKW4o~RGwADO5wsUJQhmNThW8EiPronhpdBlO8B8aKjr7Ar-gc4hq5B1w0KDNJcolZitOPbCmPWbazy4CKCaV~d4Kw7IaukP56HAXWGWZGkbqcEBuTFlBuz1N2r1wjigaVERSS~6F0DhQ6iX90ylqMS~qV91DYn7fEN~FqNe4WMMFlPKg__"
                alt="profile"
                className="w-10 h-10 mr-4 rounded-full"
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
                className="w-10 h-10 mr-4 rounded-full"
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
        <div className="absolute bg-white rounded-lg shadow-lg right-10 top-16 w-96">
          <div className="flex justify-between p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold">Notifications</h3>
            <button className="text-sm text-blue-500">Mark read to all</button>
          </div>
          <div className="p-4">
            <div className="flex items-center mb-4">
              <img
                src="https://s3-alpha-sig.figma.com/img/0032/2573/83698f9a5030dead064afa3b60692d9d?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jztn5pOOw3eGpUhnlw6NCjfQWSA1COH8F2jaIIjGgSLRH-lbi6cZJpbw-0ZFF5R9UgUzd0eC3MSbAdooZ8PBAuTS36m5ZgXEHYlend6JZIyWgNxW3k2CYqn1Rrnn3ZPM3OSKOkZ95X05-BcsgeR~HazHtkEftRaS6GeB0YKW4o~RGwADO5wsUJQhmNThW8EiPronhpdBlO8B8aKjr7Ar-gc4hq5B1w0KDNJcolZitOPbCmPWbazy4CKCaV~d4Kw7IaukP56HAXWGWZGkbqcEBuTFlBuz1N2r1wjigaVERSS~6F0DhQ6iX90ylqMS~qV91DYn7fEN~FqNe4WMMFlPKg__"
                alt="profile"
                className="w-10 h-10 mr-4 rounded-full"
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
                className="w-10 h-10 mr-4 rounded-full"
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
