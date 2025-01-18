import React from "react";
import PageHeader from "../components/PageHeader";
import Settingsicon from "../assets/icons/icons8-settings.svg";
import CountryStateDropdown from "../components/CountryStateDropdown";
import defaultCover from "../assets/default_images/defaultCover.jpg";
import defaultProfile from "../assets/default_images/defaultProfile.png";
import { RiImageAddFill } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";

const Settings = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <PageHeader img={Settingsicon} />
      <div className="flex flex-col gap-6 bg-gray-50 rounded-md w-full h-fit items-center">
        <h1 className=" text-2xl sm:text-3xl text-purple-900 mt-4 font-light">
          Account Setting
        </h1>
        <div className=" w-full h-60 sm:h-80 overflow-hidden relative">
          <img
            src={defaultCover}
            alt="cover pic"
            className=" w-full h-full object-cover object-center"
          />
          <div className=" absolute bottom-1 right-1 cursor-pointer hover:bg-slate-100 active:scale-90 transition-all border-e-slate-50 w-12 h-12 flex justify-center rounded-full items-center bg-white">
            <RiImageAddFill className=" size-6 text-purple-600" />
          </div>
        </div>
        <div className=" w-36 h-36 rounded-full overflow-hidden -mt-24 sm:-mt-20 z-10 relative">
          <img
            src={defaultProfile}
            alt="profile pic"
            className=" w-full h-full object-cover"
          />
          <div className="absolute bottom-1/2 right-1/2 transform translate-x-1/2 translate-y-1/2  cursor-pointer hover:bg-slate-100 active:scale-90 transition-all border-e-slate-50 w-10 h-10 flex justify-center rounded-full items-center bg-white">
            <RxAvatar className=" size-6 text-purple-600" />
          </div>
        </div>
        <form className=" w-full flex flex-col gap-4 items-center px-8 pb-12">
          <div className="flex flex-col lg:flex-row md:flex-col sm:flex-row gap-1 sm:gap-2 justify-center w-full">
            <div className="w-full  mb-4 mt-6 flex flex-col items-start gap-1">
              <label className=" text-lg font-bold">First Name:</label>
              <input
                type="text"
                className="mt-2 p-4 w-full border-2 rounded-lg  focus:outline-purple-600"
                placeholder="First Name"
              />
            </div>
            <div className="w-full  mb-4 mt-6 flex flex-col items-start gap-1">
              <label className=" text-lg font-bold ">Last Name</label>
              <input
                type="text"
                className="mt-2 p-4 w-full border-2 rounded-lg  focus:outline-purple-600"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className=" w-full flex flex-col items-start gap-2">
            <label className=" text-lg font-bold">Bio</label>
            <textarea
              rows={10}
              className="resize-y  focus:outline-purple-600 border-2 rounded-md w-full min-h-20 max-h-40 p-3 text-lg  border-gray-200"
              placeholder="Add Your Bio"
            ></textarea>
          </div>
          <div className=" w-full flex gap-6 sm:gap-4 items-center mt-4 sm:flex-row flex-col">
            <CountryStateDropdown />
            <div className=" w-full flex flex-col items-start gap-1">
              <label className=" text-lg font-bold ">Link</label>
              <input
                type="text"
                className="p-2 focus:outline-purple-600 text-blue-500 w-full border-2 rounded-lg "
                placeholder="Add a link"
              />
            </div>
          </div>

          <button
            type="button"
            className=" bg-purple-900 text-white font-bold text-lg px-4 py-2 rounded-md mt-10 hover:bg-purple-800 active:scale-90 transition-all ease-in-out"
          >
            Save Changes
          </button>
        </form>
      </div>
      <div className="flex flex-col gap-5 bg-gray-50 rounded-md w-full h-fit items-center sm:items-start px-4 py-6">
        <h2 className=" text-red-600 text-2xl font-bold">Danger Zone</h2>
        <p className=" text-lg text-start">
          Once you deactivate your account, you will lose all your data and
          access to the platform.
        </p>
        <button className=" text-white bg-red-600 px-2 sm:px-4 py-1 sm:py-2 text-base sm:text-lg rounded-md font-bold hover:bg-red-500 transition-all ease-in-out active:scale-90">
          Deactivate Account
        </button>
      </div>
    </div>
  );
};

export default Settings;
