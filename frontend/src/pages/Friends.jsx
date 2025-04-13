import React, { useEffect, useState } from "react";
import Friendsicon from "../assets/icons/icons8-friend.svg";
import PageHeader from "../components/PageHeader";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LuUserRoundSearch } from "react-icons/lu";
import NewPeople from "../components/NewPeople";
import toast from "react-hot-toast";

const Friends = () => {
  const [friendRequests, setFriendRequests] = useState([]);
  const [friends, setFriends] = useState([]);
  const [friendRecommendations, setFriendRecommendations] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  console.log("friends recommendation >>> ", friendRecommendations);

  useEffect(() => {
    try {
      const getFriendRequests = async () => {
        const response = await fetch(
          `http://localhost:7000/api/user/friend-request/`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("vibez_token")}`,
            },
          }
        );

        const data = await response.json();

        if (data?.friendRequests) {
          setFriendRequests(data.friendRequests);
        }
      };

      const getFriends = async () => {
        const response = await fetch(
          `http://localhost:7000/api/user/friends/`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("vibez_token")}`,
            },
          }
        );
        const data = await response.json();
        if (data?.friends) {
          setFriends(data.friends);
        }
      };

      const getFriendRecommendations = async () => {
        const response = await fetch(
          `http://localhost:7000/api/user/recommendations/`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("vibez_token")}`,
            },
          }
        );
        const data = await response.json();
        if (data?.recommendation) {
          setFriendRecommendations(data.recommendation);
        }
      };

      getFriendRequests();
      getFriends();
      getFriendRecommendations();
    } catch (error) {
      console.error("Error fetching friend requests:", error);
      toast.error(
        "Something went wrong fetching friend requests. Please try again later."
      );
    }
  }, []);

  return (
    <div className="flex flex-col gap-8 ">
      <PageHeader img={Friendsicon} />
      <div className=" flex flex-col sm:flex-row items-center justify-evenly px-1 sm:px-4 gap-4">
        <div className=" w-60 h-48 sm:h-60 bg-gray-50 rounded-md flex-grow flex flex-col justify-evenly items-center">
          <h1 className=" text-6xl font-extrabold text-purple-600 line-clamp-1">
            {friendRequests?.length || 0}
          </h1>
          <h3 className=" text-xl font-bold">Friend Requests</h3>
          <Link to="/friends/friend_requests">
            <div className=" flex items-center gap-3 hover:underline cursor-pointer group active:scale-90 transition-all ease-in-out">
              <span className=" text-purple-600 font-light text-base ">
                View all requests
              </span>
              <FaArrowRight className=" text-purple-600 group-hover:scale-125 transition-all ease-in-out" />
            </div>
          </Link>
        </div>
        <div className=" w-60 h-48 sm:h-60 bg-gray-50 rounded-md flex-grow  flex flex-col justify-evenly items-center">
          <h1 className=" text-6xl font-extrabold text-indigo-600 line-clamp-1">
            {friends?.length || 0}
          </h1>
          <h3 className=" text-xl font-bold">Friends</h3>
          <Link to="/friends/my_friends">
            <div className=" flex items-center gap-3 hover:underline cursor-pointer group active:scale-90 transition-all ease-in-out">
              <span className=" text-indigo-600 font-light text-base ">
                View your friends
              </span>
              <FaArrowRight className=" text-indigo-600 group-hover:scale-125 transition-all ease-in-out" />
            </div>
          </Link>
        </div>
      </div>

      <div className=" w-full h-fit flex justify-center sm:justify-end">
        <div className=" flex items-center gap-2">
          <div className=" w-7 sm:w-12 h-7 sm:h-12 rounded-full p-2 bg-gray-50 sm:flex items-center justify-center">
            <LuUserRoundSearch className=" size-4 sm:size-7 text-indigo-600" />
          </div>

          <input
            type="text"
            placeholder="search your friend"
            className="px-2 sm:px-4 py-1 sm:py-2 rounded-xl sm:rounded-3xl focus:outline-none text-sm sm:text-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {friendRecommendations?.length > 0 && (
        <div className=" w-full flex justify-center">
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {friendRecommendations
              .filter((friend) => {
                const fullName =
                  `${friend.firstname} ${friend.lastname}`.toLowerCase();
                const username = friend.username?.toLowerCase() || "";
                const search = searchTerm.toLowerCase();
                return fullName.includes(search) || username.includes(search);
              })
              .map((friend, index) => (
                <NewPeople
                  key={index}
                  firstname={friend.firstname}
                  lastname={friend.lastname}
                  profilePic={friend.profilePic}
                  username={friend.username}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Friends;
