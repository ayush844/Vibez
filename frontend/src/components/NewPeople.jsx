import React from "react";
import { IoMdPersonAdd } from "react-icons/io";
import defaultImage from "../assets/default_images/defaultProfile.png";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const NewPeople = ({
  firstname = "anonymous",
  lastname = "",
  username = "anonymous",
  profilePic,
  id,
}) => {
  const navigate = useNavigate();

  const sendFriendRequest = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:7000/api/user/friend-request/${id}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("vibez_token")}`,
          },
        }
      );

      const data = await response.json();
      if (data) {
        toast.success(data.msg);
      }
    } catch (error) {
      console.error("Error sending friend request:", error);
      toast.error("Something went wrong while sending friend request");
    }
  };

  return (
    <div className="bg-gray-50  h-fit px-4 py-3 rounded-lg hover:shadow-md hover:scale-105 hover:shadow-pink-500 transition-all ease-in-out flex flex-col gap-4 items-center">
      <div className=" w-16 h-16 rounded-full overflow-hidden">
        <img
          src={profilePic || defaultImage}
          alt="profile_pic"
          className=" w-full h-full object-cover"
        />
      </div>
      <div className=" flex flex-col gap-2">
        <h1
          className=" text-lg sm:text-lg font-bold line-clamp-1 hover:underline cursor-pointer active:scale-90 transition-all ease-in-out"
          onClick={() => navigate(`/person/${id}`)}
        >
          {firstname + " " + lastname}
        </h1>
        <p className=" text-base sm:text-lg font-medium text-gray-500 line-clamp-1">
          @{username}
        </p>
      </div>
      <div className=" flex flex-col items-center gap-3">
        <button
          className=" flex items-center justify-between gap-1 w-full px-2 py-1 rounded-2xl bg-pink-600 active:scale-90 transition-all ease-in-out hover:opacity-90"
          onClick={() => sendFriendRequest(id)}
        >
          <IoMdPersonAdd className="text-white w-8 h-8" />
          <span className=" text-white font-bold">Send Friend Request</span>
        </button>
        <button
          className=" flex items-center justify-center w-full  px-2 py-1 rounded-2xl border border-pink-600 text-pink-600  active:scale-90 transition-all ease-in-out hover:bg-gray-100"
          onClick={() => navigate(`/person/${id}`)}
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default NewPeople;
