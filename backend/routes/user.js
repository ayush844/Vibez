import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  deleteUser,
  followUser,
  getLoggedInUserInfo,
  getUser,
  getUserPosts,
  unfollowUser,
  updateUser,
} from "../controllers/UserController.js";

const router = express.Router();

// get logged in user info
router.get("/profile", authMiddleware, getLoggedInUserInfo);

// Get user details
router.get("/:id", authMiddleware, getUser);

// Update user profile
router.put("/:id", authMiddleware, updateUser);

// get all posts of a user
router.get("/:id/posts", authMiddleware, getUserPosts);

// Follow a user
router.post("/follow/:id", authMiddleware, followUser);

// Unfollow a user
router.post("/unfollow/:id", authMiddleware, unfollowUser);

// delete a user
router.delete("/:id", authMiddleware, deleteUser);

export default router;
