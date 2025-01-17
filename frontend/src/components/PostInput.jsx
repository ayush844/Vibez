import React from "react";
import { FaImage } from "react-icons/fa";
import { Link } from "react-router-dom";
import defaultImage from "../assets/default_images/defaultProfile.png";

const PostInput = () => {
  return (
    <div className=" flex flex-col gap-4 sm:gap-8 px-2 sm:px-4 py-3 rounded-lg bg-gray-50">
      <div className="flex gap-2 sm:gap-4 items-start">
        <div className=" h-10 w-10 hidden sm:flex sm:w-16 sm:h-16 rounded-full overflow-hidden">
          <Link to="/profile" className="w-full h-full">
            <img
              className=" object-cover w-full h-full"
              src={defaultImage}
              alt="profile_pic"
            />
          </Link>
        </div>

        <textarea
          rows="6"
          className=" flex-grow border border-purple-200 text-base sm:text-lg rounded-lg focus:border focus:border-purple-600  focus:outline-none p-2 resize-y min-h-24 max-h-48"
        ></textarea>
      </div>
      <div className=" flex items-center justify-between">
        <FaImage className=" size-7 sm:size-9 text-purple-600 cursor-pointer hover:text-purple-500 transition-all ease-in-out active:scale-75" />
        <button
          type="button"
          className=" bg-purple-600 px-3 py-1 sm:px-5 sm:py-2 text-lg font-bold text-white rounded-lg hover:bg-purple-500 transition-all ease-in-out active:scale-75"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default PostInput;
