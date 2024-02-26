"use client";
import { useRef } from "react";

export default function TextField({
  name,
  type,
  errorMessage = "This field is required.",
  otherStyles,
  ...otherProps
}) {
  const inputRef = useRef();

  const triggerValidState = () => {
    inputRef.current.setCustomValidity("");
    inputRef.current.reportValidity();
  };

  const triggerInvalidState = () => {
    inputRef.current.setCustomValidity(" ");
    inputRef.current.reportValidity();
  };

  return (
    <div className={`relative ${otherStyles}`}>
      <input
        type={type}
        name={name}
        onFocus={triggerInvalidState}
        onBlur={triggerValidState}
        className={`peer sub-text w-full outline-none tracking-wide font-montserrat py-6 bg-transparent border-b border-dark-800 placeholder:font-montserrat placeholder:tracking-wide placeholder:font-medium placeholder:text-base-base placeholder:md:text-base focus:border-gold-700 hover:border-gold-700 motion-safe:duration-300 motion-safe:ease-out invalid:text-red-500 invalid:placeholder:text-red-500 invalid:border-red-500 invalid:focus:border-red-500 invalid:hover:border-red-500`}
        {...otherProps}
        ref={inputRef}
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
