import React from "react";

const ProfileMedia = ({
  image = "https://images.unsplash.com/photo-1568060991870-4939f10d4edd?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
}) => {
  return (
    <div className="h-40 w-full cursor-pointer">
      <img
        src={image}
        alt="profile media"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ProfileMedia;
