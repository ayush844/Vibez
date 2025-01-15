import React from "react";
import PageHeader from "../../components/PageHeader";

import Friendsicon from "../../assets/icons/icons8-friend.svg";
import FriendRequestsBox from "../../components/FriendRequestsBox";

import emoji from "../../assets/icons/icons8-crying-baby.svg";

const FriendRequests = () => {
  const friendRequests = 13;

  return (
    <div className="flex flex-col gap-8">
      <PageHeader img={Friendsicon} />
      <div className=" w-full h-fit bg-gray-50 rounded-lg flex justify-center">
        <span className=" text-xl font-light my-3">Friend Requests</span>
      </div>
      {friendRequests > 0 ? (
        <div className=" w-full h-fit rounded-lg flex flex-col gap-2">
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
          <FriendRequestsBox />
          <FriendRequestsBox />
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
