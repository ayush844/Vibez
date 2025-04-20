import React, { useState } from "react";

import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import defaultImage from "../assets/default_images/defaultProfile.png";
import { formatDate } from "../utils/formatDate";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const FeedPost = ({
  text,
  img,
  profilePic,
  name,
  date,
  isBookmarked,
  postId,
  isLiked,
  likesCount,
  id,
}) => {
  const [postBookmarked, setPostBookmarked] = useState(isBookmarked);

  const [postLiked, setPostLiked] = useState(isLiked);

  const [likesCnt, setLikesCnt] = useState(likesCount);

  const navigate = useNavigate();

  console.log("is liked", isLiked);

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
      setPostBookmarked((prev) => !prev);
    } catch (error) {
      console.error("Error while toggling bookmark", error);
      toast.error("Error while toggling bookmark");
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
      setPostLiked((prev) => !prev);
      setLikesCnt(data?.post?.likes?.length);
    } catch (error) {
      console.error("Error during liking/disliking the posts:", error);
      toast.error("Something went wrong while trying to like/dislike the post");
    }
  };

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
            <h2
              className=" font-bold text-lg cursor-pointer hover:underline"
              onClick={() => navigate(`/person/${id}`)}
            >
              {name}
            </h2>
            <p className=" text-gray-500">{formatDate(date)}</p>
          </div>
        </div>
        <div className=" border border-gray-600 p-2 rounded-lg">
          {postBookmarked ? (
            <FaBookmark
              onClick={toggleBookmark}
              className=" size-5 cursor-pointer text-purple-700 hover:text-purple-600"
            />
          ) : (
            <FaRegBookmark
              onClick={toggleBookmark}
              className=" size-5 cursor-pointer hover:text-purple-600"
            />
          )}
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
          {postLiked ? (
            <FaHeart
              onClick={toggleLike}
              className=" size-7 cursor-pointer text-red-600 hover:text-red-500"
            />
          ) : (
            <FaRegHeart
              onClick={toggleLike}
              className=" size-7 cursor-pointer hover:text-red-600"
            />
          )}
          <span className=" text-base hover:underline cursor-pointer">
            {likesCnt}
          </span>
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
