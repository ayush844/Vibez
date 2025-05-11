import React from "react";
import ChatSidebar from "../components/MessageBox";
import PageHeader from "../components/PageHeader";
// frontend/src/assets/icons/icons8-message.svg
import Messageicon from "../assets/icons/icons8-message.svg";

const Messages = () => {
  return (
    <div className=" flex flex-col gap-8 items-center">
      <PageHeader img={Messageicon} />
      <ChatSidebar />
    </div>
  );
};

export default Messages;
