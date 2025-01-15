import React from "react";

const NotificationBox = ({ type }) => {
  let message;

  switch (type) {
    case "like":
      message = `@ayush844 liked your post.`;
      break;
    case "comment":
      message = `@ayush844 commented on your post.`;
      break;
    case "friendRequest":
      message = `@ayush844 sent you a friend request.`;
      break;
    case "friendAccept":
      message = `Congratulations!!! @ayush844 accepted your friend request.`;
      break;
    default:
      message = "Unknown notification type.";
  }

  return (
    <div className=" rounded-md w-full h-fit px-4 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 flex justify-between items-center">
      <p className=" text-base sm:text-lg font-bold text-start">{message}</p>
      {type === "friendRequest" && (
        <div className=" flex flex-col sm:flex-row items-center gap-4">
          <button className=" w-fit h-fit bg-purple-900 text-white font-medium sm:font-bold rounded-2xl px-2 sm:px-4 py-1 sm:py-3 hover:bg-purple-800 transition-all ease-in-out hover:text-gray-50 active:scale-75">
            Accept
          </button>
          <button className="w-fit h-fit bg-white text-purple-900  font-medium sm:font-bold rounded-2xl px-2 sm:px-4 py-1 sm:py-3 hover:bg-gray-50 transition-all ease-in-out hover:text-purple-800 active:scale-75">
            Reject
          </button>
        </div>
      )}
    </div>
  );
};

export default NotificationBox;
