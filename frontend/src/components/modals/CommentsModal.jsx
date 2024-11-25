import React from "react";

const CommentsModal = ({ toggleCommentModal }) => {
  return (
    <div
      className="bg-white w-[90vw] md:w-[50vw] h-[70vh] md:h-[50vh] rounded-md border-2 border-primary  p-3 md:p-6 gap-6 md:gap-8
z-20  border-black fixed inset-0 m-auto flex flex-col  py-10 overflow-hidden"
    >
      <div className="w-full">
        <label
          for="message"
          class="block mb-2 text-base font-medium text-gray-800"
        >
          Add Your Comment
        </label>
        <textarea
          maxLength={300}
          id="message"
          rows="4"
          className="block resize-none p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
          placeholder="Write your Comment here..."
        ></textarea>
      </div>

      <button
        className="text-white   focus:ring-4  font-medium rounded-lg px-3 py-1 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800 text-lg"
        onClick={() => toggleCommentModal()}
      >
        Comment
      </button>

      <div className=" w-full h-72 md:h-36 overflow-y-auto overflow-x-hidden">
        <h1 className=" text-xl md:text-2xl text-blue-600 font-bold mb-4">
          prev comments :
        </h1>
        <div className=" w-full">
          <div className=" my-4">
            <h2 className="text-lg font-bold">Anushka Gautam</h2>
            <p className=" text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              ab nostrum modi suscipit ad! Iusto ea dolorum dignissimos
              perspiciatis, laudantium deserunt libero error ut pariatur tenetur
              excepturi eligendi ex id!
            </p>
          </div>
          <div className=" my-4">
            <h2 className="text-lg font-bold">Anushka Gautam</h2>
            <p className=" text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              ab nostrum modi suscipit ad! Iusto ea dolorum dignissimos
              perspiciatis, laudantium deserunt libero error ut pariatur tenetur
              excepturi eligendi ex id!
            </p>
          </div>
          <div className=" my-4">
            <h2 className="text-lg font-bold">Anushka Gautam</h2>
            <p className=" text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              ab nostrum modi suscipit ad! Iusto ea dolorum dignissimos
              perspiciatis, laudantium deserunt libero error ut pariatur tenetur
              excepturi eligendi ex id!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsModal;
