import React from "react";
import Homeicon from "../assets/icons/home.svg";
import PostInput from "../components/PostInput";
import FeedPost from "../components/FeedPost";
import PageHeader from "../components/PageHeader";

const Feed = () => {
  return (
    <div className=" flex flex-col gap-8">
      <PostInput />
      <PageHeader img={Homeicon} />
      <FeedPost img="https://www.edeltaes.com/wp-content/themes/wp-bootstrap-4/assets/images/default-image.jpg" />
      <FeedPost text="hello ji!!" />
      <FeedPost
        text="I like this girl"
        img="https://cricclubs.com/documentsRep/profilePics/default-female-Image.jpg"
      />
    </div>
  );
};

export default Feed;
