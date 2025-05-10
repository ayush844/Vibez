import express from "express";
// import Notification from "../models/Notification.js";
import {
  getNotifications,
  readNotification,
} from "../controllers/NotificationController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.patch("/:notificationId/read", authMiddleware, readNotification);

router.get("/:userId", authMiddleware, getNotifications);

export default router;
