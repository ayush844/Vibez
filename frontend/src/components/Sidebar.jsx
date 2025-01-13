import React from "react";

import Homeicon from "../assets/icons/home.svg";
import Exploreicon from "../assets/icons/icons8-explore.svg";
import Bookmarksicon from "../assets/icons/icons8-bookmark.svg";
import Notificationicon from "../assets/icons/icons8-notification.svg";
import Friendsicon from "../assets/icons/icons8-friend.svg";
import Messagesicon from "../assets/icons/icons8-message.svg";
import Profileicon from "../assets/icons/icons8-male-user.svg";
import Settingsicon from "../assets/icons/icons8-settings.svg";
import Logouticon from "../assets/icons/icons8-logout.svg";

const Sidebar = () => {
  return (
    <div className="fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r overflow-y-auto">
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
            <a
              href="#"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
            >
              <img
                src={Homeicon}
                alt="Home"
                className=" size-12 sm:size-16 ml-4"
              />
              <span className="ml-2 text-base font-bold tracking-wide truncate">
                Feed
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
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
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
            >
              <img
                src={Bookmarksicon}
                alt="Bookmarks"
                className=" size-12 sm:size-16 ml-4"
              />
              <span className="ml-2 text-base font-bold tracking-wide truncate">
                Bookmarks
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
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
            </a>
          </li>
          <li className="px-5">
            <div className="flex flex-row items-center h-8">
              <div className="text-base font-light tracking-wide text-gray-500">
                SOCIAL
              </div>
            </div>
          </li>
          <li>
            <a
              href="#"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
            >
              <img
                src={Friendsicon}
                alt="Notification"
                className=" size-9 sm:size-12 ml-4"
              />
              <span className="ml-2 text-sm font-bold tracking-wide truncate">
                Friends
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
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
            </a>
          </li>
          <li className="px-5">
            <div className="flex flex-row items-center h-8">
              <div className="text-base font-light tracking-wide text-gray-500">
                ACCOUNT
              </div>
            </div>
          </li>
          <li>
            <a
              href="#"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
            >
              <img
                src={Profileicon}
                alt="Notification"
                className=" size-8 sm:size-11 ml-4"
              />
              <span className="ml-2 text-sm font-bold tracking-wide truncate">
                Profile
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
            >
              <img
                src={Settingsicon}
                alt="Notification"
                className=" size-8 sm:size-11 ml-4"
              />
              <span className="ml-2 text-sm font-bold tracking-wide truncate">
                Setting
              </span>
            </a>
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
  );
};

export default Sidebar;
