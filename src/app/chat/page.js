"use client";
import React, { useState } from "react";
import Image from "next/image";
import { format, isToday, isYesterday } from "date-fns";
import { Menu } from "@headlessui/react";
import { IoMdSearch } from "react-icons/io";
import flag from "../../../public/Images/flag.png";
import close from "../../../public/Images/close.png";
import phones from "../../../public/Images/phones.png";
import cil_link from "../../../public/Images/cil_link.png";
import mic from "../../../public/Images/mic.png";
import deleteIcon from "../../../public/Images/trash-2.png";
import bookOpenIcon from "../../../public/Images/book-open.png";
import alertCircleIcon from "../../../public/Images/alert-circle.png";
import shieldIcon from "../../../public/Images/shield.png";
import slashIcon from "../../../public/Images/slash.png";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello!", sender: "received", timestamp: new Date() },
    { id: 2, text: "Hello! bro", sender: "sent", timestamp: new Date() },
    { id: 6, text: "Hello! bro", sender: "sent", timestamp: new Date() },
    { id: 7, text: "Hello! bro", sender: "sent", timestamp: new Date() },
    {
      id: 2,
      text: "Hi there!",
      sender: "sent",
      timestamp: new Date(new Date().setDate(new Date().getDate() - 1)),
    },
    {
      id: 3,
      text: "How are you?",
      sender: "received",
      timestamp: new Date(new Date().setDate(new Date().getDate() - 1)),
    },
    {
      id: 4,
      text: "I am good, thanks!",
      sender: "sent",
      timestamp: new Date(new Date().setDate(new Date().getDate() - 3)),
    },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);

  const formatDate = (date) => {
    if (isToday(date)) {
      return "Today";
    } else if (isYesterday(date)) {
      return "Yesterday";
    } else {
      return format(date, "MMMM d, yyyy");
    }
  };

  console.log(formatDate);

  let prevDate = formatDate(
    new Date(new Date().setDate(new Date().getDate() + 1))
  );
  console.log(prevDate);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleBackClick = () => {
    setSelectedUser(null);
  };
  const groupMessagesByDate = (messages) => {
    return messages.reduce((acc, message) => {
      const date = format(message.timestamp, "yyyy-MM-dd");
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(message);
      return acc;
    }, {});
  };

  const groupedMessages = groupMessagesByDate(messages);
  let imgs =
    // "https://s3-alpha-sig.figma.com/img/dc1c/815a/f35adaa4f9acfce65a733834b2f851f0?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PpevNOlWvrLvbSVyK4hpaj04q0VTtmUCDYo5J53~RvvnFRnSZ1oQ4FYf2v-dtTgao4Yud49nxZDpreHfGcIrQ3WpxUFnlDmmTgEmQIdbe3OOzAtCEp8mTCbXLh~DpFlJXiaKxHsjzw4QL6bAvxki-J-sDPGBzGd0ulxWFov5FQijg3udqXnga3kedgMCjZ4nFvJ4KWe0HUfLqa7eFfjZ0PENZXeF~IA89K~s40ZZTabzXLKSvgvufb91Fyb8wF5grwmYbkQ8ov5~W7Ivt-uZ6LPLZ0Feqq--FeWPKWZW9XOfyn9C4VPgnYPniFMVUaYMonbohrzYrBn7gGiFZwXb6A__";
    "/images/men.svg"
  return (
    <div className="mt-8 border flex h-[90vh] flex-col md:flex-row w-[90%] mx-auto">
      {/* User Section */}
      <div
        className={`md:w-[40%] lg:w-[37%] xl:w-[30%]    ${
          selectedUser ? "hidden" : "block"
        } md:block`}
      >
        <div className="bg-[#005D76] flex items-center h-[70px]">
          <section className="flex justify-between w-full px-4">
            <h2 className="text-2xl font-semibold text-white">Inbox</h2>
            <IoMdSearch className="h-8 text-[#B0B0B0]" />
          </section>
        </div>

        <div className="flex mx-4 my-4 space-x-2 overflow-auto">
          <button className="px-4 py-2 bg-[#005D76] text-white rounded-md">
            All
          </button>
          <button className="px-4 py-2  border border-[#005D76] text-[#005D76] rounded-md hover:bg-[#005D76] hover:text-white">
            Unread
          </button>
          <button className="px-4 py-2  border border-[#005D76]  text-[#005D76] rounded-md hover:bg-[#005D76] hover:text-white">
            Meeting
          </button>
          <button className="px-4 py-2  border border-[#005D76]  text-[#005D76] rounded-md hover:bg-[#005D76] hover:text-white">
            Important
          </button>
        </div>
        <div className="mb-4">
          {/* Display users here */}
          <div
            className="p-2 bg-[#F5F9FA] mx-4 rounded   items-center justify-between cursor-pointer"
            onClick={() => handleUserClick("Abhinav Dabas")}
          >
            <div className="flex items-center">
              <img
                src={imgs} // Replace with actual profile picture
                alt="User Picture"
                className="object-cover w-12 h-12 rounded-full"
              />
              <div className="w-4/5 ml-4 ">
                <div className="flex justify-between gap-4">
                  <p className="font-semibold truncate" title="Abhinav Dabas">
                    Abhinav Dabas
                  </p>
                  <p className="text-[#606060] text-sm mt-1  mr-8">Today</p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="mr-4 text-gray-600 truncate">Hi</p>
                  <Menu as="div" className="relative -mt-4 ">
                    <Menu.Button className="focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 7.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 7.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                        />
                      </svg>
                    </Menu.Button>
                    <Menu.Items className="absolute right-0 px-4 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-52">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? "bg-gray-100" : ""
                            } flex items-center gap-4 w-full  py-2 text-gray-700 border-b`}
                          >
                            <Image src={deleteIcon} className="w-5 h-5" />
                            <p className="text-sm"> Delete chat</p>
                          </button>
                        )}
                      </Menu.Item>
                      {/* <hr /> */}
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? "bg-gray-100" : ""
                            } flex items-center gap-4 w-full  py-2 text-gray-700 border-b`}
                          >
                            <Image src={alertCircleIcon} className="w-5 h-5" />
                            <p className="text-sm">Mark as important</p>
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? "bg-gray-100" : ""
                            } flex items-center gap-4 w-full  py-2 text-gray-700 border-b`}
                          >
                            <Image src={bookOpenIcon} className="w-5 h-5" />
                            <p className="text-sm">Mark as read</p>
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Add more users as needed */}
      </div>

      {/* Chat Section */}
      <div
        className={`border-l md:w-3/4 flex flex-col flex-1 h-[90vh] ${
          selectedUser ? "block" : "hidden"
        } md:block`}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-white p-4 border-b  h-[70px]">
          <div className="flex items-center">
            <img
              src={imgs} // Replace with actual profile picture
              alt="Profile Picture"
              width={40}
              height={40}
              className="rounded-full w-14 h-14"
            />
            <div className="ml-4 w-[150px]">
              <h3 className="text-lg font-semibold truncate ">Abhinav Dabas</h3>
              <p className="text-xs text-gray-600 truncate lg:text-sm">
                Last seen 5 minutes ago
              </p>
            </div>
          </div>
          <div className="flex gap-3 min-[500px]:gap-5  md:gap-4  lg:gap-5">
            <Image
              src={flag}
              alt=""
              className="hidden min-[500px]:block  w-6 h-6"
            />
            <Image
              src={phones}
              alt=""
              className="hidden min-[375px]:block w-6 h-6"
            />

            <Menu as="div" className="relative ">
              <Menu.Button className="focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-[#005D76]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 7.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 7.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                  />
                </svg>
              </Menu.Button>
              <Menu.Items className="absolute right-0 px-4 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-52">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-gray-100" : ""
                      } flex items-center gap-4 w-full  py-2 text-gray-700 border-b `}
                    >
                      <Image src={shieldIcon} className="w-5 h-5" />
                      <p className="text-sm"> Safety tip</p>
                    </button>
                  )}
                </Menu.Item>
                {/* <hr /> */}
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-gray-100" : ""
                      } flex items-center gap-4 w-full  py-2 text-gray-700 border-b`}
                    >
                      <Image
                        src={deleteIcon}
                        alt="delete"
                        className="w-5 h-5"
                      />
                      <p className="text-sm">Delete chat</p>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-gray-100" : ""
                      } flex items-center gap-4 w-full  py-2 text-gray-700 `}
                    >
                      <Image src={slashIcon} alt="slash" className="w-5 h-5" />
                      <p className="text-sm">Block user</p>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`block min-[500px]:hidden ${
                        active ? "bg-gray-100" : ""
                      } flex items-center gap-4 w-full  py-2 text-gray-700 `}
                    >
                      <Image src={flag} alt="flag" className="w-5 h-5" />
                      <p className="text-sm">Flag</p>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`block min-[425px]:hidden ${
                        active ? "bg-gray-100" : ""
                      } flex items-center gap-4 w-full  py-2 text-gray-700 `}
                    >
                      <Image
                        src={close}
                        alt="close"
                        onClick={handleBackClick}
                        className="w-5 h-5 cursor-pointer"
                      />
                      <p className="text-sm">Close</p>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`block min-[375px]:hidden ${
                        active ? "bg-gray-100" : ""
                      } flex items-center gap-4 w-full  py-2 text-gray-700 `}
                    >
                      <Image src={phones} alt="phones" className="w-5 h-5" />
                      <p className="text-sm">Block user</p>
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
            <Image
              src={close}
              alt=""
              onClick={handleBackClick}
              className="hidden min-[425px]:block w-7 h-7 cursor-pointer"
            />
          </div>
        </div>
        <p className="text-center text-[#606060] my-4">
          Watch on Rent <span className="font-bold">₹5,699.00/mo</span>{" "}
        </p>
        {/* Messages */}

        <div className="flex-1 p-4 overflow-y-auto h-[68%] md:h-[64%] xl:h-[68%] small:h-[58%] h1:h-[60%]  h2:h-[65%]  h3:h-[68%]  h4:h-[70%]  h5:h-[74%]  h6:h-[76%]  h7:h-[78%] tall:h-[80%] bg-[#F5F9FA]">
          {Object.keys(groupedMessages).map((date) => (
            <div key={date}>
              <div className="mb-4 text-sm text-center text-gray-600">
                {formatDate(new Date(date))}
              </div>
              {groupedMessages[date].map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 ${
                    message.sender === "sent" ? "text-right" : "text-left"
                  }`}
                >
                  <div
                    className={`inline-block p-2 rounded-lg  ${
                      message.sender === "sent"
                        ? "bg-[#005D76] text-white rounded-br-none"
                        : "bg-gray-200 text-black   rounded-l-none rounded-ss-lg"
                    }`}
                  >
                    <p>{message.text}</p>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    {format(message.timestamp, "h:mm a")}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="flex gap-4 w-[90%] mx-auto my-3">
          <Image
            src={cil_link}
            alt="link"
            width={30}
            height={20}
            className="object-contain "
          />
          <input
            type="text"
            placeholder="Type a message"
            className="w-full h-[50px] p-2 rounded-[50px] border-2 border-[#005D7659] bg-[#F5F9FA]"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setMessages([
                  ...messages,
                  {
                    id: messages.length + 1,
                    text: e.target.value,
                    sender: "sent",
                    timestamp: new Date(),
                  },
                ]);
                e.target.value = "";
              }
            }}
          />
          <Image
            src={mic}
            alt="mic"
            width={30}
            height={20}
            className="object-contain "
          />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
