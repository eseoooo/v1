"use client";

import { createContext, useState } from "react";

export const NotificationContext = createContext({
  showNotification: false,
  setShowNotification: () => {},
  message: "",
  setMessage: () => {},
  status: "",
  setStatus: () => {},
});

export default function NotificationProvider({ children }) {
  const [showNotification, setShowNotification] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  return (
    <NotificationContext.Provider
      value={{
        showNotification,
        setShowNotification,
        message,
        setMessage,
        status,
        setStatus,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}
