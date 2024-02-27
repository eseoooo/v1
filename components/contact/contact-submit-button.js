"use client";

import ChevronDoubleRightIcon from "@/public/icons/chevron-double-right-icon.svg";
import LoadingSpinnerIcon from "@/public/icons/loading-spinner-icon.svg";
import { useFormStatus } from "react-dom";

export default function ContactSubmitButton({ disabled = true }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={`group/button flex gap-x-2 items-center text-1.5xl xs:text-2xl px-6 py-4 translate-y-4 font-medium tracking-wide enabled:hover:text-gold-700  duration-300 ease-out disabled:cursor-not-allowed disabled:text-light-900 ${
        pending ? "!cursor-progress" : ""
      }`}
      aria-label="Send message"
      disabled={pending || disabled}
      aria-disabled={pending || disabled}
    >
      {!pending && "Send"}
      {!pending && (
        <span
          aria-hidden
          className="inline-flex h-5 w-5 group-hover/button:translate-x-2 duration-300 ease-out"
        >
          <ChevronDoubleRightIcon />
        </span>
      )}

      {pending && (
        <span
          aria-hidden
          className="inline-flex h-5 w-5 motion-safe:animate-spin"
        >
          <LoadingSpinnerIcon />
        </span>
      )}
      {pending && (
        <span className="inline-flex text-gold-700 ml-1">Sending...</span>
      )}
    </button>
  );
}
