import CheckCircleIcon from "@/public/icons/check-circle-icon.svg";
import XCircleIcon from "@/public/icons/x-circle-icon.svg";
export default function Notification({ message, status = "success" }) {
  return (
    <div className="flex justify-center">
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
