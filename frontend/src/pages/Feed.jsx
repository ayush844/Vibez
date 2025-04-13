import React, { useEffect } from "react";
import Homeicon from "../assets/icons/home.svg";
import PostInput from "../components/PostInput";
import FeedPost from "../components/FeedPost";
import PageHeader from "../components/PageHeader";

const Feed = () => {
  const [feedPosts, setFeedPosts] = React.useState([]);

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

    getAllFeedPosts();
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
