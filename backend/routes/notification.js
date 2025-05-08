import express from "express";
// import Notification from "../models/Notification.js";
import { getNotifications } from "../controllers/NotificationController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/:userId", authMiddleware, getNotifications);

export default router;
