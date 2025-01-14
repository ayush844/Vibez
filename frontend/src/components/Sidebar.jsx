import React, { useState } from "react";

import Homeicon from "../assets/icons/home.svg";
import Exploreicon from "../assets/icons/icons8-explore.svg";
import Bookmarksicon from "../assets/icons/icons8-bookmark.svg";
import Notificationicon from "../assets/icons/icons8-notification.svg";
import Friendsicon from "../assets/icons/icons8-friend.svg";
import Messagesicon from "../assets/icons/icons8-message.svg";
import Profileicon from "../assets/icons/icons8-male-user.svg";
import Settingsicon from "../assets/icons/icons8-settings.svg";
import Logouticon from "../assets/icons/icons8-logout.svg";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Helper function to check active route
  const isActive = (path) => location.pathname === path;

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-1 left-1 z-50 p-2 bg-gradient-to-r from-pink-600  to-indigo-500 h-10 w-10 text-white rounded-full shadow-lg 2xl:hidden text-xl flex items-center justify-center"
      >
        {isOpen ? "<" : ">"}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r overflow-y-auto transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } 2xl:translate-x-0`}
      >
        <div className="flex items-center justify-center h-14 border-b">
          <h1 className=" text-2xl sm:text-3xl bg-gradient-to-r from-pink-600  to-indigo-500 inline-block text-transparent bg-clip-text">
            Vibez
          </h1>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-4 space-y-1 gap-2 sm:gap-4">
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-base font-light tracking-wide text-gray-500">
                  MENU
                </div>
              </div>
            </li>
            <li>
              <Link
                to="/"
                className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6 ${
                  isActive("/") && "!border-indigo-500 text-gray-800 bg-gray-50"
                }`}
              >
                <img
                  src={Homeicon}
                  alt="Home"
                  className=" size-12 sm:size-16 ml-4"
                />
                <span className="ml-2 text-base font-bold tracking-wide truncate">
                  Feed
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/explore"
                className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6 ${
                  isActive("/explore") &&
                  "!border-indigo-500 text-gray-800 bg-gray-50"
                }`}
              >
                <img
                  src={Exploreicon}
                  alt="Explore"
                  className=" size-12 sm:size-16 ml-4"
                />
                <span className="ml-2 text-base font-bold tracking-wide truncate">
                  Explore
                </span>
                <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">
                  New
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/bookmarks"
                className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6 ${
                  isActive("/bookmarks") &&
                  "!border-indigo-500 text-gray-800 bg-gray-50"
                }`}
              >
                <img
                  src={Bookmarksicon}
                  alt="Bookmarks"
                  className=" size-12 sm:size-16 ml-4"
                />
                <span className="ml-2 text-base font-bold tracking-wide truncate">
                  Bookmarks
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/notifications"
                className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6 ${
                  isActive("/notifications") &&
                  "!border-indigo-500 text-gray-800 bg-gray-50"
                }`}
              >
                <img
                  src={Notificationicon}
                  alt="Notification"
                  className=" size-12 sm:size-16 ml-4"
                />
                <span className="ml-2 text-sm font-bold tracking-wide truncate">
                  Notifications
                </span>
                <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
                  1.2k
                </span>
              </Link>
            </li>
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-base font-light tracking-wide text-gray-500">
                  SOCIAL
                </div>
              </div>
            </li>
            <li>
              <Link
                to="/friends"
                className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6 ${
                  isActive("/friends") &&
                  "!border-indigo-500 text-gray-800 bg-gray-50"
                }`}
              >
                <img
                  src={Friendsicon}
                  alt="Notification"
                  className=" size-9 sm:size-12 ml-4"
                />
                <span className="ml-2 text-sm font-bold tracking-wide truncate">
                  Friends
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/messages"
                className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6 ${
                  isActive("/messages") &&
                  "!border-indigo-500 text-gray-800 bg-gray-50"
                }`}
              >
                <img
                  src={Messagesicon}
                  alt="Notification"
                  className=" size-8 sm:size-11 ml-4"
                />
                <span className="ml-2 text-sm font-bold tracking-wide truncate">
                  Messages
                </span>
                <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">
                  15
                </span>
              </Link>
            </li>
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-base font-light tracking-wide text-gray-500">
                  ACCOUNT
                </div>
              </div>
            </li>
            <li>
              <Link
                to="/profile"
                className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6 ${
                  isActive("/profile") &&
                  "!border-indigo-500 text-gray-800 bg-gray-50"
                }`}
              >
                <img
                  src={Profileicon}
                  alt="Notification"
                  className=" size-8 sm:size-11 ml-4"
                />
                <span className="ml-2 text-sm font-bold tracking-wide truncate">
                  Profile
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/setting"
                className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6 ${
                  isActive("/setting") &&
                  "!border-indigo-500 text-gray-800 bg-gray-50"
                }`}
              >
                <img
                  src={Settingsicon}
                  alt="Notification"
                  className=" size-8 sm:size-11 ml-4"
                />
                <span className="ml-2 text-sm font-bold tracking-wide truncate">
                  Setting
                </span>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <img
                  src={Logouticon}
                  alt="Notification"
                  className=" size-8 sm:size-11 ml-4"
                />
                <span className="ml-2 text-sm font-bold tracking-wide truncate">
                  Log Out
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
