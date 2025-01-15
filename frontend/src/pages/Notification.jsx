import React from "react";
import Notificationicon from "../assets/icons/icons8-notification.svg";
import PageHeader from "../components/PageHeader";
import NotificationBox from "../components/NotificationBox";

const Notification = () => {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader img={Notificationicon} />
      <div className=" flex flex-col gap-4">
        <NotificationBox type="like" />
        <NotificationBox type="comment" />
        <NotificationBox type="friendRequest" />
        <NotificationBox type="friendAccept" />
        <NotificationBox type="comment" />
        <NotificationBox type="friendRequest" />
        <NotificationBox type="friendAccept" />
        <NotificationBox type="friendRequest" />
        <NotificationBox type="friendAccept" />
        <NotificationBox type="comment" />
        <NotificationBox type="friendRequest" />
        <NotificationBox type="friendAccept" />
        <NotificationBox type="comment" />
        <NotificationBox type="friendRequest" />
        <NotificationBox type="comment" />
      </div>
    </div>
  );
};

export default Notification;
