import React from "react";
import { FaCommentDots } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";

const CommentsModal = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen  bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div
        className="relative max-w-[90%] sm:max-w-[50%] w-webkit-fill  bg-white rounded-lg border-2 border-gray-500 p-10 flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className=" text-xl sm:text-2xl font-normal uppercase   bg-gradient-to-r from-pink-600 to-indigo-500 text-transparent bg-clip-text flex items-center gap-2">
          <FaCommentDots className=" text-2xl sm:text-4xl text-indigo-500" />
          <span>COMMENTS</span>
        </h1>
        {/* <hr className="w-full border border-gray-300" />
        <p className=" text-base sm:text-lg font-medium text-gray-800">
          comments on the post
        </p> */}

        <div className="flex flex-col gap-4 w-full h-72 overflow-y-auto scrollbar-hide">
          {[...Array(10)].map((_, index) => (
            <div className=" w-full p-3 rounded-md bg-slate-200" key={index}>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden">
                  <img
                    className="object-cover w-full h-full"
                    src={
                      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    alt="profile_pic"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <h2 className="font-bold text-lg hover:underline cursor-pointer">
                    {"anonymous"}
                  </h2>
                  <p className="text-gray-600">{"@anonymous"}</p>
                </div>
              </div>
              <p className=" text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, animi explicabo in voluptatibus blanditiis praesentium
                fugit veniam dolorum voluptates aliquid reiciendis officia.
                Aliquid reprehenderit inventore ullam illo non impedit! Iusto!
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between w-full gap-2">
          <input
            className="w-full border-2 border-gray-300 rounded-md px-4 py-2 rounded-l-full rounded-r-full focus:outline-none"
            type="text"
            placeholder="Add a comment"
            maxLength={100}
          />
          <button className="bg-indigo-500 text-white px-3 py-3 rounded-full uppercase font-bold hover:bg-indigo-600 transition-all ease-in-out active:scale-90">
            <IoSend />
          </button>
        </div>
        {/* {image && (
          <div className=" h-64 w-64">
            <img
              src={image}
              alt="modal image"
              className=" object-cover w-full h-full"
            />
          </div>
        )}

        {buttonTxt && (
          <button
            onClick={() => {
              onClick();
              onClose();
            }}
            className=" bg-red-600 text-white px-4 py-2 rounded-md uppercase font-bold hover:bg-red-700 transition-all ease-in-out active:scale-90"
          >
            {buttonTxt}
          </button>
        )} */}
      </div>
    </div>
  );
};

export default CommentsModal;
