import React from "react";
import toast from "react-hot-toast";
import { useNotification } from "../context/NotificationContext";

const NotificationBox = ({ type, id, message }) => {
  const { notifications, setNotifications } = useNotification();

  const markAsRead = async () => {
    if (!id) return;
    try {
      const res = await fetch(
        `http://localhost:7000/api/notification/${id}/read`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("vibez_token")}`,
          },
        }
      );

      const data = await res.json();
      if (data.msg) {
        toast.success(data.msg, {
          position: "bottom-right",
        });
      }

      let updatedNotifications = notifications.filter((n) => {
        return n._id !== id;
      });
      setNotifications(updatedNotifications);
    } catch (err) {
      console.error("Failed to mark notification as read");
    }
  };

  return (
    <div className=" rounded-md w-full h-fit px-4  border-l-4 border-purple-600 py-4 bg-gray-50 flex justify-between items-center flex-col sm:flex-row gap-4">
      <p className=" text-base sm:text-lg font-bold text-start">{message}</p>
      {/* {type === "friendRequest" && (
        <div className=" flex flex-col sm:flex-row items-center gap-4">
          <button className=" w-fit h-fit bg-purple-900 text-white font-medium sm:font-bold rounded-2xl px-2 sm:px-4 py-1 sm:py-3 hover:bg-purple-800 transition-all ease-in-out hover:text-gray-50 active:scale-75">
            Accept
          </button>
          <button className="w-fit h-fit bg-white text-purple-900 border border-purple-600  font-medium sm:font-bold rounded-2xl px-2 sm:px-4 py-1 sm:py-3 hover:bg-gray-50 transition-all ease-in-out hover:text-purple-800 active:scale-75">
            Reject
          </button>
        </div>
      )} */}
      <div className=" flex flex-row items-center gap-4">
        {/* <button className="w-fit h-fit bg-white text-purple-900 border border-purple-600  font-medium sm:font-bold rounded-2xl px-2 sm:px-3 py-1 sm:py-2 hover:bg-gray-50 transition-all ease-in-out hover:text-purple-800 active:scale-75">
          View
        </button> */}
        <button className="w-fit h-fit bg-purple-900 text-white border   font-medium sm:font-bold rounded-2xl px-2 sm:px-3 py-1 sm:py-2 hover:bg-purple-950 transition-all ease-in-out hover:text-gray-300 active:scale-75">
          View
        </button>
        <button
          className="w-fit h-fit bg-white text-purple-900 border border-purple-600  font-medium sm:font-bold rounded-2xl px-2 sm:px-3 py-1 sm:py-2 hover:bg-gray-50 transition-all ease-in-out hover:text-purple-800 active:scale-75"
          onClick={markAsRead}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default NotificationBox;
