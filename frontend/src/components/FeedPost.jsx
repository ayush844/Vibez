import React from "react";

import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import defaultImage from "../assets/default_images/defaultProfile.png";

const formatDate = (isoString) => {
  const date = new Date(isoString);

  // Extract formatted time (HH:mm)
  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false, // 24-hour format
  });

  // Extract formatted date (MMM DD, YYYY)
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  return `${time} | ${formattedDate}`;
};

const FeedPost = ({ text, img, profilePic, name, date }) => {
  return (
    <div className=" flex flex-col gap-3 sm:gap-6 px-2 sm:px-4 py-3 rounded-lg bg-gray-50">
      <div className=" flex items-center justify-between">
        <div className=" flex items-center gap-4">
          <div className="h-8 w-8 hidden sm:flex sm:w-12 sm:h-12 rounded-full overflow-hidden">
            <img
              src={profilePic || defaultImage}
              className=" object-cover w-full h-full"
              alt=" user_profile"
            />
          </div>
          <div className=" flex flex-col items-start">
            <h2 className=" font-bold text-lg cursor-pointer hover:underline">
              {name}
            </h2>
            <p className=" text-gray-500">{formatDate(date)}</p>
          </div>
        </div>
        <div className=" border border-gray-600 p-2 rounded-lg">
          <FaRegBookmark className=" size-5 cursor-pointer hover:text-purple-600" />
        </div>
      </div>
      {img && (
        <div className="flex justify-center w-full h-auto">
          <img src={img} alt="post_pic" className=" object-cover" />
        </div>
      )}
      {text && (
        <div className="text-start">
          <p className=" text-lg line-clamp-6">{text}</p>
        </div>
      )}

      <div className=" flex items-center justify-start gap-8">
        <div className=" flex gap-1 ">
          <FaRegHeart className=" size-7 hover:text-red-600 cursor-pointer" />
          <span className=" text-base hover:underline cursor-pointer">15</span>
        </div>
        <div className=" flex gap-1 ">
          <FaRegCommentDots className=" size-7 cursor-pointer hover:text-blue-500" />
          <span className=" text-base hover:underline cursor-pointer">5</span>
        </div>
      </div>
    </div>
  );
};

export default FeedPost;
