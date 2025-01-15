import React from "react";
import Friendsicon from "../assets/icons/icons8-friend.svg";
import PageHeader from "../components/PageHeader";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Friends = () => {
  return (
    <div className="flex flex-col gap-8 ">
      <PageHeader img={Friendsicon} />
      <div className=" flex flex-col sm:flex-row items-center justify-evenly px-1 sm:px-4 gap-4">
        <div className=" w-60 h-48 sm:h-60 bg-gray-50 rounded-md flex-grow flex flex-col justify-evenly items-center">
          <h1 className=" text-6xl font-extrabold text-purple-600 line-clamp-1">
            13
          </h1>
          <h3 className=" text-xl font-bold">Friend Requests</h3>
          <Link to="/friends/friend_requests">
            <div className=" flex items-center gap-3 hover:underline cursor-pointer group active:scale-90 transition-all ease-in-out">
              <span className=" text-purple-600 font-light text-base ">
                View all requests
              </span>
              <FaArrowRight className=" text-purple-600 group-hover:scale-125 transition-all ease-in-out" />
            </div>
          </Link>
        </div>
        <div className=" w-60 h-48 sm:h-60 bg-gray-50 rounded-md flex-grow  flex flex-col justify-evenly items-center">
          <h1 className=" text-6xl font-extrabold text-indigo-600 line-clamp-1">
            87
          </h1>
          <h3 className=" text-xl font-bold">Friends</h3>
          <Link to="/friends/my_friends">
            <div className=" flex items-center gap-3 hover:underline cursor-pointer group active:scale-90 transition-all ease-in-out">
              <span className=" text-indigo-600 font-light text-base ">
                View your friends
              </span>
              <FaArrowRight className=" text-indigo-600 group-hover:scale-125 transition-all ease-in-out" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Friends;
