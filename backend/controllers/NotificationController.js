import Notification from "../models/Notification.js";

export const getNotifications = async (req, res) => {
  const { userId } = req.params;

  console.log(
    "user id from params ",
    userId,
    " and user id from req ",
    req.userId
  );

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
