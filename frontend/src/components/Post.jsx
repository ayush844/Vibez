import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { FaHeart, FaRegBookmark, FaRegCommentAlt } from "react-icons/fa";
import EditPost from "./modals/EditPost";
import DeletePost from "./modals/DeletePost";
import CommentsModal from "./modals/CommentsModal";
import LikeModal from "./modals/LikeModal";

const Post = () => {
  const [showPostOptions, setShowPostOptions] = useState(false);

  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [commentModal, setCommentModal] = useState(false);
  const [likeModal, setLikeModal] = useState(false);

  const toggleEditModal = () => {
    setEditModal((modal) => !modal);
  };

  const toggleDeleteModal = () => {
    setDeleteModal((modal) => !modal);
  };

  const toggleCommentModal = () => {
    setCommentModal((modal) => !modal);
  };

  const toggleLikeModal = () => {
    setLikeModal((modal) => !modal);
  };

  if (editModal || deleteModal || commentModal || likeModal) {
    document.body.classList.add("overflow-y-hidden");
  } else {
    document.body.classList.remove("overflow-y-hidden");
  }

  return (
    <>
      {editModal && (
        <>
          <div
            onClick={toggleEditModal}
            className=" z-10 fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-[rgba(3,4,8,0.51)]"
          ></div>
          <EditPost toggleEditModal={toggleEditModal} />
        </>
      )}

      {deleteModal && (
        <>
          <div
            onClick={toggleDeleteModal}
            className=" z-10 fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-[rgba(3,4,8,0.51)]"
          ></div>
          <DeletePost toggleDeleteModal={toggleDeleteModal} />
        </>
      )}

      {commentModal && (
        <>
          <div
            onClick={toggleCommentModal}
            className=" z-10 fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-[rgba(3,4,8,0.51)]"
          ></div>
          <CommentsModal toggleCommentModal={toggleCommentModal} />
        </>
      )}

      {likeModal && (
        <>
          <div
            onClick={toggleLikeModal}
            className=" z-10 fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-[rgba(3,4,8,0.51)]"
          ></div>
          <LikeModal toggleLikeModal={toggleLikeModal} />
        </>
      )}

      <div className="border sm:ml-3 sm:mr-10 flex flex-col px-2 py-3 rounded-md w-full mb-10">
        <div className=" flex  justify-between items-center">
          <div className=" flex justify-center items-center gap-2">
            <div className=" w-12 h-12 text-lg flex-none">
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="flex-none w-12 h-12 rounded-full object-cover"
                alt="avatar"
              />
            </div>
            <div className=" max-w-36 md:max-w-60 line-clamp-1">
              <h1 className=" font-medium text-base md:text-lg">
                Anushka Gautam
              </h1>
            </div>
          </div>
          <div
            className="w-10 h-10 cursor-pointer rounded-full hover:bg-gray-200 flex items-center justify-center relative"
            onClick={() => setShowPostOptions((prev) => !prev)}
          >
            <CiMenuKebab className=" text-lg font-bold" />
            {showPostOptions && (
              <div className="w-30 h-22 px-1 shadow-xl bg-slate-100 border border-slate-300 text-slate-600 font-semibold absolute bottom-[-5rem] z-5 rounded-xl">
                <ul className="p-2 cursor-pointer text-start">
                  <li
                    className="p-1 hover:bg-slate-200 rounded"
                    onClick={() => {
                      setShowPostOptions((prev) => !prev);
                      setEditModal(true);
                    }}
                  >
                    Edit
                  </li>
                  <li
                    className="p-1 hover:bg-slate-200 rounded"
                    onClick={() => {
                      setShowPostOptions((prev) => !prev);
                      setDeleteModal(true);
                    }}
                  >
                    Delete
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className=" px-4 md:px-8 pt-6">
          <p className=" md:text-base text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            assumenda qui id deleniti maiores molestias provident dolorem
            voluptatem, perferendis suscipit! Dicta nemo, reiciendis assumenda,
            vel, rerum iure numquam voluptatibus debitis quasi nobis quo
            accusantium ab est eaque ducimus earum libero sapiente at animi
            amet! Sint explicabo fuga dolore iste neque!
          </p>
        </div>
        <div className=" pt-3 md:pt-5 px-2 md:px-12">
          <img
            className=" w-full h-[22rem] md:h-[32rem] object-cover rounded-md"
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="px-2 md:px-12">
          <p className=" text-base font-light text-gray-400">5 Aug, 2024</p>
        </div>

        <div className="px-2 py-6 md:px-12 md:py-8 flex items-center justify-between">
          <div className=" flex items-center gap-2">
            <FaHeart
              className=" text-xl md:text-3xl text-red-600 font-bold cursor-pointer"
              onClick={() => setLikeModal(true)}
            />
            <span className="text-lg font-bold">6</span>
          </div>
          <div className=" flex items-center gap-2">
            <FaRegCommentAlt
              className=" text-xl md:text-3xl text-blue-600 font-bold cursor-pointer"
              onClick={() => setCommentModal(true)}
            />
            <span className="text-lg font-bold">2</span>
          </div>
          <div className=" flex items-center gap-2">
            <FaRegBookmark className=" text-xl md:text-3xl text-green-500 font-bold cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
