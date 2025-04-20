import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import Profileicon from "../assets/icons/icons8-male-user.svg";
import { FaLink } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import FeedPost from "../components/FeedPost";
import ProfileMedia from "../components/ProfileMedia";

import defaultCover from "../assets/default_images/defaultCover.jpg";
import defaultAvatar from "../assets/default_images/defaultProfile.png";
import { getUserInfo } from "../utils/getLoggedInUser";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const Person = () => {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [userPosts, setUserPosts] = useState(null);
  const [userPostsMedias, setUserPostsMedias] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const response = await fetch(`http://localhost:7000/api/user/${id}/`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("vibez_token")}`,
          },
        });
        const data = await response.json();

        setUser(data);

        setUserPosts(data.posts);

        const imageUrls = data.posts
          .map((post) => post.image)
          .filter((image) => image !== null);

        setUserPostsMedias(imageUrls);
      } catch (error) {
        console.error("Error during fetching user posts:", error);
        toast.error("Something went wrong while fetching user");
      }
    };

    if (id) {
      fetchUserPosts();
    }
  }, [id]);

  console.log("users posts", userPosts);

  const [activeTab, setActiveTab] = useState("Posts");

  return (
    <div className="flex flex-col gap-4 ">
      <PageHeader img={Profileicon} />
      <div className=" rounded-md bg-gray-50 overflow-x-hidden">
        <div className=" w-full px-0 py-0 h-36 sm:h-60 rounded-md rounded-b-none">
          <img
            src={user?.coverPic}
            alt="cover pic"
            className=" w-full h-full object-cover rounded-md rounded-b-none object-center "
          />
        </div>
        <div className=" px-4 sm:px-8">
          <div className=" flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <div className=" w-28 sm:w-36 h-28 sm:h-36 rounded-full -mt-16 sm:-mt-12 border-2 border-purple-600 p-0 bg-black overflow-hidden">
              <img
                src={user?.profilePic}
                alt="profile pic"
                className=" w-full h-full object-cover"
              />
            </div>

            {/* <button
              onClick={() => navigate("/setting")}
              className=" bg-purple-600 active:scale-90 transition-all ease-in-out hover:opacity-90 px-2 sm:px-4 py-1 sm:py-2 text-white rounded-md font-medium sm:font-bold"
            >
              Add Friend
            </button> */}
          </div>
          <div className=" flex flex-col items-center sm:items-start gap-1 my-6">
            <h1 className=" font-bold text-xl sm:text-3xl">
              {user?.firstname + " " + user?.lastname}
            </h1>
            <h3 className=" text-lg sm:text-xl font-semibold text-gray-500">
              @{user?.username}
            </h3>
            <p className=" text-start line-clamp-5 text-sm sm:text-base font-normal sm:font-medium">
              {user?.bio}
            </p>
          </div>

          <div className=" flex flex-col items-start gap-4 sm:gap-8">
            {(user?.location || user?.link) && (
              <div className=" flex flex-col items-start sm:flex-row sm:items-center gap-2 sm:gap-4">
                {user?.location && (
                  <div className=" flex items-center gap-1">
                    <MdLocationOn className=" size-4 sm:size-6 text-red-600" />
                    <span className=" font-semibold text-base sm:text-lg">
                      {user?.location.label}
                    </span>
                  </div>
                )}
                {user?.link && (
                  <div className="flex items-center gap-1 line-clamp-1">
                    <FaLink className=" size-4 sm:size-6 text-gray-700" />
                    <a
                      href={user?.link}
                      target="_blank"
                      className=" line-clamp-1 text-sm sm:text-base text-blue-700 hover:underline cursor-pointer"
                    >
                      {user?.link}
                    </a>
                  </div>
                )}
              </div>
            )}
            <div className=" flex items-center gap-2 mb-6">
              <FaUserFriends className=" size-4 sm:size-6 text-purple-600" />
              <h3 className=" text-lg sm:text-xl font-normal">
                <span className=" font-bold">{user?.friends?.length}</span>{" "}
                friends
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full h-fit bg-gray-50 rounded-lg flex items-center justify-center sm:justify-start px-4 gap-4">
        <div
          className={`text-base sm:text-xl px-6 py-4 font-semibold border-b-2 ${
            activeTab === "Posts"
              ? "border-purple-600"
              : "border-transparent text-gray-600"
          } cursor-pointer transition-all ease-in-out hover:border-purple-400 hover:text-gray-700`}
          onClick={() => setActiveTab("Posts")}
        >
          Posts
        </div>
        <div
          className={`text-base sm:text-xl px-6 py-4 font-semibold border-b-2 ${
            activeTab === "Media"
              ? "border-purple-600"
              : "border-transparent text-gray-600"
          } cursor-pointer transition-all ease-in-out hover:border-purple-400 hover:text-gray-700`}
          onClick={() => setActiveTab("Media")}
        >
          Media
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {activeTab === "Posts" ? (
          <>
            {userPosts?.map((post) => (
              <FeedPost
                key={post._id}
                text={post.content}
                img={post.image}
                profilePic={user.profilePic}
                name={`${user?.firstname} ${user?.lastname}`}
                date={post.createdAt}
                id={user?._id}
              />
            ))}
          </>
        ) : (
          userPostsMedias.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3">
              {userPostsMedias.map((media, index) => (
                <ProfileMedia key={index} image={media} />
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Person;
