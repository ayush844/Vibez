import express from "express";
// import Notification from "../models/Notification.js";
import { getNotifications } from "../controllers/NotificationController.js";

const router = express.Router();

router.get("/:userId", getNotifications);

export default router;
