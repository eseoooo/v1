"use client";
import { useRef } from "react";

export default function TextArea({
  name,
  errorMessage = "This field is required.",
  otherStyles,
  ...otherProps
}) {
  const textareaRef = useRef();

  const triggerValidState = () => {
    textareaRef.current.setCustomValidity("");
    textareaRef.current.reportValidity();
  };

  const triggerInvalidState = () => {
    textareaRef.current.setCustomValidity(" ");
    textareaRef.current.reportValidity();
  };

  return (
    <div className={`relative ${otherStyles}`}>
      <textarea
        name={name}
        onFocus={triggerInvalidState}
        onBlur={triggerValidState}
        className={`sub-text scrollbar outline-none w-full tracking-wide font-montserrat mt-3 pb-6 bg-transparent border-b border-dark-800 placeholder:font-montserrat placeholder:tracking-wide placeholder:font-medium placeholder:text-base-base placeholder:md:text-base focus:border-gold-700 hover:border-gold-700 motion-safe:duration-300 motion-safe:ease-out resize-none leading-relaxed invalid:text-red-500 invalid:placeholder:text-red-500 invalid:border-red-500 invalid:focus:border-red-500 invalid:hover:border-red-500`}
        {...otherProps}
        ref={textareaRef}
      />
      <p
        role="alert"
        aria-live="assertive"
        className="hidden peer-invalid:block motion-safe:duration-300 motion-safe:ease-out text-red-500 text-xs absolute top-full pt-3"
      >
        {errorMessage}
      </p>
    </div>
  );
}
