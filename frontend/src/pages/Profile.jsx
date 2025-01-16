import React from "react";
import PageHeader from "../components/PageHeader";
import Profileicon from "../assets/icons/icons8-male-user.svg";
import { FaLink } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <PageHeader img={Profileicon} />
      <div className=" rounded-md bg-gray-50 overflow-x-hidden">
        <div className=" w-full px-0 py-0 h-36 sm:h-48 rounded-md rounded-b-none">
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20230707/pngtree-exploring-the-world-of-iot-devices-and-connections-in-a-3d-image_3766496.jpg"
            alt="cover pic"
            className=" w-full h-full object-cover rounded-md rounded-b-none "
          />
        </div>
        <div className=" px-4 sm:px-8">
          <div className=" flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <div className=" w-28 sm:w-36 h-28 sm:h-36 rounded-full -mt-16 sm:-mt-12 border-2 border-purple-600">
              <img
                src="https://avatar.iran.liara.run/public/8"
                alt="profile pic"
                className=" w-full h-full object-cover"
              />
            </div>

            <button className=" bg-purple-600 active:scale-90 transition-all ease-in-out hover:opacity-90 px-2 sm:px-4 py-1 sm:py-2 text-white rounded-md font-medium sm:font-bold">
              Edit Profile
            </button>
          </div>
          <div className=" flex flex-col items-center sm:items-start gap-1 my-6">
            <h1 className=" font-bold text-xl sm:text-3xl">Ayush Sharma</h1>
            <h3 className=" text-lg sm:text-xl font-semibold text-gray-500">
              @ayush844
            </h3>
            <p className=" text-start line-clamp-5 text-sm sm:text-base font-normal sm:font-medium">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae,
              atque fuga qui aspernatur debitis voluptas nisi, eius optio
              recusandae impedit officia dolor sit amet consectetur, adipisicing
              elit. Quae, atque fuga qui aspernatur debitis voluptas nisi, eius
              optio recusandae impedit officia fugiat, sequi eaque. Velit ea
              fuga impedit vitae sed!
            </p>
          </div>
          <div className=" flex flex-col items-start gap-4 sm:gap-8">
            <div className=" flex flex-col items-start sm:flex-row sm:items-center gap-2 sm:gap-4">
              <div className=" flex items-center gap-1">
                <MdLocationOn className=" size-4 sm:size-6 text-red-600" />
                <span className=" font-semibold text-base sm:text-lg">
                  Delhi, India
                </span>
              </div>
              <div className="flex items-center gap-1 line-clamp-1">
                <FaLink className=" size-4 sm:size-6 text-gray-700" />
                <span className=" line-clamp-1 text-sm sm:text-base text-blue-700 hover:underline cursor-pointer">
                  github.com/johndoe
                </span>
              </div>
            </div>

            <div className=" flex items-center gap-2 mb-6">
              <FaUserFriends className=" size-4 sm:size-6 text-purple-600" />
              <h3 className=" text-lg sm:text-xl font-normal">
                <span className=" font-bold">2,563</span> friends
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full h-fit bg-gray-50 rounded-lg flex items-center justify-center sm:justify-start px-4 gap-4">
        <div className=" text-base sm:text-xl px-6 py-4 font-semibold border-b-2 border-purple-600 cursor-pointer transition-all ease-in-out hover:border-b-2 hover:border-purple-400 hover:text-gray-700">
          Posts
        </div>
        <div className=" text-base sm:text-xl px-6 py-4  font-semibold border-b-2  text-gray-600 cursor-pointer transition-all ease-in-out hover:border-b-2 hover:border-purple-400 hover:text-gray-700">
          Media
        </div>
      </div>
    </div>
  );
};

export default Profile;
