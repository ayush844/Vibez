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

    getAllPosts();
  }, []);

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
            />
          ))}
        <ExplorePost
          img={
            "https://www.edeltaes.com/wp-content/themes/wp-bootstrap-4/assets/images/default-image.jpg"
          }
        />
        <ExplorePost />
        <ExplorePost
          img={
            "https://cdn.shopify.com/s/files/1/0560/4789/4710/t/20/assets/windows_11_default_background-7NqUyQ.True?v=1709264662"
          }
        />
        <ExplorePost />
        <ExplorePost />
        <ExplorePost
          img={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQcbW5Lknvgs2nBsUeHhAqZNki9dblplJswg&s"
          }
        />
        <ExplorePost />
        <ExplorePost
          img={
            "https://i0.wp.com/www.omgubuntu.co.uk/wp-content/uploads/2010/09/ubuntu-21.04-default-wallpaper.jpg?ssl=1"
          }
        />
        <ExplorePost />
        <ExplorePost />
        <ExplorePost
          img={"https://petapixel.com/assets/uploads/2015/06/screenshot1.jpg"}
        />
        <ExplorePost />
        <ExplorePost
          img={
            "https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-woman-in-a-dark-shade-wearing-sunglasses-image_2947457.jpg"
          }
        />
        <ExplorePost />
        <ExplorePost />
        <ExplorePost
          img={
            "https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-pictures-of-the-moon-wallpaper-image_2953552.jpg"
          }
        />
        <ExplorePost />
        <ExplorePost img={"https://wallpapercave.com/wp/wp11105429.jpg"} />
        <ExplorePost />
        <ExplorePost />
        <ExplorePost
          img={
            "https://archive.org/download/win10-backgrounds/Win10%20DBs/img10.jpg"
          }
        />
        <ExplorePost />
        <ExplorePost
          img={
            "https://www.fineshare.com/background/cool-zoom-backgrounds-4.jpg"
          }
        />
        <ExplorePost />
        <ExplorePost />
        <ExplorePost
          img={
            "https://www.pixelstalk.net/wp-content/uploads/image10/A-cool-background-futuristic-cityscape-at-night-with-neon-lights-reflecting-off-wet-pavement.jpg"
          }
        />
        <ExplorePost />
        <ExplorePost
          img={
            "https://t4.ftcdn.net/jpg/05/72/82/85/360_F_572828530_ofzCYowQVnlOwkcoBJnZqT36klbJzWdn.jpg"
          }
        />
        <ExplorePost />
        <ExplorePost />
      </Masonry>
    </div>
  );
};

export default Explore;
