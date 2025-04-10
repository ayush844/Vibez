import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import { LuUserRoundSearch } from "react-icons/lu";
import Friendsicon from "../../assets/icons/icons8-friend.svg";
import MyFriendBox from "../../components/MyFriendBox";

import emoji from "../../assets/icons/icons8-crying-baby.svg";

const MyFriends = () => {
  const [friends, setFriends] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  useEffect(() => {
    const getFriends = async () => {
      const response = await fetch(`http://localhost:7000/api/user/friends/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("vibez_token")}`,
        },
      });
      const data = await response.json();
      if (data?.friends) {
        setFriends(data.friends);
      }
    };

    getFriends();
  }, []);

  // Filtered friends based on search input
  const filteredFriends = friends.filter((friend) =>
    `${friend.firstname} ${friend.lastname} ${friend.username}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-8">
      <PageHeader img={Friendsicon} />
      <div className="w-full h-fit bg-gray-50 rounded-lg flex justify-center">
        <span className="text-xl font-light my-3">My Friends</span>
      </div>

      {/* Search Input */}
      <div className="w-full h-fit flex justify-center sm:justify-end">
        <div className="flex items-center gap-2">
          <div className="w-7 sm:w-12 h-7 sm:h-12 rounded-full p-2 bg-gray-50 sm:flex items-center justify-center">
            <LuUserRoundSearch className="size-4 sm:size-7 text-indigo-600" />
          </div>

          <input
            type="text"
            placeholder="Search your friend"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-2 sm:px-4 py-1 sm:py-2 rounded-xl sm:rounded-3xl focus:outline-none text-sm sm:text-lg"
          />
        </div>
      </div>

      {/* Friends List */}
      {filteredFriends.length > 0 ? (
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredFriends.map((friend, index) => (
              <MyFriendBox
                key={index}
                firstname={friend.firstname}
                lastname={friend.lastname}
                profilePic={friend.profilePic}
                username={friend.username}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full h-fit flex flex-col items-center gap-4 py-6 bg-gray-50 rounded-lg">
          <img src={emoji} alt="error icon" className="size-64" />
          <h1 className="text-3xl font-normal text-purple-900">
            {searchQuery ? "No friends found" : "You have no friends"}
          </h1>
        </div>
      )}
    </div>
  );
};

export default MyFriends;
