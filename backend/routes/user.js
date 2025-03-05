import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  deleteUser,
  followUser,
  getBookmarks,
  getLoggedInUserInfo,
  getUser,
  getUserPosts,
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

// Get user details
router.get("/:id", authMiddleware, getUser);

// Update user profile
router.put("/:id", authMiddleware, updateUser);

// delete a user
router.delete("/:id", authMiddleware, deleteUser);

export default router;
