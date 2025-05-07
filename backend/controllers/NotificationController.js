import Notification from "../models/Notification.js";

export const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({
      receiver: req.params.userId,
    })
      .sort({ createdAt: -1 })
      .populate("sender", "username profilePhoto")
      .populate("post", "title");
    res.status(200).json(notifications);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch notifications" });
  }
};
