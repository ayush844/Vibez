import React, { useState } from "react";
import { AsideLeft } from "../components/AsideLeft";
import AsideRight from "../components/AsideRight";
import MobileNavBar from "../components/MobileNavBar";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/RingLoader";
import Post from "../components/Post";

const Explore = () => {
  let [color, setColor] = useState("blue");

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div>
        <MobileNavBar />

        <div className="flex justify-center px-5 sm:px-32 md:mt-4">
          <div className="flex h-screen w-screen">
            <AsideLeft />

            <main className="md:mx-12 w-full sm:basis-2/3 ">
              <header className="m-4 hidden sm:flex">
                <h1 className="text-2xl font-bold">Explore</h1>
              </header>

              <header className="text-xl font-bold flex py-4 text-blue-600 sm:hidden">
                <Link to="/" id="hero-logo">
                  {" "}
                  ALCON{" "}
                </Link>
              </header>

              <>
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
            </main>

            <AsideRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
