import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    console.log("hello 1");

    try {
      const response = await fetch("http://localhost:7000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      console.log("hello 2");
      const data = await response.json();

      if (data.success) {
        console.log("hello 3");
        localStorage.setItem("vibez_token", data?.data?.token);
        toast.success("Login successful!");
        console.log("Response:", data.data);
        setFormData({ email: "", password: "" });
      } else {
        console.log("Hello 4");
        toast.error(data.msg || "Login failed. Please try again.");
      }
    } catch (error) {
      console.log("Hello 5");
      console.error("Error during login:", error);
      toast.error("Something went wrong. Please try again later.");
      setFormData({ email: "", password: "" });
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="grid md:grid-cols-3 items-center rounded-xl overflow-hidden bg-white -translate-y-16 shadow-md shadow-indigo-600">
        <div className="max-md:order-1 hidden md:flex flex-col justify-center md:space-y-16 space-y-8 max-md:mt-16 min-h-full bg-gradient-to-r from-pink-600 to-indigo-500 lg:px-8 px-4 py-24">
          <h1 className="text-5xl font-bold text-white">Vibez</h1>
          <div>
            <h4 className="text-white text-lg font-bold">Welcome Back</h4>
            <p className="text-base font-medium text-gray-300 mt-3 leading-relaxed">
              Login to access your account and continue where you left off.
            </p>
          </div>
          <div>
            <h4 className="text-white text-lg font-bold">Secure Login</h4>
            <p className="text-base font-medium text-gray-300 mt-3 leading-relaxed">
              Your data and privacy are our top priorities. Login securely.
            </p>
          </div>
        </div>
        <form className="md:col-span-2 w-full py-6 px-6 sm:px-16 max-md:max-w-xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:hidden bg-gradient-to-r from-pink-600 to-indigo-500 inline-block text-transparent bg-clip-text mb-3 sm:mb-2">
            Vibez
          </h1>
          <div className="mb-6">
            <h3 className="text-gray-800 text-xl font-semibold">Login</h3>
          </div>
          <div className="space-y-6">
            <div className="flex flex-col items-start w-full">
              <label className="text-gray-600 text-base font-medium mb-2 block">
                Email Id
              </label>
              <div className="relative flex items-center w-full">
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-blue-500"
                  placeholder="Enter email"
                />
              </div>
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-gray-600 text-base font-medium mb-2 block">
                Password
              </label>
              <div className="relative flex items-center w-full">
                <input
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-blue-500"
                  placeholder="Enter password"
                />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="w-full py-2.5 px-4 tracking-wider text-base font-bold rounded-md text-white bg-gradient-to-r from-pink-600 to-indigo-500 focus:outline-none active:scale-90 transition-all ease-in-out"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
          <p className="text-gray-600 text-sm mt-6 text-center">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 font-semibold hover:underline ml-1"
            >
              Sign up here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
