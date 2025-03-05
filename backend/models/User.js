import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: "String",
      required: true,
    },
    lastname: {
      type: "String",
    },
    username: {
      type: "String",
      required: true,
      unique: true,
    },
    bio: {
      type: "String",
      default: "",
    },
    email: {
      type: "String",
      required: true,
      unique: true,
    },
    password: {
      type: "String",
      required: true,
    },
    profilePic: {
      type: String,
      default: "https://robohash.org/robot2we",
    },
    coverPic: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1583118443607-33f3731d09e3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    followers: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
    following: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
    posts: [{ type: mongoose.Schema.ObjectId, ref: "Post" }],
    bookmarks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    link: {
      type: String,
    },
    location: {
      type: {
        value: { type: String },
        label: { type: String },
      },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
