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
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userInfo = await getUserInfo();
        setUser(userInfo);
        console.log(userInfo);
      } catch (err) {
        setError(err.message || "Failed to fetch user info.");
      } finally {
        // setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

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

            <button
              onClick={() => navigate("/setting")}
              className=" bg-purple-600 active:scale-90 transition-all ease-in-out hover:opacity-90 px-2 sm:px-4 py-1 sm:py-2 text-white rounded-md font-medium sm:font-bold"
            >
              Edit Profile
            </button>
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
                <span className=" font-bold">{user?.followers.length}</span>{" "}
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
            <FeedPost img="https://preview.redd.it/e6ieo2wrmnu71.jpg?width=626&format=pjpg&auto=webp&s=4122c3ec38d1ec0ec2969cb6d87b39869167d7c3" />
            <FeedPost text="hello ji!!" />
            <FeedPost
              text="I like this girl"
              img="https://thumbs.dreamstime.com/b/colorful-numbers-background-abstract-random-31850879.jpg"
            />
            <FeedPost img="https://img.lovepik.com/bg/20240408/Vibrant-Multicolored-Abstract-Building-3D-Render-as-a-Random-Blocks_5804357_wh1200.jpg" />
          </>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3">
            <ProfileMedia image="https://images.unsplash.com/photo-1512331455279-c8ae8178f586?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <ProfileMedia image="https://images.unsplash.com/photo-1670233169914-00a9ccb25f68?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <ProfileMedia image="https://images.unsplash.com/photo-1579568729229-d251ed159405?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <ProfileMedia image="https://images.unsplash.com/photo-1598186284297-a7d54c8c50d4?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <ProfileMedia image="https://images.unsplash.com/photo-1599186002983-61357b3339a7?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <ProfileMedia image="https://images.unsplash.com/photo-1731143727589-1e6f583ee4a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <ProfileMedia image="https://images.unsplash.com/photo-1579568729229-d251ed159405?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <ProfileMedia image="https://images.unsplash.com/photo-1598186284297-a7d54c8c50d4?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <ProfileMedia image="https://images.unsplash.com/photo-1599186002983-61357b3339a7?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <ProfileMedia image="https://images.unsplash.com/photo-1731143727589-1e6f583ee4a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <ProfileMedia image="https://images.unsplash.com/photo-1512331455279-c8ae8178f586?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <ProfileMedia image="https://images.unsplash.com/photo-1670233169914-00a9ccb25f68?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <ProfileMedia image="https://images.unsplash.com/photo-1579568729229-d251ed159405?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <ProfileMedia image="https://images.unsplash.com/photo-1598186284297-a7d54c8c50d4?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
