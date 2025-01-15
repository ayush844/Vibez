import React from "react";
import PageHeader from "../../components/PageHeader";
import { LuUserRoundSearch } from "react-icons/lu";
import Friendsicon from "../../assets/icons/icons8-friend.svg";
import MyFriendBox from "../../components/MyFriendBox";

import emoji from "../../assets/icons/icons8-crying-baby.svg";

const MyFriends = () => {
  const friends = 12;

  return (
    <div className="flex flex-col gap-8">
      <PageHeader img={Friendsicon} />
      <div className=" w-full h-fit bg-gray-50 rounded-lg flex justify-center">
        <span className=" text-xl font-light my-3">My Friends</span>
      </div>

      <div className=" w-full h-fit flex justify-center sm:justify-end">
        <div className=" flex items-center gap-2">
          <div className=" w-7 sm:w-12 h-7 sm:h-12 rounded-full p-2 bg-gray-50 sm:flex items-center justify-center">
            <LuUserRoundSearch className=" size-4 sm:size-7 text-indigo-600" />
          </div>

          <input
            type="text"
            placeholder="search your friend"
            className=" px-2 sm:px-4 py-1 sm:py-2 rounded-xl sm:rounded-3xl focus:outline-none text-sm sm:text-lg "
          />
        </div>
      </div>

      {friends > 0 ? (
        <div className=" w-full flex justify-center">
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <MyFriendBox />
            <MyFriendBox />
            <MyFriendBox />
            <MyFriendBox name="ayush Kumar Sharma" />
            <MyFriendBox />
            <MyFriendBox />
            <MyFriendBox />
            <MyFriendBox />
            <MyFriendBox />
            <MyFriendBox />
            <MyFriendBox />
            <MyFriendBox />
            <MyFriendBox />
            <MyFriendBox />
            <MyFriendBox />
            <MyFriendBox />
            <MyFriendBox />
            <MyFriendBox />
            <MyFriendBox />
            <MyFriendBox />
            <MyFriendBox />
            <MyFriendBox />
            <MyFriendBox />
            <MyFriendBox />
          </div>
        </div>
      ) : (
        <div className=" w-full h-fit flex flex-col items-center gap-4 py-6 bg-gray-50 rounded-lg">
          <img src={emoji} alt="error icon" className=" size-64" />
          <h1 className=" text-3xl font-normal text-purple-900">
            You have no friends
          </h1>
        </div>
      )}
    </div>
  );
};

export default MyFriends;
