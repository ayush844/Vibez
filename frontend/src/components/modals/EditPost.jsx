import React from "react";

const EditPost = ({ toggleEditModal }) => {
  return (
    <div
      className="bg-white w-[90vw] md:w-[50vw] h-[75vh] md:h-[50vh] rounded-md border-2 border-primary  p-3 md:p-6 gap-10 md:gap-16
    z-20  border-blue-800 fixed inset-0 m-auto flex flex-col justify-center items-center  md:py-6 overflow-hidden"
    >
      <h1 className=" text-2xl text-blue-600 font-bold">EDIT POST</h1>

      <textarea
        id="message"
        rows="8"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
        placeholder="Write your thoughts here..."
        value={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam laboriosam asperiores, qui, optio aperiam voluptatem facere, dicta numquam corporis esse mollitia omnis. Consectetur necessitatibus earum, obcaecati quos tempore error aliquam hic corrupti autem unde nisi similique aspernatur nobis vitae nulla, soluta eos accusantium, quisquam ad aut omnis! Nulla eum pariatur praesentium mollitia commodi inventore! Eaque, vel iure? Debitis laborum iusto dolorum magni ipsum odio placeat laboriosam, harum veritatis quod obcaecati consequuntur similique quas, mollitia illo unde blanditiis enim dolore iure, nam quis ipsam exercitationem assumenda reiciendis. Aspernatur dolorum obcaecati repellat? Placeat eius maxime id totam ut dolore saepe tenetur animi?"
        }
      ></textarea>

      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-xl"
        onClick={() => toggleEditModal()}
      >
        Edit
      </button>
    </div>
  );
};

export default EditPost;
