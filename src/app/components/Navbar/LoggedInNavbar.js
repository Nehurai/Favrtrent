import React from "react";
import { FaSearch, FaHeart } from "react-icons/fa";
import { IoMdArrowDropdown, IoIosNotificationsOutline } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import { FiMapPin } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa6";
import { Popover } from "@headlessui/react";
import { FaChevronRight } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { IoMdLogOut, IoMdHeart } from "react-icons/io";
import Link from "next/link";
// import { FaChevronRight } from "react-icons/fa";

function LoggedInNavbar({ toggleNotifications }) {
  return (
    <>
      {" "}
      <div>
        <Link href="/likeItems">
          <IoMdHeart className="text-[#FF0000] text-lg" />
        </Link>
      </div>
      <div>
        <Link href="/chat">
          <TbMessageCircle className="text-lg" />
        </Link>
      </div>
      <div className="relative">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="flex items-center text-lg font-bold cursor-pointer">
              <IoIosNotificationsOutline className="text-lg font-bold cursor-pointer mt-2" />
            </Menu.Button>
          </div>

          <Menu.Items className="absolute left-0 mt-2 w-[350px]  bg-white shadow-lg rounded-lg p-3 z-20 h-[300px] ">
            <div className="p-4 pb-7 border-b border-gray-200 flex justify-between">
              <h3 className="text-xl font-medium">Notifications</h3>
              <button className="text-[#1C1C1E80] text-xs">
                Mark all as read
              </button>
            </div>
            <div className="p-4  h-[200px]">
              {/* <div className="flex justify-center my-4">
                <img
                  src="/images/notification.png"
                  className="w-32 h-28 object-contain"
                  alt=""
                />
              </div>
              <p className="text-center font-medium">No Notification yet</p> */}

              <div className="flex items-center mb-4">
                <img
                  src="https://s3-alpha-sig.figma.com/img/0032/2573/83698f9a5030dead064afa3b60692d9d?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jztn5pOOw3eGpUhnlw6NCjfQWSA1COH8F2jaIIjGgSLRH-lbi6cZJpbw-0ZFF5R9UgUzd0eC3MSbAdooZ8PBAuTS36m5ZgXEHYlend6JZIyWgNxW3k2CYqn1Rrnn3ZPM3OSKOkZ95X05-BcsgeR~HazHtkEftRaS6GeB0YKW4o~RGwADO5wsUJQhmNThW8EiPronhpdBlO8B8aKjr7Ar-gc4hq5B1w0KDNJcolZitOPbCmPWbazy4CKCaV~d4Kw7IaukP56HAXWGWZGkbqcEBuTFlBuz1N2r1wjigaVERSS~6F0DhQ6iX90ylqMS~qV91DYn7fEN~FqNe4WMMFlPKg__"
                  alt="profile"
                  className="h-8 w-8 rounded-full mr-4 object-cover"
                />
                <div className="flex flex-col">
                  <section className="font-semibold flex justify-between">
                    <p className="text-base"> Rohan Sharma</p>
                    <p className="text-[10px] text-[#1C1C1E80]">Today</p>
                  </section>

                  <span className="text-sm text-[#1C1C1E80]">
                    Rohan Sharma wants to contact you.
                  </span>
                </div>
              </div>
              <hr />
              <div className="flex items-center mt-4">
                <img
                  src="https://s3-alpha-sig.figma.com/img/0032/2573/83698f9a5030dead064afa3b60692d9d?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jztn5pOOw3eGpUhnlw6NCjfQWSA1COH8F2jaIIjGgSLRH-lbi6cZJpbw-0ZFF5R9UgUzd0eC3MSbAdooZ8PBAuTS36m5ZgXEHYlend6JZIyWgNxW3k2CYqn1Rrnn3ZPM3OSKOkZ95X05-BcsgeR~HazHtkEftRaS6GeB0YKW4o~RGwADO5wsUJQhmNThW8EiPronhpdBlO8B8aKjr7Ar-gc4hq5B1w0KDNJcolZitOPbCmPWbazy4CKCaV~d4Kw7IaukP56HAXWGWZGkbqcEBuTFlBuz1N2r1wjigaVERSS~6F0DhQ6iX90ylqMS~qV91DYn7fEN~FqNe4WMMFlPKg__"
                  alt="profile"
                  className="h-8 w-8 rounded-full mr-4 object-cover"
                />
                <div className="flex flex-col">
                  <section className="font-semibold flex justify-between">
                    <p className="text-base"> Rohan Sharma</p>
                    <p className="text-[10px] text-[#1C1C1E80]">Yesterday</p>
                  </section>

                  <span className="text-sm text-[#1C1C1E80]">
                    Rohan Sharma wants to contact you.
                  </span>
                </div>
              </div>
            </div>
          </Menu.Items>
        </Menu>
      </div>
      {/* <div>
        <IoIosNotificationsOutline
          className="text-lg font-bold cursor-pointer"
          onClick={toggleNotifications}
        />
      </div> */}
      <div className="flex">
        <div className="flex items-center ">
          <img
            src="https://s3-alpha-sig.figma.com/img/0032/2573/83698f9a5030dead064afa3b60692d9d?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jztn5pOOw3eGpUhnlw6NCjfQWSA1COH8F2jaIIjGgSLRH-lbi6cZJpbw-0ZFF5R9UgUzd0eC3MSbAdooZ8PBAuTS36m5ZgXEHYlend6JZIyWgNxW3k2CYqn1Rrnn3ZPM3OSKOkZ95X05-BcsgeR~HazHtkEftRaS6GeB0YKW4o~RGwADO5wsUJQhmNThW8EiPronhpdBlO8B8aKjr7Ar-gc4hq5B1w0KDNJcolZitOPbCmPWbazy4CKCaV~d4Kw7IaukP56HAXWGWZGkbqcEBuTFlBuz1N2r1wjigaVERSS~6F0DhQ6iX90ylqMS~qV91DYn7fEN~FqNe4WMMFlPKg__"
            alt="profile"
            className="h-[34px] w-[34px] object-cover  rounded-full"
          />
          {/* <div className="relative"> */}
          {/* <IoMdArrowDropdown /> */}
          <div className="relative">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="flex items-center text-lg font-bold cursor-pointer">
                  <IoMdArrowDropdown className="mt-2" />
                  {/* <IoIosNotificationsOutline className="text-lg font-bold cursor-pointer mt-2" /> */}
                </Menu.Button>
              </div>

              <Menu.Items className="absolute left-0 mt-2 w-[280px]  bg-white shadow-lg rounded-lg p-3 z-20">
                {/* <div className="p-4 pb-7  border-gray-200 flex justify-between"></div> */}
                <div className="flex gap-4 items-center my-3">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/0032/2573/83698f9a5030dead064afa3b60692d9d?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jztn5pOOw3eGpUhnlw6NCjfQWSA1COH8F2jaIIjGgSLRH-lbi6cZJpbw-0ZFF5R9UgUzd0eC3MSbAdooZ8PBAuTS36m5ZgXEHYlend6JZIyWgNxW3k2CYqn1Rrnn3ZPM3OSKOkZ95X05-BcsgeR~HazHtkEftRaS6GeB0YKW4o~RGwADO5wsUJQhmNThW8EiPronhpdBlO8B8aKjr7Ar-gc4hq5B1w0KDNJcolZitOPbCmPWbazy4CKCaV~d4Kw7IaukP56HAXWGWZGkbqcEBuTFlBuz1N2r1wjigaVERSS~6F0DhQ6iX90ylqMS~qV91DYn7fEN~FqNe4WMMFlPKg__"
                    alt="profile"
                    className="h-[50px] w-[50px] object-cover  rounded-full"
                  />
                  <span className="text-[#1C1C1E] text-xl">Natasha Dabas</span>
                  <FaChevronRight color="#005D76" className="ml-2" />
                </div>
                <div className="p-2">
                  <hr />
                  <div className="flex items-center my-2 gap-4 px-2">
                    <FaRegQuestionCircle className="" color="#005D76" />{" "}
                    <p>Help</p>
                  </div>
                  <hr />
                  <div className="flex items-center my-2 gap-4 px-2">
                    <FiSettings className="" color="#005D76" fontWeight="700" />{" "}
                    <p>Settings</p>
                  </div>
                  <hr />
                  <div className="flex items-center my-2 gap-4 px-2">
                    <IoMdLogOut
                      className="transform scale-x-[-1]"
                      color="#005D76"
                    />{" "}
                    <p>Logout</p>
                  </div>
                </div>
              </Menu.Items>
            </Menu>
          </div>
          {/* </div> */}
        </div>
        <button className="px-4 py-3 bg-customBlue text-white rounded-lg ml-2">
          Take on Rent
        </button>
        <button className="px-4 py-3 text-customBlue border border-customBlue rounded-lg ml-3">
          <Link href="/put-on-screen/choose-category">Put on Rent</Link>
        </button>
      </div>
    </>
  );
}

export default LoggedInNavbar;
