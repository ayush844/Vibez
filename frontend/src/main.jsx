import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Sidebar from "./components/Sidebar.jsx";

import Feed from "./pages/Feed.jsx";
import Explore from "./pages/Explore.jsx";
import Bookmarks from "./pages/Bookmarks.jsx";
import Notification from "./pages/Notification.jsx";
import Friends from "./pages/Friends.jsx";
import Messages from "./pages/Messages.jsx";
import Settings from "./pages/Settings.jsx";
import Profile from "./pages/Profile.jsx";
import FriendRequests from "./pages/subpages/FriendRequests.jsx";
import MyFriends from "./pages/subpages/MyFriends.jsx";

import Login from "./pages/LogIn.jsx";
import Signup from "./pages/SignUp.jsx";
import GlobalModal from "./components/modals/GlobalModal.jsx";
import Post from "./pages/Post.jsx";

import toast, { Toaster } from "react-hot-toast";

const App = () => {
  const location = useLocation();

  // Define paths where the Sidebar should NOT be displayed
  const noSidebarPaths = ["/login", "/signup"];

  const shouldShowSidebar = !noSidebarPaths.includes(location.pathname);

  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased text-gray-800">
      <Toaster position="top-center" reverseOrder={false} />

      {isLogOutModalOpen && (
        <GlobalModal
          heading={"Log Out"}
          message={"are you sure you want to Log out?"}
          buttonTxt={"Log Out"}
          onClose={() => setIsLogOutModalOpen(false)}
        />
      )}

      {shouldShowSidebar && (
        <Sidebar setIsLogOutModalOpen={setIsLogOutModalOpen} />
      )}
      <div className={shouldShowSidebar ? "flex-1 p-4" : "w-full h-full"}>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/friends/friend_requests" element={<FriendRequests />} />
          <Route path="/friends/my_friends" element={<MyFriends />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/setting" element={<Settings />} />
          <Route path="/post/:id" element={<Post />} />

          {/* Routes without Sidebar */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
