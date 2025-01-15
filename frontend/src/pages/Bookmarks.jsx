import React from "react";

import Bookmarksicon from "../assets/icons/icons8-bookmark.svg";
import PageHeader from "../components/PageHeader";
import FeedPost from "../components/FeedPost";

const Bookmarks = () => {
  return (
    <div className=" flex flex-col gap-8">
      <PageHeader img={Bookmarksicon} />
      <FeedPost img="https://images.wondershare.com/virtulook/articles/random-background-generator-2.jpg" />
      <FeedPost text="hello ji!!" />
      <FeedPost
        text="I like this girl"
        img="https://i.pinimg.com/474x/93/70/43/937043dc1dc8eea232b14138de21cc18.jpg"
      />
      <FeedPost img="https://preview.redd.it/e6ieo2wrmnu71.jpg?width=626&format=pjpg&auto=webp&s=4122c3ec38d1ec0ec2969cb6d87b39869167d7c3" />
      <FeedPost text="hello ji!!" />
      <FeedPost
        text="I like this girl"
        img="https://thumbs.dreamstime.com/b/colorful-numbers-background-abstract-random-31850879.jpg"
      />
      <FeedPost img="https://img.lovepik.com/bg/20240408/Vibrant-Multicolored-Abstract-Building-3D-Render-as-a-Random-Blocks_5804357_wh1200.jpg" />
      <FeedPost text="hello ji!!" />
      <FeedPost
        text="I like this girl"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxEMslRkfk9qqZ7YIBtNUlelOrzqFCbDR5Hw&s"
      />
    </div>
  );
};

export default Bookmarks;
