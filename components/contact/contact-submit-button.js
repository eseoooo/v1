"use client";

import ChevronDoubleRightIcon from "@/public/icons/chevron-double-right-icon.svg";
import LoadingSpinnerIcon from "@/public/icons/loading-spinner-icon.svg";
import { useFormStatus } from "react-dom";

export default function ContactSubmitButton({ disabled = true }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={`focused-link group/button text-1.5xl xs:text-2xl px-6 py-4 translate-y-4 font-medium tracking-wide enabled:hover:text-gold-700 enabled:focus-visible:text-gold-700 duration-300 ease-out disabled:cursor-not-allowed disabled:text-light-900 ${
        pending ? "!cursor-progress" : ""
      }`}
      aria-label="Send message"
      disabled={pending || disabled}
      aria-disabled={pending || disabled}
    >
      {!pending && (
        <span className="inline-flex gap-x-2 items-center">
          Send
          <span
            aria-hidden
            className="inline-flex h-5 w-5 group-hover/button:translate-x-2 group-focus-visible/button:translate-x-2 duration-300 ease-out"
          >
            <ChevronDoubleRightIcon />
          </span>
        </span>
      )}

      {pending && (
        <span className="inline-flex items-center text-gold-700 gap-x-2">
          <span
            aria-hidden
            className="inline-flex h-5 w-5 motion-safe:animate-spin"
          >
            <LoadingSpinnerIcon />
          </span>
          Sending...
        </span>
      )}
    </button>
  );
}
