import React from "react";

import defaultImage from "../assets/default_images/defaultProfile.png";
import toast from "react-hot-toast";

const FriendRequestsBox = ({ request, setFriendRequests, friendRequests }) => {
  console.log("request is : ", request);

  const acceptRequest = async () => {
    try {
      const response = await fetch(
        `http://localhost:7000/api/user/accept-request/${request._id}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("vibez_token")}`,
          },
        }
      );
      const data = await response.json();
      console.log("Accept request response: ", data);
      toast.success("Friend request accepted");

      // Remove the accepted request from the friendRequests state
      setFriendRequests(
        friendRequests.filter((req) => req._id !== request._id)
      );
    } catch (error) {
      console.error("Error accepting friend request:", error);
      toast.error("Failed to accept friend request");
    }
  };

  const rejectRequest = async () => {
    try {
      const response = await fetch(
        `http://localhost:7000/api/user/reject-request/${request._id}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("vibez_token")}`,
          },
        }
      );
      const data = await response.json();
      console.log("Reject request response: ", data);
      toast.success("Friend request rejected");

      // Remove the rejected request from the friendRequests state
      setFriendRequests(
        friendRequests.filter((req) => req._id !== request._id)
      );
    } catch (error) {
      console.error("Error rejecting friend request:", error);
      toast.error("Failed to reject friend request");
    }
  };
  return (
    <div className=" rounded-md w-full h-fit px-4 py-4 bg-gray-50 flex justify-between items-center">
      <div className=" flex items-center gap-4">
        <div className=" h-12 w-12 rounded-full overflow-hidden">
          <img
            src={request?.profilePic || defaultImage}
            className=" object-cover w-full h-full"
            alt="profile_pic"
          />
        </div>
        <div className=" flex flex-col items-start">
          <h1 className=" font-bold cursor-pointer hover:underline active:scale-90 transition-all ease-in-out">
            {request?.firstname} {request?.lastname}
          </h1>
          <p className="font-semibold text-gray-500">@{request?.username}</p>
        </div>
      </div>
      <div className=" flex flex-col sm:flex-row items-center gap-4">
        <button
          className=" w-fit h-fit bg-purple-900 text-white font-medium sm:font-bold rounded-2xl px-2 sm:px-4 py-1 sm:py-3 hover:bg-purple-800 transition-all ease-in-out hover:text-gray-50 active:scale-75"
          onClick={acceptRequest}
        >
          Accept
        </button>
        <button
          className="w-fit h-fit bg-white text-purple-900  font-medium sm:font-bold rounded-2xl px-2 sm:px-4 py-1 sm:py-3 hover:bg-gray-50 transition-all ease-in-out hover:text-purple-800 active:scale-75"
          onClick={rejectRequest}
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default FriendRequestsBox;
