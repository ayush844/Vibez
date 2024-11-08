import Post from "../models/Post.js";
import User from "../models/User.js";

// Create a new post
export const createPost = async (req, res) => {
    try {
        const { content, image } = req.body;
        const userId = req.userId;

        const newPost = new Post({
            content,
            image,
            userId
        });

        const savedPost = await newPost.save();
        
        // Add post reference to user
        await User.findByIdAndUpdate(userId, { $push: { posts: savedPost._id } });

        res.status(201).json(savedPost);
    } catch (error) {
        console.error("Error creating post:", error);
        res.status(500).json({ msg: "Server error" });
    }
};

// Get a post by ID
export const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
                               .populate("userId", "username profilePic")
                               .populate("likes", "username profilePic")
                               .populate("comments");
        if (!post) return res.status(404).json({ msg: "Post not found" });

        res.json(post);
    } catch (error) {
        console.error("Error getting post:", error);
        res.status(500).json({ msg: "Server error" });
    }
};

// Update a post
export const updatePost = async (req, res) => {
    try {
        const { content } = req.body;
        const post = await Post.findById(req.params.id);

        if (post.userId.toString() !== req.userId) {
            return res.status(403).json({ msg: "You can only update your own posts" });
        }

        post.content = content || post.content;

        const updatedPost = await post.save();
        res.json(updatedPost);
    } catch (error) {
        console.error("Error updating post:", error);
        res.status(500).json({ msg: "Server error" });
    }
};

// Delete a post
export const deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (post.userId.toString() !== req.userId) {
            return res.status(403).json({ msg: "You can only delete your own posts" });
        }

        await post.remove();
        await User.findByIdAndUpdate(req.userId, { $pull: { posts: req.params.id } });

        res.json({ msg: "Post deleted" });
    } catch (error) {
        console.error("Error deleting post:", error);
        res.status(500).json({ msg: "Server error" });
    }
};

// Like a post
export const likePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ msg: "Post not found" });

        if (post.likes.includes(req.userId)) {
            post.likes = post.likes.filter(id => id.toString() !== req.userId);
        } else {
            post.likes.push(req.userId);
        }

        await post.save();
        res.json({ msg: post.likes.includes(req.userId) ? "Liked" : "Unliked", post });
    } catch (error) {
        console.error("Error liking post:", error);
        res.status(500).json({ msg: "Server error" });
    }
};

// Comment on a post
export const commentOnPost = async (req, res) => {
    try {
        const { content } = req.body;
        const postId = req.params.id;

        const newComment = {
            content,
            userId: req.userId,
            createdAt: new Date()
        };

        const post = await Post.findByIdAndUpdate(postId, { $push: { comments: newComment } }, { new: true });
        
        res.json(post);
    } catch (error) {
        console.error("Error commenting on post:", error);
        res.status(500).json({ msg: "Server error" });
    }
};
