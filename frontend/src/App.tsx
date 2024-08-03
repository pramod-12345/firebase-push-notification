import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { getToken, onMessage } from "@firebase/messaging";
import "./App.css";
import { messaging } from "./shared/utils/firebaseConfig";
import { sendNotification } from "./shared/utils/services";
import LayoutComponent from "./shared/layout";

function App() {
  interface NotificationProps {
    title?: string;
    body?: string;
    image?: string;
    icon?: string;
  }
  const [notification, setNotification] = useState<NotificationProps[]>([]);
  const [notificationCount, setNotificationCount] = useState(0);
  const [fmcToken, setFmcToken] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const setupNotifications = async () => {
    try {
      // Request permission for notifications
      const permission = await Notification.requestPermission();

      if (permission === "granted") {
        console.log("Notification permission granted.");
        // Get the FCM token
        const token = await getToken(messaging);
        setFmcToken(token);
      } else {
        console.log("Notification permission denied.");
      }
    } catch (error) {
      console.error("Error setting up notifications:", error);
    }
  };

  const handleClick: any = async (message: { title: string; body: string }) => {
    if (fmcToken) {
      sendNotification(fmcToken, message);
    } else {
      console.error("FCM token is not available.");
    }
  };

  // Handle foreground notifications
  onMessage(messaging, (payload) => {
    // Handle the notification or update your UI
    const data = [...notification, { ...payload.notification }];
    setNotification([...data]);
    setNotificationCount((prev) => prev + 1);
  });

  useEffect(() => {
    setupNotifications();
  }, []);

  return (
    <Router>
      <LayoutComponent
        handleClick={handleClick}
        notification={notification}
        setOpen={setOpen}
        open={open}
        setNotificationCount={setNotificationCount}
        notificationCount={notificationCount}
      />
    </Router>
  );
}

export default App;
