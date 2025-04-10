import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  acceptFriendRequest,
  deleteUser,
  followUser,
  getAllFriends,
  getBookmarks,
  getFriendRecommendations,
  getFriendRequest,
  getLoggedInUserInfo,
  getUser,
  getUserPosts,
  rejectFriendRequest,
  sendFriendRequest,
  toggleBookmark,
  unfollowUser,
  updateUser,
} from "../controllers/UserController.js";

const router = express.Router();

// get logged in user info
router.get("/profile", authMiddleware, getLoggedInUserInfo);

// bookmark post
router.post("/bookmarkPost", authMiddleware, toggleBookmark);
// bookmark post
router.get("/myBookmarks", authMiddleware, getBookmarks);

// Follow a user
router.post("/follow/:id", authMiddleware, followUser);
// Unfollow a user
router.post("/unfollow/:id", authMiddleware, unfollowUser);

// get all posts of a user
router.get("/:id/posts", authMiddleware, getUserPosts);

// get friend request
router.get("/friend-request/", authMiddleware, getFriendRequest);

// Send friend request
router.post("/friend-request/:id", authMiddleware, sendFriendRequest);

// Accept friend request
router.post("/accept-request/:id", authMiddleware, acceptFriendRequest);

// Reject friend request
router.post("/reject-request/:id", authMiddleware, rejectFriendRequest);

// Get all friends
router.get("/friends", authMiddleware, getAllFriends);

// Get recommendation
router.get("/recommendations", authMiddleware, getFriendRecommendations);

// Get user details
router.get("/:id", authMiddleware, getUser);

// Update user profile
router.put("/:id", authMiddleware, updateUser);

// delete a user
router.delete("/:id", authMiddleware, deleteUser);

export default router;
