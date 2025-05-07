// src/components/NotificationListener.jsx
import { useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:7000", {
  withCredentials: true,
  transports: ["websocket"],
});

function NotificationListener({ userId }) {
  useEffect(() => {
    if (!userId) return;

    socket.emit("join", userId);

    console.log("NOTIFICATION EMITTED");

    socket.on("notification", (data) => {
      console.log("New notification:", data);
      alert(data.message);
    });

    return () => {
      socket.off("notification");
    };
  }, [userId]);

  return null;
}

export default NotificationListener;
