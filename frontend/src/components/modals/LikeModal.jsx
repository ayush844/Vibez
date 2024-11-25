import React from "react";

const LikeModal = ({ toggleLikeModal }) => {
  return (
    <div
      className="bg-white w-[80vw] md:w-[20vw] h-[50vh] md:h-[60vh] rounded-md border-2 border-primary  p-3 md:p-6 gap-6 md:gap-8
z-20  border-black fixed inset-0 m-auto flex flex-col  py-10 overflow-hidden"
    >
      <h1 className=" text-xl font-bold ">Liked By :</h1>

      <div className=" w-full h-72 md:h-96 overflow-y-auto overflow-x-hidden">
        {[...Array(7)].map((_, index) => (
          <div className=" flex  items-center gap-2 my-6">
            <div className=" w-12 h-12 text-lg flex-none">
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="flex-none w-12 h-12 rounded-full object-cover"
                alt="avatar"
              />
            </div>
            <div className=" max-w-36 md:max-w-60 line-clamp-1">
              <h1 className=" font-medium text-base md:text-lg">
                Anushka Gautam Anushka Gautam Anushka Gautam Anushka Gautam
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikeModal;
