import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import Settingsicon from "../assets/icons/icons8-settings.svg";
import CountryStateDropdown from "../components/CountryStateDropdown";
import defaultCover from "../assets/default_images/defaultCover.jpg";
import defaultProfile from "../assets/default_images/defaultProfile.png";
import { RiImageAddFill } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";
import { getUserInfo } from "../utils/getLoggedInUser";
import toast from "react-hot-toast";

const CLOUDINARY_URL = import.meta.env.VITE_CLOUDINARY_URL;
const CLOUDINARY_PRESET = import.meta.env.VITE_CLOUDINARY_PRESET; // Set in Cloudinary settings

const Settings = () => {
  const [userid, setUserid] = useState(null);

  const [user, setUser] = useState({
    firstname: "",
    lastname: null,
    bio: "",
    location: null,
    link: null,
    coverPic: defaultCover,
    profilePic: defaultProfile,
  });

  const [loading, setLoading] = useState({ cover: false, profile: false });

  const token = localStorage.getItem("vibez_token");

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userInfo = await getUserInfo();
        console.log("user info from settings", userInfo);

        setUserid(userInfo?._id);

        setUser({
          firstname: userInfo?.firstname || "",
          lastname: userInfo?.lastname,
          bio: userInfo?.bio || "",
          location: userInfo?.location,
          link: userInfo?.link,
          coverPic: userInfo?.coverPic || defaultCover,
          profilePic: userInfo?.profilePic || defaultProfile,
        });
      } catch (err) {
        console.log(err.message || "Failed to fetch user info.");
      }
    };

    fetchUserInfo();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleLocationChange = (location) => {
    setUser((prev) => ({ ...prev, location }));
  };

  const handleSaveChanges = async () => {
    try {
      const response = await fetch(`http://localhost:7000/api/user/${userid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("User information updated successfully!");
      } else {
        toast.error(`Failed to update: ${data.msg}`);
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred while updating user information.");
    }
  };

  const handleImageUpload = async (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading((prev) => ({ ...prev, [type]: true }));

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_PRESET);

    try {
      const res = await fetch(CLOUDINARY_URL, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.secure_url) {
        setUser((prev) => ({
          ...prev,
          [type]: data.secure_url, // Update image URL in state
        }));
        toast.success(`${type === "coverPic" ? "Cover" : "Profile"} updated!`);
      }
    } catch (err) {
      console.log(err);
      toast.error("Image upload failed!");
    } finally {
      setLoading((prev) => ({ ...prev, [type]: false }));
    }
  };

  return (
    <div className="flex flex-col gap-4 ">
      <PageHeader img={Settingsicon} />
      <div className="flex flex-col gap-6 bg-gray-50 rounded-md w-full h-fit items-center">
        <h1 className=" text-2xl sm:text-3xl text-purple-900 mt-4 font-light">
          Account Setting
        </h1>
        <div className=" w-full h-60 sm:h-80 overflow-hidden relative">
          {/* <img
            src={user.coverPic}
            alt="cover pic"
            className=" w-full h-full object-cover object-center"
          /> */}
          {loading.cover ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
              <span className="text-gray-500">Uploading...</span>
            </div>
          ) : (
            <img
              src={user.coverPic}
              alt="cover pic"
              className="w-full h-full object-cover object-center"
            />
          )}
          <div
            className=" absolute bottom-1 right-1 cursor-pointer hover:bg-slate-100 active:scale-90 transition-all border-e-slate-50 w-12 h-12 flex justify-center rounded-full items-center bg-white"
            onClick={() => document.getElementById("coverInput").click()}
          >
            <RiImageAddFill className=" size-6 text-purple-600" />
          </div>
          <input
            id="coverInput"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={(e) => handleImageUpload(e, "coverPic")}
          />
        </div>
        <div className=" w-36 h-36 rounded-full overflow-hidden -mt-24 sm:-mt-20 z-10 relative bg-black">
          {/* <img
            src={user.profilePic}
            alt="profile pic"
            className=" w-full h-full object-cover"
          /> */}
          {loading.profile ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-full">
              <span className="text-gray-500">Uploading...</span>
            </div>
          ) : (
            <img
              src={user.profilePic}
              alt="profile pic"
              className="w-full h-full object-cover"
            />
          )}
          <div
            className="absolute bottom-1/2 right-1/2 transform translate-x-1/2 translate-y-1/2  cursor-pointer hover:bg-slate-100 active:scale-90 transition-all border-e-slate-50 w-10 h-10 flex justify-center rounded-full items-center bg-white"
            onClick={() => document.getElementById("profileInput").click()}
          >
            <RxAvatar className=" size-6 text-purple-600" />
          </div>
          <input
            id="profileInput"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={(e) => handleImageUpload(e, "profilePic")}
          />
        </div>
        <form
          className=" w-full flex flex-col gap-4 items-center px-8 pb-12"
          onSubmit={(e) => {
            e.preventDefault();
            handleSaveChanges();
          }}
        >
          <div className="flex flex-col lg:flex-row md:flex-col sm:flex-row gap-1 sm:gap-2 justify-center w-full">
            <div className="w-full  mb-4 mt-6 flex flex-col items-start gap-1">
              <label className=" text-lg font-bold">First Name:</label>
              <input
                type="text"
                name="firstname"
                value={user.firstname}
                onChange={handleChange}
                className="mt-2 p-4 w-full border-2 rounded-lg  focus:outline-purple-600"
                placeholder="First Name"
              />
            </div>
            <div className="w-full  mb-4 mt-6 flex flex-col items-start gap-1">
              <label className=" text-lg font-bold ">Last Name</label>
              <input
                type="text"
                name="lastname"
                value={user.lastname}
                onChange={handleChange}
                className="mt-2 p-4 w-full border-2 rounded-lg  focus:outline-purple-600"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className=" w-full flex flex-col items-start gap-2">
            <label className=" text-lg font-bold">Bio</label>
            <textarea
              rows={10}
              name="bio"
              value={user.bio}
              onChange={handleChange}
              className="resize-y  focus:outline-purple-600 border-2 rounded-md w-full min-h-20 max-h-40 p-3 text-lg  border-gray-200"
              placeholder="Add Your Bio"
            ></textarea>
          </div>
          <div className=" w-full flex gap-6 sm:gap-4 items-center mt-4 sm:flex-row flex-col">
            <CountryStateDropdown
              value={user.location}
              onChange={handleLocationChange}
            />
            <div className=" w-full flex flex-col items-start gap-1">
              <label className=" text-lg font-bold ">Link</label>
              <input
                type="text"
                name="link"
                value={user.link}
                onChange={handleChange}
                className="p-2 focus:outline-purple-600 text-blue-500 w-full border-2 rounded-lg "
                placeholder="Add a link"
              />
            </div>
          </div>

          <button
            type="submit"
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
