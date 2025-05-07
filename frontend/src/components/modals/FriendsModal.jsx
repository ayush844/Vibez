import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaUserFriends } from "react-icons/fa";
import { TbFriends } from "react-icons/tb";
import { IoSend } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const FriendsModal = ({ onClose, friendList }) => {
  //   const [commentContent, setCommentContent] = useState("");

  //   const addComment = async () => {
  //     try {
  //       const response = await fetch(
  //         `http://localhost:7000/api/post/${postId}/comment`,
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${localStorage.getItem("vibez_token")}`,
  //           },
  //           body: JSON.stringify({
  //             text: commentContent,
  //           }),
  //         }
  //       );

  //       const data = await response.json();

  //       console.log(data);
  //       console.log(localStorage.getItem("vibez_token"));

  //       setAllComments((prev) => [data, ...prev]);

  //       toast.success("comment added successfully");
  //       setCommentContent("");
  //     } catch (error) {
  //       console.error("Error adding comment:", error);
  //       toast.error("Something went wrong. Please try again later.");
  //     }
  //   };

  const navigate = useNavigate();

  return (
    <div
      className="fixed top-0 left-0 w-full h-screen  bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="relative max-w-[90%] sm:max-w-[50%] w-webkit-fill  bg-white rounded-lg border-2 border-gray-500 p-10 flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className=" text-xl sm:text-2xl font-normal uppercase   bg-gradient-to-r from-pink-600 to-indigo-500 text-transparent bg-clip-text flex items-center gap-4">
          {/* <FaCommentDots className=" text-2xl sm:text-4xl text-indigo-500" /> */}
          {/* <GiThreeFriends className=" text-2xl sm:text-4xl text-indigo-500" /> */}
          <FaUserFriends className=" text-2xl sm:text-4xl text-indigo-500" />
          <span>Friends</span>
        </h1>
        {/* <hr className="w-full border border-gray-300" />
        <p className=" text-base sm:text-lg font-medium text-gray-800">
          comments on the post
        </p> */}

        <div className="flex flex-col gap-4 w-full h-72 overflow-y-auto scrollbar-hide">
          {friendList?.map((friend, index) => (
            <div className=" w-full p-3 rounded-md bg-slate-200" key={index}>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden">
                  <img
                    className="object-cover w-full h-full"
                    src={friend?.user?.profilePic}
                    alt="profile_pic"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <h2
                    className="font-bold text-lg hover:underline cursor-pointer"
                    onClick={() => navigate(`/person/${friend?.user?._id}`)}
                  >
                    {friend?.user?.firstname + " " + friend?.user?.lastname}
                  </h2>
                  <p className="text-gray-600">
                    {"@" + friend?.user?.username}
                  </p>
                </div>
              </div>
              {/* <p className=" text-left">{comment?.text}</p> */}
            </div>
          ))}
          {friendList?.length === 0 && (
            <div className="flex items-center justify-center w-full h-full">
              <p className="text-gray-500">No friends to show.</p>
            </div>
          )}
        </div>

        {/* <div className="flex items-center justify-between w-full gap-2">
          <input
            className="w-full border-2 border-gray-300 rounded-md px-4 py-2 rounded-l-full rounded-r-full focus:outline-none"
            type="text"
            value={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
            placeholder="Add a comment"
            maxLength={100}
          />
          <button
            className={`bg-indigo-500 text-white px-3 py-3 rounded-full uppercase font-bold hover:bg-indigo-600 transition-all ease-in-out active:scale-90 ${
              commentContent.trim() === "" && "cursor-not-allowed opacity-25"
            }`}
            disabled={commentContent.trim() === ""}
            onClick={addComment}
          >
            <IoSend />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default FriendsModal;
