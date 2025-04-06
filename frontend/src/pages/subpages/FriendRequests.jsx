import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";

import Friendsicon from "../../assets/icons/icons8-friend.svg";
import FriendRequestsBox from "../../components/FriendRequestsBox";

import emoji from "../../assets/icons/icons8-crying-baby.svg";
import toast from "react-hot-toast";

const FriendRequests = () => {
  const [friendRequests, setFriendRequests] = useState([]);

  useEffect(() => {
    try {
      const getFriendRequests = async () => {
        const response = await fetch(
          `http://localhost:7000/api/user/friend-request/`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("vibez_token")}`,
            },
          }
        );

        const data = await response.json();

        console.log("hey there>>>", data?.friendRequests);
        console.log(localStorage.getItem("vibez_token"));

        if (data?.friendRequests) {
          console.log("friend requests: ", data.friendRequests);
          setFriendRequests(data.friendRequests);
        }
      };

      getFriendRequests();
    } catch (error) {
      console.error("Error fetching friend requests:", error);
      toast.error(
        "Something went wrong fetching friend requests. Please try again later."
      );
    }
  }, []);

  console.log("friendRequests: ", friendRequests);

  return (
    <div className="flex flex-col gap-8">
      <PageHeader img={Friendsicon} />
      <div className=" w-full h-fit bg-gray-50 rounded-lg flex justify-center">
        <span className=" text-xl font-light my-3">Friend Requests</span>
      </div>
      {friendRequests.length > 0 ? (
        <div className=" w-full h-fit rounded-lg flex flex-col gap-2">
          {friendRequests?.map((request, index) => (
            <FriendRequestsBox
              key={index}
              request={request}
              setFriendRequests={setFriendRequests}
              friendRequests={friendRequests}
            />
          ))}
          {/* <FriendRequestsBox />
          <FriendRequestsBox />
          <FriendRequestsBox />
          <FriendRequestsBox />
          <FriendRequestsBox />
          <FriendRequestsBox />
          <FriendRequestsBox />
          <FriendRequestsBox />
          <FriendRequestsBox />
          <FriendRequestsBox />
          <FriendRequestsBox />
          <FriendRequestsBox />
          <FriendRequestsBox /> */}
        </div>
      ) : (
        <div className=" w-full h-fit flex flex-col items-center gap-4 py-6 bg-gray-50 rounded-lg">
          <img src={emoji} alt="error icon" className=" size-64" />
          <h1 className=" text-3xl font-normal text-purple-900">
            You have no friend requests
          </h1>
        </div>
      )}
    </div>
  );
};

export default FriendRequests;
