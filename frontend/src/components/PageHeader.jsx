import React from "react";

const PageHeader = ({ img }) => {
  return (
    <div className=" w-full h-fit bg-gray-50 rounded-lg flex justify-center">
      <img src={img} alt="explore" className={` size-16 sm:size-20`} />
    </div>
  );
};

export default PageHeader;
