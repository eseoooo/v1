"use client";

import CheckCircleIcon from "@/public/icons/check-circle-icon.svg";
import XCircleIcon from "@/public/icons/x-circle-icon.svg";
import { useContext, useEffect } from "react";
import { NotificationContext } from "@/lib/context/notification-context";
export default function Notification() {
  const TIME_TO_SHOW_NOTIFICATION_IN_SECONDS = 4;
  const {
    showNotification,
    setShowNotification,
    message,
    setMessage,
    status,
    setStatus,
  } = useContext(NotificationContext);

  // set show notification to false clear timer
  useEffect(() => {
    let resetNotification;
    if (showNotification) {
      resetNotification = setTimeout(() => {
        setShowNotification(false);
        setStatus("");
        setMessage("");
      }, TIME_TO_SHOW_NOTIFICATION_IN_SECONDS * 1000);
    }

    return () => {
      if (resetNotification) {
        clearTimeout(resetNotification);
      }
    };
  }, [showNotification, setShowNotification, setStatus, setMessage]);

  return (
    <div
      className={`flex justify-center fixed z-20 w-full motion-safe:duration-100 motion-safe:ease-out ${
        showNotification
          ? "translate-y-16 lg:translate-y-17.5"
          : "-translate-y-36"
      }`}
      aria-hidden={!showNotification}
    >
      <div
        className={`mt-4 flex gap-x-2 items-center w-[90%] xs:max-w-sm border-0.5 border-dark-700 rounded-md ${
          status === "success"
            ? "bg-gradient-to-r from-notification-green-900 from-10% to-bg-gray-800 to-20%"
            : "bg-gradient-to-r from-notification-red-900 from-10% to-bg-gray-800 to-20%"
        }`}
      >
        <div
          className={`h-full rounded-l-md border-l-2 flex items-center ${
            status === "success"
              ? "border-notification-green-800"
              : "border-notification-red-800"
          }`}
        >
          <div
            className={`flex w-9 h-9 rounded-full outline outline-8 -outline-offset-4 ml-3 ${
              status === "success"
                ? "outline-notification-green-800/40  text-notification-green-800"
                : "outline-notification-red-800/40  text-notification-red-800"
            } `}
            aria-hidden
          >
            {status === "success" ? <CheckCircleIcon /> : <XCircleIcon />}
          </div>
        </div>
        <p
          className="text-base-sm flex-1 mb-0 px-4 py-5 text-light-500"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          {message}
        </p>
      </div>
    </div>
  );
}
