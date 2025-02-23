import express from "express";
import {
  createPost,
  getPost,
  updatePost,
  deletePost,
  likePost,
  commentOnPost,
  getAllPosts,
} from "../controllers/PostController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Create a post
router.post("/", authMiddleware, createPost);

// get all posts
router.get("/allPosts", authMiddleware, getAllPosts);

// Get a post by ID
router.get("/:id", authMiddleware, getPost);

// Update a post
router.put("/:id", authMiddleware, updatePost);

// Delete a post
router.delete("/:id", authMiddleware, deletePost);

// Like a post
router.post("/:id/like", authMiddleware, likePost);

// Comment on a post
router.post("/:id/comment", authMiddleware, commentOnPost);

export default router;
