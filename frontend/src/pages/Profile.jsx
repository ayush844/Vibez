import React, { useState } from "react";
import { AsideLeft } from "../components/AsideLeft";
import AsideRight from "../components/AsideRight";
import MobileNavBar from "../components/MobileNavBar";
import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import ClipLoader from "react-spinners/RingLoader";
import Post from "../components/Post";
import FollowingModal from "../components/modals/FollowingModal";
import FollowerModal from "../components/modals/FollowerModal";
import LogoutModal from "../components/modals/LogoutModal";

const Profile = () => {
  let [color, setColor] = useState("blue");

  const [followingModal, setFollowingModal] = useState(false);

  const [followerModal, setFollowerModal] = useState(false);

  const [logoutModal, setLogoutModal] = useState(false);

  const toggleFollowingModal = () => {
    setFollowingModal((modal) => !modal);
  };

  const toggleFollowerModal = () => {
    setFollowerModal((modal) => !modal);
  };

  const toggleLogoutModal = () => {
    setLogoutModal((modal) => !modal);
  };

  if (followingModal || followerModal || logoutModal) {
    document.body.classList.add("overflow-y-hidden");
  } else {
    document.body.classList.remove("overflow-y-hidden");
  }

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {followingModal && (
        <>
          <div
            onClick={toggleFollowingModal}
            className=" z-10 fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-[rgba(3,4,8,0.51)]"
          ></div>
          <FollowingModal toggleFollowingModal={toggleFollowingModal} />
        </>
      )}

      {followerModal && (
        <>
          <div
            onClick={toggleFollowerModal}
            className=" z-10 fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-[rgba(3,4,8,0.51)]"
          ></div>
          <FollowerModal toggleFollowerModal={toggleFollowerModal} />
        </>
      )}

      {logoutModal && (
        <>
          <div
            onClick={toggleLogoutModal}
            className=" z-10 fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-[rgba(3,4,8,0.51)]"
          ></div>
          <LogoutModal toggleLogoutModal={toggleLogoutModal} />
        </>
      )}

      <div>
        <MobileNavBar />

        <div className="flex justify-center px-5 sm:px-32 md:mt-4">
          <div className="flex h-screen w-screen">
            <AsideLeft />

            <main className="md:mx-4 w-full sm:basis-2/3">
              <header className="m-4 hidden sm:flex  justify-between">
                <h1 className="text-2xl font-bold">Profile</h1>
                <IoIosLogOut
                  onClick={() => setLogoutModal(true)}
                  className=" text-blue-600 text-3xl font-bold cursor-pointer"
                />
              </header>

              <header className="text-xl font-bold flex py-4 text-blue-600 sm:hidden justify-between">
                <Link to="/" id="hero-logo">
                  {" "}
                  ALCON{" "}
                </Link>
                <IoIosLogOut
                  onClick={() => setLogoutModal(true)}
                  className=" text-blue-600 text-3xl font-bold cursor-pointer"
                />
              </header>

              <>
                {isLoading ? (
                  <div className="z-20 flex items-center mt-10">
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
                  <div className=" mt-10 flex flex-col items-center">
                    <div className=" flex items-center gap-6">
                      <div className=" w-48 h-48 text-lg flex items-center justify-center border-2 p-1 border-blue-600 rounded-full">
                        <img
                          src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="profile image"
                          className=" w-44 h-44 rounded-full object-cover"
                        />
                      </div>
                      <div className=" flex flex-col justify-center gap-4 max-w-[20rem]">
                        <h1 className="text-2xl font-bold italic line-clamp-3">
                          Ayush Sharma
                        </h1>
                        <button className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl shadow-md hover:shadow-lg transition duration-150 ease-in-out disabled:cursor-not-allowed">
                          EDIT PROFILE
                        </button>
                      </div>
                    </div>

                    <div className="max-w-[40rem] my-8 md:my-12">
                      <p className=" line-clamp-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Illo dicta culpa tempora temporibus itaque
                        architecto iste aperiam ipsum delectus qui veniam
                        maiores omnis accusantium neque excepturi eos quasi,
                        repellat minus illum cumque harum rerum, fugiat
                        similique ad! Beatae praesentium eos consectetur eum
                        consequuntur maiores quibusdam accusamus nihil hic minus
                        at earum, in illo necessitatibus dolorum nostrum
                        exercitationem! Sequi cum magni suscipit natus,
                        architecto iusto dolores repellendus nisi dolor atque
                        nesciunt eum consequuntur a nam, vitae animi nemo
                        fugiat. Explicabo optio consectetur at debitis culpa
                        voluptas iusto tempora, ex ratione. Architecto rerum
                        ipsam maxime fuga labore. Officia expedita neque
                        voluptates blanditiis?
                      </p>
                    </div>

                    <div className="max-w-[50rem] my-8 md:my-12 flex items-center justify-between gap-6 md:gap-8">
                      <h1
                        className=" text-lg md:text-2xl font-semibold cursor-pointer hover:text-blue-900 group"
                        onClick={() => setFollowerModal(true)}
                      >
                        10{" "}
                        <span className=" text-gray-600 group-hover:text-blue-900">
                          followers
                        </span>
                      </h1>
                      <h1
                        className=" text-lg md:text-2xl font-semibold cursor-pointer hover:text-blue-900 group"
                        onClick={() => setFollowingModal(true)}
                      >
                        7{" "}
                        <span className=" text-gray-600 group-hover:text-blue-900">
                          following
                        </span>
                      </h1>
                      <h1 className=" text-lg md:text-2xl font-semibold">
                        5 <span className=" text-gray-600">posts</span>
                      </h1>
                    </div>

                    <div className="border-b-2 w-full border-gray-500"></div>

                    <div className="max-w-[50rem] my-8 md:my-12 flex flex-col justify-center gap-6 md:gap-8">
                      <h1 className=" text-center text-3xl font-bold">
                        Your Posts
                      </h1>
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
                    </div>
                  </div>
                )}
              </>
            </main>

            <AsideRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
