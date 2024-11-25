import React from "react";

const EditPost = ({ toggleEditModal }) => {
  return (
    <div
      className="bg-white w-[90vw] md:w-[50vw] h-[75vh] md:h-[50vh] rounded-md border-2 border-primary  p-3 md:p-6 gap-4 md:gap-16
    z-20  border-blue-800 fixed inset-0 m-auto flex flex-col items-center py-6 overflow-hidden"
    >
      <h1 className=" text-2xl text-blue-600 font-bold">EDIT POST</h1>
      <p className=" ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus omnis
        cupiditate culpa illo quos velit porro nobis. Nam eos commodi hic
        eligendi sit modi odio labore voluptatibus. Facere cum quas similique
        aut. Error reiciendis dignissimos autem sunt, ullam aspernatur non,
        explicabo perspiciatis velit omnis facere iure cum. Debitis enim earum
        adipisci voluptatibus? Itaque officiis iste, debitis, odio ipsa et
        laboriosam voluptatem commodi quidem vel ullam cumque id optio! Debitis
        vitae quo maxime ipsa consequatur laborum ad dicta, nisi ex autem, iste
        optio commodi distinctio earum consectetur. Tempore quas et excepturi
        eligendi accusamus mollitia, ipsa sit aliquam, accusantium soluta ad
        laboriosam.
      </p>
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
