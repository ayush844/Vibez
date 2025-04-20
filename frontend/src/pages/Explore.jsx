import React, { useEffect, useState } from "react";
import Exploreicon from "../assets/icons/icons8-explore.svg";
import PageHeader from "../components/PageHeader";
import ExplorePost from "../components/ExplorePost";

import Masonry from "react-masonry-css";

const Explore = () => {
  const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    640: 1,
  };

  const [allPosts, setAllPosts] = useState([]);
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);

  const userId = localStorage.getItem("vibez_userid");

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const response = await fetch(
          `http://localhost:7000/api/post/allPosts`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("vibez_token")}`,
            },
          }
        );
        const data = await response.json();
        setAllPosts(data);
      } catch (error) {
        console.error("Error during fetching explore posts:", error);
        toast.error("Something went wrong while fetching posts");
      }
    };

    const getBookmarkedPosts = async () => {
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
        setBookmarkedPosts(data.bookmarks.map((post) => post._id));
        console.log("Bookmarked posts: >>>>> ", data.bookmarks);
      } catch (error) {
        console.error("Error during fetching explore posts:", error);
        toast.error("Something went wrong while fetching posts");
      }
    };

    getAllPosts();
    getBookmarkedPosts();
  }, []);

  function isPostBookmarked(postId) {
    console.log(bookmarkedPosts.includes(postId), postId);
    return bookmarkedPosts.includes(postId);
  }

  const toggleBookmark = (postId) => {
    setBookmarkedPosts((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    );
  };

  const toggleLike = (postId) => {
    setAllPosts((prevPosts) =>
      prevPosts.map((post) =>
        post._id === postId
          ? {
              ...post,
              likes: post.likes.includes(userId)
                ? post.likes.filter((id) => id !== userId) // Unlike
                : [...post.likes, userId], // Like
            }
          : post
      )
    );
  };

  return (
    <div className=" flex flex-col gap-8">
      <PageHeader img={Exploreicon} />
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-4"
        columnClassName="flex flex-col gap-4"
      >
        {allPosts.length > 0 &&
          allPosts.map((post) => (
            <ExplorePost
              key={post._id}
              img={post.image}
              postId={post._id}
              userId={post.userId}
              content={post.content}
              name={`${post.userId.firstname} ${post.userId.lastname}`}
              profilePic={post.userId.profilePic}
              username={post.userId.username}
              isBookmarked={isPostBookmarked(post._id)}
              onToggleBookmark={toggleBookmark}
              isLiked={post.likes.includes(userId)}
              onToggleLike={toggleLike}
              likesCount={post.likes.length}
              id={post.userId._id}
            />
          ))}
      </Masonry>
    </div>
  );
};

export default Explore;
