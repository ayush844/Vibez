import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import postRoute from "./routes/post.js";
import notificationRoute from "./routes/notification.js";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import Notification from "./models/Notification.js";
import User from "./models/User.js";

const app = express();

dotenv.config();

app.use(express.json());

app.use(cors({ origin: process.env.FRONTEND_PORT, credentials: true }));

connectDB();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Allow requests from this origin and my frontend port = 5173
    methods: ["GET", "POST"], // Allow these HTTP methods
  },
});

app.get("/", (req, res) => {
  res.send("HELLO JI");
});

io.on("connection", (socket) => {
  console.log("a user connected: ", socket.id);

  socket.on("join", (userId) => {
    socket.join(userId);
    console.log(`User ${userId} joined their room`);
  });

  // When someone likes a post, send a notification to the post owner's room
  socket.on("like_post", async ({ postOwnerId, fromUser }) => {
    console.log(
      "LIKE_POST emitted from frontend catching it in backend",
      postOwnerId,
      " ",
      fromUser
    );
    // io.to(postOwnerId).emit("notification", {
    //   type: "like",
    //   message: `${fromUser} liked your post`,
    // });
    // // Save to DB
    // try {
    //   await Notification.create({
    //     type: "like",
    //     sender: fromUser,
    //     receiver: postOwnerId,
    //     message,
    //   });
    //   console.log("Notification saved to DB");
    // } catch (err) {
    //   console.error("Failed to save notification:", err);
    // }

    /////////////////////////////////////////////////////////////////////

    try {
      const senderUser = await User.findById(fromUser);
      const senderUsername = senderUser?.username || "Someone";

      const message = `${senderUsername} liked your post`;

      // Save to DB
      const newNotification = await Notification.create({
        type: "like",
        sender: fromUser,
        receiver: postOwnerId,
        message,
      });

      io.to(postOwnerId).emit("notification", newNotification);

      console.log("Notification saved to DB");
    } catch (err) {
      console.error("Failed to handle like_post:", err);
    }
  });

  // When someone comments on a post, send a notification to the post owner
  socket.on("comment_post", ({ postOwnerId, fromUser, comment }) => {
    io.to(postOwnerId).emit("notification", {
      type: "comment",
      message: `${fromUser} commented: "${comment}"`,
    });
  });
});

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);
app.use("/api/notification", notificationRoute);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
