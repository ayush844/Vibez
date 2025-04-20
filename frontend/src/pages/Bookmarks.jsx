import React, { useEffect, useState } from "react";

import Bookmarksicon from "../assets/icons/icons8-bookmark.svg";
import PageHeader from "../components/PageHeader";
import FeedPost from "../components/FeedPost";
import toast from "react-hot-toast";

const Bookmarks = () => {
  const [bookmarkPosts, setBookmarkPosts] = useState([]);

  const userId = localStorage.getItem("vibez_userid");

  useEffect(() => {
    const getAllBookmarkPosts = async () => {
      try {
        const response = await fetch(
          `http://localhost:7000/api/user/myBookmarks`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("vibez_token")}`,
            },
          }
        );
        const data = await response.json();
        setBookmarkPosts(data.bookmarks);
      } catch (error) {
        console.error("Error during fetching bookmark posts:", error);
        toast.error("Something went wrong while fetching Bookmarks");
      }
    };

    getAllBookmarkPosts();
  }, []);

  console.log("bookmarks: ", bookmarkPosts);

  return (
    <div className=" flex flex-col gap-8">
      <PageHeader img={Bookmarksicon} />

      {bookmarkPosts.length > 0 ? (
        <>
          {bookmarkPosts.map((post) => (
            <FeedPost
              key={post._id}
              postId={post._id}
              img={post.image}
              text={post.content}
              profilePic={post.userId.profilePic}
              name={`${post.userId.firstname} ${post.userId.lastname}`}
              date={post.createdAt}
              isBookmarked={post.isBookmarked}
              isLiked={post.likes.includes(userId)}
              likesCount={post.likes.length}
              id={post.userId._id}
            />
          ))}
        </>
      ) : (
        <>
          <h1>No post bookmarked yet !</h1>
        </>
      )}
    </div>
  );
};

export default Bookmarks;
