import React from "react";

const LogoutModal = ({ toggleLogoutModal }) => {
  return (
    <div
      className="bg-white w-[90vw] md:w-[50vw] h-[30vh] md:h-[20vh] rounded-md border-2 border-primary  p-3 md:p-6 gap-6 md:gap-8
z-20  border-red-800 fixed inset-0 m-auto flex flex-col items-center py-10 overflow-hidden"
    >
      <h1 className=" text-xl md:text-2xl text-red-600 font-bold">
        Are you sure? You will be logged out of your account.
      </h1>

      <button
        className="text-xl focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        onClick={() => toggleLogoutModal()}
      >
        Log Out
      </button>
    </div>
  );
};

export default LogoutModal;
