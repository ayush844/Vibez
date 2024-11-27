import React, { useState } from "react";

import profile from "../../assets/profile-picture.png";

const EditProfile = ({ toggleEditProfileModal }) => {
  const [imageSrc, setImageSrc] = useState(
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );

  const handleMouseEnter = () => {
    setImageSrc(profile); // New image URL
  };

  const handleMouseLeave = () => {
    setImageSrc(
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ); // Original image URL
  };

  return (
    <div
      className="bg-white w-[90vw] md:w-[60vw] h-[70vh] md:h-[70vh] rounded-md border-2 border-primary  p-3 md:p-6 gap-6 md:gap-8
z-20  border-red-800 fixed inset-0 m-auto flex flex-col items-center justify-center py-10 overflow-hidden"
    >
      <h1 className=" text-2xl text-blue-600 font-bold">EDIT PROFILE</h1>

      <div className=" flex items-center gap-6">
        <div
          className="w-32 md:w-48 h-32 md:h-48 text-lg flex items-center justify-center border-2 p-1 border-blue-600 rounded-full cursor-pointer hover:bg-[rgba(3,4,8,0.51)] hover:scale-105 transition-all"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={imageSrc}
            alt="profile"
            className="w-28 md:w-44 h-28 md:h-44 rounded-full object-cover"
          />
        </div>
        <div class="mb-6">
          <label
            for="default-input"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Name
          </label>
          <input
            type="text"
            id="default-input"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            value={"Ayush Sharma"}
          />
        </div>
      </div>

      <div className="w-3/4">
        <label for="message" class="block text-sm font-medium text-gray-900 ">
          Bio
        </label>
        <textarea
          id="message"
          rows="8"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none"
          placeholder="Write your bio here..."
          value={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque architecto ut ipsa nobis? Porro sint consequatur eaque, iusto assumenda repudiandae, recusandae, facere incidunt labore laudantium voluptatibus facilis dicta accusamus! Cum quasi illo aut a repellendus iure maxime id pariatur exercitationem. Eligendi incidunt culpa tempora eveniet, adipisci quae cum velit esse, nulla officiis architecto. Impedit eveniet officia hic suscipit voluptate aut dolorum, ratione, atque consequuntur in illo qui incidunt rerum, ipsum tenetur illum excepturi eos modi sint laborum natus cumque! Commodi sit provident sed? Velit excepturi enim cumque iste nesciunt quam suscipit tempora consequatur libero. Eligendi ab in repellat maiores commodi?"
          }
        ></textarea>
      </div>

      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-xl"
        onClick={() => toggleEditProfileModal()}
      >
        Save
      </button>
    </div>
  );
};

export default EditProfile;
