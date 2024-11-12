import React from "react";
import FamousPeopleCard from "./FamousPeopleCard";

const AsideRight = () => {
  return (
    <aside className="hidden basis-1/6 lg:basis-1/5 border-2 rounded-md border-blue-400 min-h-[20rem] max-h-[30rem]  2xl:flex flex-col items-center overflow-hidden gap-6 px-3 py-4 mt-28">
      <h1 className="text-lg font-bold underline text-blue-500">
        Famous People You Can Follow
      </h1>
      <div className=" flex flex-col items-center h-[25rem] border-black rounded-md border w-full overflow-y-auto   scrollbar-thin scrollbar-webkit no-scrollbar">
        <FamousPeopleCard />
        <FamousPeopleCard />
        <FamousPeopleCard />
        <FamousPeopleCard />
        <FamousPeopleCard />
      </div>
    </aside>
  );
};

export default AsideRight;
