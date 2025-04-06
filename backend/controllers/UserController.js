import Post from "../models/Post.js";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supers3cr3t";

export const getLoggedInUserInfo = async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "Unauthorized." });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    console.log("hello from logged in user");

    // Fetch user details from the database
    const user = await User.findById(decoded.userId)
      .select("-password")
      .populate("followers", "username profilePic")
      .populate("following", "username profilePic");

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Error getting logged in user:", error);
    res.status(500).json({ msg: "Server error. Please try again later." });
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id)
      .select("-password")
      .populate("followers", "username profilePic")
      .populate("following", "username profilePic"); // Populate follower and following with basic info
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ msg: "Server error." });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;

  console.log("I am here");

  const { firstname, lastname, bio, profilePic, coverPic, location, link } =
    req.body;

  try {
    if (req.userId !== id) {
      console.log("hello bhai");

      return res
        .status(403)
        .json({ msg: "Unauthorized to update this profile" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { firstname, lastname, bio, profilePic, coverPic, location, link },
      { new: true }
    ).select("-password");

    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ msg: "Server error" });
  }
};

export const getUserPosts = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id)
      .populate({
        path: "posts",
        options: { sort: { createdAt: -1 } }, // Sorting in descending order (newest first)
      })
      .select("firstname lastname _id profilePic");
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.json({
      name: user.name,
      profilePic: user.profilePic,
      posts: user.posts,
    });
  } catch (error) {
    console.error("Error fetching user posts:", error);
    res.status(500).json({ msg: "Server error" });
  }
};

export const followUser = async (req, res) => {
  const { id } = req.params; // ID of the user to follow

  try {
    if (req.userId === id) {
      return res.status(400).json({ msg: "You cannot follow yourself" });
    }

    const user = await User.findById(req.userId);
    const userToFollow = await User.findById(id);

    if (!user || !userToFollow) {
      return res.status(404).json({ msg: "User not found" });
    }

    if (user.following.includes(id)) {
      return res.status(400).json({ msg: "Already following this user" });
    }

    user.following.push(id);
    userToFollow.followers.push(req.userId);

    await user.save();
    await userToFollow.save();

    res.json({ msg: `You are now following ${userToFollow.username}` });
  } catch (error) {
    console.error("Error following user:", error);
    res.status(500).json({ msg: "Server error" });
  }
};

export const unfollowUser = async (req, res) => {
  const { id } = req.params; // ID of the user to unfollow

  try {
    const user = await User.findById(req.userId);
    const userToUnfollow = await User.findById(id);

    if (!user || !userToUnfollow) {
      return res.status(404).json({ msg: "User not found" });
    }

    if (!user.following.includes(id)) {
      return res.status(400).json({ msg: "You are not following this user" });
    }

    user.following = user.following.filter(
      (userId) => userId.toString() !== id
    );
    userToUnfollow.followers = userToUnfollow.followers.filter(
      (followerId) => followerId.toString() !== req.userId
    );

    await user.save();
    await userToUnfollow.save();

    res.json({ msg: `You have unfollowed ${userToUnfollow.username}` });
  } catch (error) {
    console.error("Error unfollowing user:", error);
    res.status(500).json({ msg: "Server error" });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    if (req.userId !== id) {
      return res.status(403).json({ msg: "Unauthorized action" });
    }

    // Remove user and update followers/following lists
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    // Remove this user from followers and following arrays of other users
    await User.updateMany({ followers: id }, { $pull: { followers: id } });
    await User.updateMany({ following: id }, { $pull: { following: id } });

    res.json({ msg: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ msg: "Server error" });
  }
};

// toggle bookmarks

export const toggleBookmark = async (req, res) => {
  try {
    const { postId } = req.body; // Get user ID and post ID from request
    const userId = req.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    const postExists = await Post.findById(postId);

    if (!postExists) {
      return res.status(404).json({ msg: "Post not found" });
    }

    let isBookmarked = false;

    // Check if post is already bookmarked
    if (user.bookmarks.includes(postId)) {
      user.bookmarks = user.bookmarks.filter((id) => id.toString() !== postId);
      isBookmarked = false;
    } else {
      user.bookmarks.push(postId);
      isBookmarked = true;
    }

    await user.save();
    return res.json({
      msg: isBookmarked ? "Bookmark added" : "Bookmark removed",
      isBookmarked,
      bookmarks: user.bookmarks,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// get all bookmarks
export const getBookmarks = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findById(userId).populate({
      path: "bookmarks",
      populate: {
        path: "userId",
        select: "firstname lastname profilePic _id username",
      },
      options: { sort: { createdAt: -1 } }, // Sorting in descending order (newest first)
    });

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    // Attach isBookmarked = true to each post
    const bookmarksWithStatus = user.bookmarks.map((post) => ({
      ...post.toObject(), // Convert Mongoose document to plain object
      isBookmarked: true,
    }));

    res.json({ bookmarks: bookmarksWithStatus });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// get friend request
export const getFriendRequest = async (req, res) => {
  try {
    const userId = req.userId;

    const user = await User.findById(userId)
      .populate({
        path: "friendRequests",
        select: "firstname lastname username profilePic _id",
        options: { sort: { createdAt: -1 } },
      })
      .select("friendRequests");

    if (!user) return res.status(404).json({ msg: "User not found" });

    res.status(200).json({
      msg: "Friend request fetched successfully",
      friendRequests: user.friendRequests,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// send friend request
export const sendFriendRequest = async (req, res) => {
  try {
    const senderId = req.userId;
    const receiverId = req.params.id;

    if (senderId === receiverId) {
      return res
        .status(400)
        .json({ msg: "You cannot send a request to yourself." });
    }

    const receiver = await User.findById(receiverId);
    if (!receiver) return res.status(404).json({ msg: "User not found" });

    // Check if already sent
    if (receiver.friendRequests.includes(senderId)) {
      return res.status(400).json({ msg: "Friend request already sent" });
    }

    receiver.friendRequests.push(senderId);
    await receiver.save();

    res.status(200).json({ msg: "Friend request sent successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Accept Friend Request
export const acceptFriendRequest = async (req, res) => {
  try {
    const userId = req.userId;
    const senderId = req.params.id;

    const user = await User.findById(userId);
    const sender = await User.findById(senderId);

    if (!user || !sender)
      return res.status(404).json({ msg: "User not found" });

    // Check if request exists
    if (!user.friendRequests.includes(senderId)) {
      return res.status(400).json({ msg: "No friend request found" });
    }

    // Remove request & add to friends
    user.friendRequests = user.friendRequests.filter(
      (id) => id.toString() !== senderId
    );
    user.friends.push(senderId);
    sender.friends.push(userId);

    await user.save();
    await sender.save();

    res.status(200).json({ msg: "Friend request accepted" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Reject Friend Request
export const rejectFriendRequest = async (req, res) => {
  try {
    const userId = req.userId;
    const senderId = req.params.id;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ msg: "User not found" });

    user.friendRequests = user.friendRequests.filter(
      (id) => id.toString() !== senderId
    );
    await user.save();

    res.status(200).json({ msg: "Friend request rejected" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
