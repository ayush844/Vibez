import React from "react";
import Notificationicon from "../assets/icons/icons8-notification.svg";
import PageHeader from "../components/PageHeader";

const Notification = () => {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader img={Notificationicon} />
    </div>
  );
};

export default Notification;
