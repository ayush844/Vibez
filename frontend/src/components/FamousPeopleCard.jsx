import React from "react";

const FamousPeopleCard = () => {
  return (
    <div className=" w-full h-[5rem]   px-2 py-4 flex justify-between items-center">
      <div className=" flex items-center gap-2 w-20 2xl:w-40  line-clamp-1">
        <img
          src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="ayush-sharma"
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className=" text-sm font-bold line-clamp-1">Ayush Sharma</span>
      </div>

      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Follow
      </button>
    </div>
  );
};

export default FamousPeopleCard;
