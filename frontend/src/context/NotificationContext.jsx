// NotificationContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children, currentUserId }) => {
  const [notifications, setNotifications] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (!currentUserId) return;

    // Setup socket connection
    const newSocket = io("http://localhost:7000", {
      transports: ["websocket"],
    });
    setSocket(newSocket);

    newSocket.emit("join", currentUserId);

    newSocket.on("notification", (data) => {
      console.log("New notification received", data);
      setNotifications((prev) => [data, ...prev]);
    });

    return () => newSocket.disconnect();
  }, [currentUserId]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await fetch(
          `http://localhost:7000/api/notification/${currentUserId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("vibez_token")}`,
            },
          }
        );
        const data = await res.json();
        console.log("notifications data", data);
        setNotifications(data.notifications || []);
      } catch (err) {
        console.error("Failed to fetch notifications:", err);
      }
    };

    if (currentUserId) fetchNotifications();
  }, [currentUserId]);

  return (
    <NotificationContext.Provider value={{ notifications, setNotifications }}>
      {children}
    </NotificationContext.Provider>
  );
};
