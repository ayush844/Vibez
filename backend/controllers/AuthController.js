import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supers3cr3t"; // Use environment variable in production

// Sign Up
export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already registered" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();

    // Generate a token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "12h" });

    res.status(201).json({
      token,
      user: { id: user._id, username: user.username, email: user.email },
    });

  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ msg: "Server error. Please try again later." });
  }
};


// Login
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    // Generate token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "12h" });

    res.status(200).json({
      token,
      user: { id: user._id, username: user.username, email: user.email },
    });

  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ msg: "Server error. Please try again later." });
  }
};
