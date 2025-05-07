import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom";

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
import CommentsModal from "./components/modals/CommentsModal.jsx";
import Person from "./pages/Person.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import { io } from "socket.io-client";
import NotificationListener from "./components/NotificationLister.jsx";

const App = () => {
  const location = useLocation();

  const socket = io("http://localhost:7000", {
    transports: ["websocket"],
    withCredentials: true,
  });

  socket.on("connect", () => {
    console.log("Connected to server, socket ID:", socket.id);
  });

  socket.on("connect_error", (err) => {
    console.error("Connection error:", err.message);
  });

  const userId = localStorage.getItem("vibez_userid");

  // Define paths where the Sidebar should NOT be displayed
  const noSidebarPaths = ["/login", "/signup"];

  const shouldShowSidebar = !noSidebarPaths.includes(location.pathname);

  const navigate = useNavigate();

  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);
  // const [notifications, setNotifications] = useState([]);

  const ProtectedRoute = ({ children }) => {
    const user = localStorage.getItem("vibez_token");
    if (user) {
      return children;
    } else {
      return <Navigate to="/login" />;
    }
  };

  const PublicRoute = ({ children }) => {
    const user = localStorage.getItem("vibez_token");
    if (user) {
      return <Navigate to="/" />;
    } else {
      return children;
    }
  };

  const handleLogout = async () => {
    console.log("hello from logout");
    try {
      const response = await fetch("http://localhost:7000/api/auth/logout");

      const data = await response.json();

      if (data.success) {
        localStorage.removeItem("vibez_token");
        localStorage.removeItem("vibez_userid");
        toast.success("Logout successful!");
        console.log("Response:", data.data);
        navigate("/login");
      } else {
        toast.error(data.msg || "Logout failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during logout:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased text-gray-800">
      <Toaster position="top-center" reverseOrder={false} />

      {userId && <NotificationListener userId={userId} />}

      {isLogOutModalOpen && (
        <GlobalModal
          heading={"Log Out"}
          message={"are you sure you want to Log out?"}
          buttonTxt={"Log Out"}
          onClose={() => setIsLogOutModalOpen(false)}
          onClick={handleLogout}
        />
      )}

      {shouldShowSidebar && (
        <Sidebar setIsLogOutModalOpen={setIsLogOutModalOpen} />
      )}
      <div className={shouldShowSidebar ? "flex-1 p-4" : "w-full h-full"}>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Feed />
              </ProtectedRoute>
            }
          />
          <Route
            path="/explore"
            element={
              <ProtectedRoute>
                <Explore />
              </ProtectedRoute>
            }
          />
          <Route
            path="/bookmarks"
            element={
              <ProtectedRoute>
                <Bookmarks />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notifications"
            element={
              <ProtectedRoute>
                <Notification />
              </ProtectedRoute>
            }
          />
          <Route
            path="/friends"
            element={
              <ProtectedRoute>
                <Friends />
              </ProtectedRoute>
            }
          />
          <Route
            path="/friends/friend_requests"
            element={
              <ProtectedRoute>
                <FriendRequests />
              </ProtectedRoute>
            }
          />
          <Route
            path="/friends/my_friends"
            element={
              <ProtectedRoute>
                <MyFriends />
              </ProtectedRoute>
            }
          />
          <Route
            path="/messages"
            element={
              <ProtectedRoute>
                <Messages />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/setting"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />
          <Route
            path="/post/:id"
            element={
              <ProtectedRoute>
                <Post />
              </ProtectedRoute>
            }
          />

          <Route
            path="/person/:id"
            element={
              <ProtectedRoute>
                <Person />
              </ProtectedRoute>
            }
          />

          {/* Routes without Sidebar */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <Signup />
              </PublicRoute>
            }
          />
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
