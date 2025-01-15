import React from "react";

const FriendRequestsBox = ({
  name = "Ayush Sharma",
  username = "ayush844",
}) => {
  return (
    <div className=" rounded-md w-full h-fit px-4 py-4 bg-gray-50 flex justify-between items-center">
      <div className=" flex items-center gap-4">
        <div className=" h-12 w-12 rounded-full">
          <img
            src="https://avatar.iran.liara.run/public/30"
            className=" object-cover w-full h-full"
            alt="profile_pic"
          />
        </div>
        <div className=" flex flex-col items-start">
          <h1 className=" font-bold cursor-pointer hover:underline active:scale-90 transition-all ease-in-out">
            {name}
          </h1>
          <p className="font-semibold text-gray-500">@{username}</p>
        </div>
      </div>
      <div className=" flex flex-col sm:flex-row items-center gap-4">
        <button className=" w-fit h-fit bg-purple-900 text-white font-medium sm:font-bold rounded-2xl px-2 sm:px-4 py-1 sm:py-3 hover:bg-purple-800 transition-all ease-in-out hover:text-gray-50 active:scale-75">
          Accept
        </button>
        <button className="w-fit h-fit bg-white text-purple-900  font-medium sm:font-bold rounded-2xl px-2 sm:px-4 py-1 sm:py-3 hover:bg-gray-50 transition-all ease-in-out hover:text-purple-800 active:scale-75">
          Reject
        </button>
      </div>
    </div>
  );
};

export default FriendRequestsBox;
