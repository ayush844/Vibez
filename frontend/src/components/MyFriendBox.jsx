import React from "react";
import { SlOptionsVertical } from "react-icons/sl";
import defaultImage from "../assets/default_images/defaultProfile.png";

const MyFriendBox = ({ name = "Ayush Sharma" }) => {
  return (
    <div className=" bg-gray-50  h-fit px-6 py-4 rounded-lg hover:shadow-md hover:scale-105 hover:shadow-purple-500 transition-all ease-in-out flex flex-col gap-4">
      <div className=" flex gap-4 items-center">
        <div className=" w-14 h-14 rounded-full overflow-hidden">
          <img
            src={defaultImage}
            alt="profile_pic"
            className=" w-full h-full object-cover"
          />
        </div>
        <div className=" flex flex-col items-start gap-1 justify-center">
          <h1 className=" text-lg font-bold line-clamp-1 hover:underline cursor-pointer active:scale-90 transition-all ease-in-out">
            {name}
          </h1>
          <p className=" text-base font-medium text-gray-500 line-clamp-1">
            @ayush844
          </p>
        </div>
      </div>
      <div className=" flex items-center gap-1">
        <button className=" flex-grow bg-purple-600 rounded-md text-base sm:text-lg font-bold text-white active:scale-90 transition-all ease-in-out">
          Message
        </button>
        <SlOptionsVertical className=" size-4 sm:size-5 cursor-pointer active:scale-90 transition-all ease-in-out" />
      </div>
    </div>
  );
};

export default MyFriendBox;
