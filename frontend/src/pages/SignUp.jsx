import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className=" w-full h-screen flex items-center justify-center">
      <div className="grid md:grid-cols-3 items-center  rounded-xl overflow-hidden bg-white -translate-y-16 shadow-md shadow-indigo-600">
        <div className="max-md:order-1 hidden md:flex flex-col justify-center md:space-y-16 space-y-8 max-md:mt-16 min-h-full bg-gradient-to-r from-pink-600  to-indigo-500 lg:px-8 px-4 py-10">
          <h1 className=" text-5xl font-bold  text-white">Vibez</h1>
          <div>
            <h4 className="text-white text-lg font-bold">
              Create Your Account
            </h4>
            <p className="text-base font-medium text-gray-300 mt-3 leading-relaxed">
              Welcome to our registration page! Get started by creating your
              account.
            </p>
          </div>
          <div>
            <h4 className="text-white text-lg font-bold">
              Simple &amp; Secure Registration
            </h4>
            <p className="text-base font-medium text-gray-300 mt-3 leading-relaxed">
              Our registration process is designed to be straightforward and
              secure. We prioritize your privacy and data security.
            </p>
          </div>
        </div>
        <form className="md:col-span-2 w-full py-6 px-6 sm:px-16 max-md:max-w-xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:hidden bg-gradient-to-r from-pink-600  to-indigo-500 inline-block text-transparent bg-clip-text mb-3 sm:mb-2">
            Vibes
          </h1>
          <div className="mb-6">
            <h3 className="text-gray-800 text-xl font-semibold">
              Create an account
            </h3>
          </div>
          <div className="space-y-6">
            <div className=" flex flex-col items-start w-full">
              <label className="text-gray-600 text-base font-medium mb-2 block">
                Name
              </label>
              <div className="relative flex items-center w-full">
                <input
                  name="name"
                  type="text"
                  required=""
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-blue-500"
                  placeholder="Enter name"
                />
              </div>
            </div>
            <div className=" flex flex-col items-start w-full">
              <label className="text-gray-600 text-base font-medium mb-2 block">
                Email Id
              </label>
              <div className="relative flex items-center w-full">
                <input
                  name="email"
                  type="email"
                  required=""
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-blue-500"
                  placeholder="Enter email"
                />
              </div>
            </div>
            <div className=" flex flex-col items-start w-full">
              <label className="text-gray-600 text-base font-medium mb-2 block">
                Password
              </label>
              <div className="relative flex items-center w-full">
                <input
                  name="password"
                  type="password"
                  required=""
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-blue-500"
                  placeholder="Enter password"
                />
              </div>
            </div>
            <div className=" flex flex-col items-start w-full">
              <label className="text-gray-600 text-base font-medium mb-2 block">
                Confirm Password
              </label>
              <div className="relative flex items-center w-full">
                <input
                  name="confirm_password"
                  type="password"
                  required=""
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-blue-500"
                  placeholder="Confirm password"
                />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <button
              type="button"
              className="w-full py-2.5 px-4 tracking-wider text-base font-bold rounded-md text-white  bg-gradient-to-r from-pink-600  to-indigo-500  focus:outline-none active:scale-90 transition-all ease-in-out"
            >
              Create an account
            </button>
          </div>
          <p className="text-gray-600 text-sm mt-6 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:underline ml-1"
            >
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
