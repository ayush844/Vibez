import React from "react";
import { FaRegBookmark, FaRegCommentDots, FaRegHeart } from "react-icons/fa";
import defaultImage from "../assets/default_images/defaultProfile.png";

const ExplorePost = ({ content, img, profilePic, name, username }) => {
  return (
    <div className="bg-gray-50 rounded-lg shadow h-fit">
      {img && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={img}
            alt="post_pic"
            className="object-cover w-full h-full"
          />
        </div>
      )}

      <div className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src={profilePic || defaultImage}
              alt="profile_pic"
            />
          </div>
          <div className="flex flex-col items-start">
            <h2 className="font-bold text-lg hover:underline cursor-pointer">
              {name || "anonymous"}
            </h2>
            <p className="text-gray-600">
              {username ? "@" + username : "@anonymous"}
            </p>
          </div>
        </div>
        {content && (
          <div>
            <p className="line-clamp-4 text-gray-800 text-start">{content}</p>
          </div>
        )}
        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-2 items-center">
            <FaRegHeart className="text-xl cursor-pointer hover:text-red-600" />
            <span className="text-base">15</span>
          </div>
          <div className="flex gap-2 items-center">
            <FaRegCommentDots className="text-xl cursor-pointer hover:text-blue-500" />
            <span className="text-base">5</span>
          </div>
          <FaRegBookmark className="text-xl cursor-pointer hover:text-purple-600" />
        </div>
      </div>
    </div>
  );
};

export default ExplorePost;
