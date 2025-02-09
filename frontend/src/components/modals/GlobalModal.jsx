import React from "react";

const GlobalModal = ({
  heading,
  message,
  image,
  buttonTxt,
  onClose,
  onClick,
}) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen  bg-black bg-opacity-70 flex justify-center items-center z-50"
      onClick={() => {
        onClose();
      }}
    >
      <div
        className="relative max-w-4xl w-fit bg-gradient-to-r from-pink-600  to-indigo-500 rounded-lg p-10 flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className=" text-2xl sm:text-4xl font-normal text-white uppercase">
          {heading}
        </h1>
        <p className=" text-gray-100 text-lg sm:text-2xl font-medium">
          {message}
        </p>
        {image && (
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
        )}
      </div>
    </div>
  );
};

export default GlobalModal;
