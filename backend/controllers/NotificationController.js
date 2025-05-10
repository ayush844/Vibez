import Notification from "../models/Notification.js";

export const getNotifications = async (req, res) => {
  const { userId } = req.params;

  try {
    if (req.userId !== userId) {
      //   console.log("hello bhai");

      return res
        .status(403)
        .json({ msg: "Unauthorized to view the notification" });
    }

    const notifications = await Notification.find({
      receiver: userId,
    })
      .sort({ createdAt: -1 })
      .populate("sender", "username profilePhoto")
      .populate("post", "title");
    res.status(200).json({ notifications: notifications });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch notifications" });
  }
};

export const readNotification = async (req, res) => {
  try {
    const { notificationId } = req.params;

    await Notification.findByIdAndUpdate(notificationId, { isRead: true });
    res.status(200).json({ msg: "Notification marked as read" });
  } catch (err) {
    console.log("ERROR in notification read fnction", err);
    res.status(500).json({ msg: "Failed to mark notification as read" });
  }
};
