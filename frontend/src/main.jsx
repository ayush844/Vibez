import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";

import Sidebar from "./components/Sidebar.jsx";

import Feed from "./pages/Feed.jsx";
import Explore from "./pages/Explore.jsx";
import Bookmarks from "./pages/Bookmarks.jsx";
import Notification from "./pages/Notification.jsx";
import Friends from "./pages/Friends.jsx";
import Messages from "./pages/Messages.jsx";
import Settings from "./pages/Settings.jsx";
import Profile from "./pages/Profile.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/setting" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  </StrictMode>
);
