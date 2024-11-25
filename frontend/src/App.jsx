import React, { useState, CSSProperties } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { GiSettingsKnobs } from "react-icons/gi";
import { BsFillImageFill } from "react-icons/bs";
import { AsideLeft } from "./components/AsideLeft";
import AsideRight from "./components/AsideRight";
import { Link } from "react-router-dom";
import MobileNavBar from "./components/MobileNavBar";
import { CiMenuKebab } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";

// import ClipLoader from "react-spinners/ScaleLoader";

import ClipLoader from "react-spinners/RingLoader";
import Post from "./components/Post";

function App() {
  const [content, setContent] = useState("");
  const [showFilterPostModal, setShowFilterPostModal] = useState(false);
  const [sortPostBy, setSortPostBy] = useState("Latest");

  let [color, setColor] = useState("blue");

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className="mb-40 ">
        <MobileNavBar />

        <div className="flex justify-center px-5 sm:px-32 md:mt-4 relative">
          <div className="flex h-screen w-screen">
            <AsideLeft />

            <main className="md:mx-12 w-full sm:basis-2/3 ">
              <header className="m-4 hidden sm:flex">
                <h1 className="text-2xl font-bold">Home</h1>
              </header>

              <header className="text-xl font-bold flex py-4 text-blue-600 sm:hidden">
                <Link to="/" id="hero-logo">
                  {" "}
                  ALCON{" "}
                </Link>
              </header>

              {/* creating a post */}

              <>
                <div className="border-2 sm:ml-3 sm:mr-10 flex px-2 py-3 rounded-md w-full">
                  <div className="mt-3 w-12 h-12 text-lg flex-none">
                    <img
                      src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="flex-none w-12 h-12 rounded-full object-cover"
                      alt="avatar"
                    />
                  </div>

                  <div className="w-full px-4">
                    <textarea
                      value={content}
                      placeholder="What's happening?"
                      className="resize-none mt-3 pb-3 w-full h-28 bg-slate-100 focus:outline-none rounded-xl p-2"
                      onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                    {/* <div className="max-w-xl max-h-80 mx-auto rounded-md">
                      <img
                        src={
                          "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        }
                        className={
                          "block max-w-full max-h-20 rounded-md my-2 cursor-pointer"
                        }
                        alt="avatar"
                      />
                    </div> */}

                    <div className="flex justify-between">
                      <label className="flex m-2">
                        {/* <input
                                                className="hidden"
                                                type="file"
                                                onChange={(e) => setPostImageUrl(e.target.files[0])}
                                            /> */}
                        <BsFillImageFill className="text-2xl mt-1 text-blue-700 cursor-pointer" />
                      </label>
                      <button className="p-2.5 bg-blue-600 hover:bg-blue-800 text-white rounded-xl shadow-md hover:shadow-lg transition duration-150 ease-in-out disabled:cursor-not-allowed">
                        Post
                      </button>
                    </div>
                  </div>
                </div>

                {/* filter posts by date and trending */}

                <div className="flex pl-0.5 pr-0.5 sm:pr-6 sm:px-5 py-3 justify-between relative my-8">
                  <h1 className="text-2xl font-bold">{sortPostBy} Posts</h1>

                  <GiSettingsKnobs
                    className="fill-blue-600 stroke-0 hover:stroke-2 text-2xl cursor-pointer"
                    onClick={() => setShowFilterPostModal((prev) => !prev)}
                  ></GiSettingsKnobs>

                  {/* filter modal */}

                  {showFilterPostModal && (
                    <div className="w-30 h-22 px-1 shadow-xl bg-slate-100 border border-slate-300 text-slate-600 font-semibold absolute right-11 top-4 z-20 rounded-xl">
                      <ul className="p-2 cursor-pointer text-start">
                        <li
                          className="p-1 hover:bg-slate-200 rounded"
                          onClick={() => {
                            setSortPostBy("Latest");
                            setShowFilterPostModal(false);
                          }}
                        >
                          Latest
                        </li>
                        <li
                          className="p-1 hover:bg-slate-200 rounded"
                          onClick={() => {
                            setSortPostBy("Oldest");
                            setShowFilterPostModal(false);
                          }}
                        >
                          Oldest
                        </li>
                        <li
                          className="p-1 hover:bg-slate-200 rounded"
                          onClick={() => {
                            setSortPostBy("Trending");
                            setShowFilterPostModal(false);
                          }}
                        >
                          Trending
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                {isLoading ? (
                  <div className="z-20 flex items-center">
                    <ClipLoader
                      color={color}
                      loading={true}
                      cssOverride={override}
                      size={100}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                  </div>
                ) : (
                  <>
                    <Post />

                    <Post />

                    <Post />

                    <Post />

                    <Post />

                    <Post />

                    <Post />

                    <Post />
                  </>
                )}
              </>

              <div className=" h-40"></div>
            </main>

            <AsideRight />

            {/* 
                    <a href="#">
                        <AiOutlineArrowUp className="hidden sm:block fixed bottom-0 right-20 bg-blue-300 text-slate-50 text-5xl p-3 rounded-full mb-2 mr-20 hover:bg-blue-500" />
                    </a> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
