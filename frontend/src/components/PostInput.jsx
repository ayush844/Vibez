import React, { useEffect, useState } from "react";
import { FaImage } from "react-icons/fa";
import { Link } from "react-router-dom";
import defaultImage from "../assets/default_images/defaultProfile.png";
import { getUserInfo } from "../utils/getLoggedInUser";
import toast from "react-hot-toast";

const CLOUDINARY_URL = import.meta.env.VITE_CLOUDINARY_URL;
const CLOUDINARY_PRESET = import.meta.env.VITE_CLOUDINARY_PRESET; // Set in Cloudinary settings

const PostInput = () => {
  const [user, setUser] = useState(null);

  const [post, setPost] = useState({
    content: "",
    image: null,
    userId: null,
  });

  const [isImage, setIsImage] = useState(false);

  const token = localStorage.getItem("vibez_token");

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userInfo = await getUserInfo();
        setUser(userInfo);
        setPost((prev) => ({
          ...prev,
          userId: userInfo?._id,
        }));
        console.log(userInfo);
      } catch (err) {
        setError(err.message || "Failed to fetch user info.");
      } finally {
        // setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_PRESET);

    try {
      const res = await fetch(CLOUDINARY_URL, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.secure_url) {
        setPost((prev) => ({
          ...prev,
          image: data.secure_url,
        }));
        toast.success(`image uploaded!`);
      }
    } catch (err) {
      console.log(err);
      toast.error("Image upload failed!");
    }
  };

  const handlePost = async () => {
    console.log("post content", post.content.trim());
    if (!post.userId || (post.content.trim() === "" && !post.image)) {
      toast.error("Need to provide some content or an image!");
      return;
    }

    try {
      const response = await fetch(`http://localhost:7000/api/post/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(post),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Posted successfully!");
      } else {
        toast.error(`Failed to post: ${data.msg}`);
      }

      setPost({
        content: "",
        image: null,
        userId: null,
      });
    } catch (err) {
      console.error(err);
      alert("An error occurred while posting: " + err.message);

      setPost({
        content: "",
        image: null,
        userId: null,
      });
    }
  };

  return (
    <div className=" flex flex-col gap-4 sm:gap-8 px-2 sm:px-4 py-3 rounded-lg bg-gray-50">
      <div className="flex gap-2 sm:gap-4 items-start">
        <div className=" h-10 w-10 hidden sm:flex sm:w-16 sm:h-16 rounded-full overflow-hidden">
          <Link to="/profile" className="w-full h-full">
            <img
              className=" object-cover w-full h-full scale-110"
              src={user?.profilePic || defaultImage}
              alt="profile_pic"
            />
          </Link>
        </div>

        <textarea
          rows="6"
          value={post.content}
          onChange={(e) =>
            setPost((prev) => ({
              ...prev,
              content: e.target.value,
            }))
          }
          className=" flex-grow border border-purple-200 text-base sm:text-lg rounded-lg focus:border focus:border-purple-600  focus:outline-none p-2 resize-y min-h-24 max-h-48"
        ></textarea>
      </div>

      {isImage && post?.image && (
        <div className=" h-48 sm:h-72 my-1 rounded-md overflow-hidden bg-center">
          <img
            src={
              post?.image ||
              "https://images.unsplash.com/photo-1502325966718-85a90488dc29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="post image"
            className="h-full object-cover w-full"
          />
        </div>
      )}

      <div className=" flex items-center justify-between">
        <FaImage
          className=" size-7 sm:size-9 text-purple-600 cursor-pointer hover:text-purple-500 transition-all ease-in-out active:scale-75"
          onClick={() => {
            if (post.image != null) {
              setIsImage(false);
              setPost((prev) => ({
                ...prev,
                image: null,
              }));
            } else {
              setIsImage(true);
              document.getElementById("currentInput")?.click();
            }
          }}
        />

        <input
          id="currentInput"
          type="file"
          className="hidden"
          accept="image/*"
          onChange={(e) => handleImageUpload(e)}
        />

        <button
          type="button"
          className=" bg-purple-600 px-3 py-1 sm:px-5 sm:py-2 text-lg font-bold text-white rounded-lg hover:bg-purple-500 transition-all ease-in-out active:scale-75"
          onClick={handlePost}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default PostInput;
