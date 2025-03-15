import React, { useState } from "react";
import {
  FaBookmark,
  FaHeart,
  FaRegBookmark,
  FaRegCommentDots,
  FaRegHeart,
} from "react-icons/fa";
import defaultImage from "../assets/default_images/defaultProfile.png";
import toast from "react-hot-toast";

const ExplorePost = ({
  postId,
  content,
  img,
  profilePic,
  name,
  username,
  isBookmarked,
  onToggleBookmark,
  isLiked,
  onToggleLike,
  likesCount,
}) => {
  const [likesCnt, setLikesCnt] = useState(likesCount);

  const toggleBookmark = async () => {
    try {
      const response = await fetch(
        `http://localhost:7000/api/user/bookmarkPost`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("vibez_token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ postId: postId }),
        }
      );
      const data = await response.json();
      toast.success(data.msg);
      onToggleBookmark(postId);
    } catch (error) {
      console.error("Error during bookmarking the posts:", error);
      toast.error("Something went wrong while trying to Bookmark post");
    }
  };

  const toggleLike = async () => {
    try {
      const response = await fetch(
        `http://localhost:7000/api/post/${postId}/like`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("vibez_token")}`,
          },
        }
      );
      const data = await response.json();
      toast.success(data?.msg);
      onToggleLike(postId);
      setLikesCnt(data?.post?.likes?.length);
    } catch (error) {
      console.error("Error during liking the posts:", error);
      toast.error("Something went wrong while trying to like the post");
    }
  };

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
            {isLiked ? (
              <FaHeart
                onClick={toggleLike}
                className="text-xl cursor-pointer text-red-600 hover:text-red-500"
              />
            ) : (
              <FaRegHeart
                onClick={toggleLike}
                className="text-xl cursor-pointer hover:text-red-600"
              />
            )}
            <span className="text-base">{likesCnt}</span>
            {/* <FaRegHeart className="text-xl cursor-pointer hover:text-red-600" />
            <span className="text-base">{likesCnt}</span> */}
          </div>
          <div className="flex gap-2 items-center">
            <FaRegCommentDots className="text-xl cursor-pointer hover:text-blue-500" />
            <span className="text-base">5</span>
          </div>
          {isBookmarked ? (
            <FaBookmark
              onClick={toggleBookmark}
              className="text-xl cursor-pointer text-purple-700 hover:text-purple-600"
            />
          ) : (
            <FaRegBookmark
              onClick={toggleBookmark}
              className="text-xl cursor-pointer hover:text-purple-600"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ExplorePost;
