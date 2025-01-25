import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supers3cr3t";

if (process.env.NODE_ENV === "production" && !process.env.JWT_SECRET) {
  console.error("JWT_SECRET is not defined in the production environment.");
  process.exit(1);
}

// Sign Up
export const registerUser = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  if (!username || !email || !password || !confirmPassword) {
    return res
      .status(400)
      .json({ success: false, msg: "All fields are required." });
  }

  const trimmedUsername = username.trim();
  const normalizedEmail = email.trim().toLowerCase();
  const trimmedPassword = password.trim();
  const trimmedConfirmPassword = confirmPassword.trim();

  try {
    // Validate input
    if (
      !trimmedUsername ||
      !normalizedEmail ||
      !trimmedPassword ||
      !trimmedConfirmPassword
    ) {
      return res
        .status(400)
        .json({ success: false, msg: "All fields are required." });
    }

    if (trimmedPassword !== trimmedConfirmPassword) {
      return res
        .status(400)
        .json({ success: false, msg: "Passwords do not match." });
    }

    // Validate username and password length
    if (trimmedUsername.length > 20) {
      return res.status(400).json({
        success: false,
        msg: "Username must be 20 characters or less.",
      });
    }

    if (trimmedPassword.length > 30) {
      return res.status(400).json({
        success: false,
        msg: "Password must be 30 characters or less.",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, msg: "User already registered." });
    }

    // Check if username already exists
    const existingUsername = await User.findOne({ username: trimmedUsername });
    if (existingUsername) {
      return res
        .status(400)
        .json({ success: false, msg: "Username is already taken." });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(trimmedPassword, salt);

    // Create a new user
    const user = new User({
      username: trimmedUsername,
      email: normalizedEmail,
      password: hashedPassword,
    });

    await user.save();

    // Generate a token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET,
      {
        expiresIn: "12h",
      }
    );

    res.status(201).json({
      success: true,
      data: {
        token,
        user: { id: user._id, username: user.username, email: user.email },
      },
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res
      .status(500)
      .json({ success: false, msg: "Server error. Please try again later." });
  }
};

// Login
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, msg: "All fields are required." });
  }

  const normalizedEmail = email.trim().toLowerCase();
  const trimmedPassword = password.trim();

  try {
    // Validate input
    if (!normalizedEmail || !trimmedPassword) {
      return res
        .status(400)
        .json({ success: false, msg: "Email and password are required." });
    }

    // Check if user exists
    const user = await User.findOne({ email: normalizedEmail });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, msg: "Invalid email or password." });
    }

    // Validate password
    const isMatch = await bcrypt.compare(trimmedPassword, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, msg: "Invalid email or password." });
    }

    // Generate token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET,
      {
        expiresIn: "12h",
      }
    );

    res.status(200).json({
      success: true,
      data: {
        token,
        user: { id: user._id, username: user.username, email: user.email },
      },
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res
      .status(500)
      .json({ success: false, msg: "Server error. Please try again later." });
  }
};
