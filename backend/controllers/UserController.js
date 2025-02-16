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
