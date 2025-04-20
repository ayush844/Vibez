import React, { useEffect, useState } from "react";
import Homeicon from "../assets/icons/home.svg";
import PostInput from "../components/PostInput";
import FeedPost from "../components/FeedPost";
import PageHeader from "../components/PageHeader";

const Feed = () => {
  const [feedPosts, setFeedPosts] = useState([]);

  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);

  const userId = localStorage.getItem("vibez_userid");

  console.log("posts", feedPosts);

  function isPostBookmarked(postId) {
    // console.log(bookmarkedPosts.includes(postId), postId);
    return bookmarkedPosts.includes(postId);
  }

  useEffect(() => {
    const getAllFeedPosts = async () => {
      try {
        const response = await fetch(`http://localhost:7000/api/user/feed/`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("vibez_token")}`,
          },
        });
        const data = await response.json();
        setFeedPosts(data);
      } catch (error) {
        console.error("Error during fetching feed posts:", error);
        toast.error("Something went wrong while fetching feed");
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
      } catch (error) {
        toast.error("Something went wrong while fetching posts");
      }
    };

    getAllFeedPosts();
    getBookmarkedPosts();
  }, []);

  return (
    <div className=" flex flex-col gap-8">
      <PostInput />
      <PageHeader img={Homeicon} />

      {feedPosts.length > 0 ? (
        <>
          {feedPosts.map((post) => (
            <FeedPost
              key={post._id}
              postId={post._id}
              img={post.image}
              text={post.content}
              profilePic={post.userId.profilePic}
              name={`${post.userId.firstname} ${post.userId.lastname}`}
              date={post.createdAt}
              likesCount={post.likes.length}
              id={post.userId._id}
              isBookmarked={isPostBookmarked(post._id)}
              isLiked={post.likes.some((like) => like._id === userId)}
            />
          ))}
        </>
      ) : (
        <>
          <h1>No feed yet !</h1>
        </>
      )}

      <h1>Add more friends to view more posts</h1>
    </div>
  );
};

export default Feed;
