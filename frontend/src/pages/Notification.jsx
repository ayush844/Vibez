import React from "react";
import Notificationicon from "../assets/icons/icons8-notification.svg";
import PageHeader from "../components/PageHeader";
import NotificationBox from "../components/NotificationBox";
import { useNotification } from "../context/NotificationContext";

const Notification = () => {
  const { notifications } = useNotification();

  const unreadNotifications = notifications.filter((n) => !n.isRead);

  console.log("UNREAD NOTIFICATIONS", unreadNotifications);

  return (
    <div className="flex flex-col gap-8">
      <PageHeader img={Notificationicon} />
      {/* <div className=" flex flex-col gap-4"> */}
      {unreadNotifications.length > 0 ? (
        <div className="flex flex-col gap-4">
          {unreadNotifications.map((notification) => (
            <NotificationBox
              key={notification._id}
              id={notification._id}
              type={notification.type}
              message={notification.message}
            />
          ))}
        </div>
      ) : (
        <div className="text-center mt-8 text-gray-500 text-xl">
          No new notifications
        </div>
      )}

      {/* </div> */}
    </div>
  );
};

export default Notification;
