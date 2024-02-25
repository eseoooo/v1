"use client";
import { useRef } from "react";

export default function TextField({
  name,
  type,
  errorMessage = "This field is required.",
  otherStyles,
  ...otherProps
}) {
  const ref = useRef();

  const triggerValidState = () => {
    ref.current.setCustomValidity("");
    ref.current.reportValidity();
  };

  const triggerInvalidState = () => {
    ref.current.setCustomValidity("  ");
    ref.current.reportValidity();
  };

  return (
    <div className={`relative ${otherStyles}`}>
      <input
        type={type}
        name={name}
        onFocus={triggerInvalidState}
        onBlur={triggerValidState}
        className={`peer w-full outline-none tracking-wide font-montserrat py-6 bg-transparent border-b border-dark-800 text-sm xs:text-base placeholder:font-montserrat placeholder:tracking-wide placeholder:font-medium placeholder:text-base-base placeholder:md:text-base focus:border-gold-700 hover:border-gold-700 motion-safe:duration-300 motion-safe:ease-out invalid:text-red-500 invalid:placeholder:text-red-500 invalid:border-red-500 invalid:focus:border-red-500 invalid:hover:border-red-500`}
        {...otherProps}
        ref={ref}
      />
      <p
        role="alert"
        aria-live="assertive"
        className="hidden peer-invalid:block motion-safe:duration-300 motion-safe:ease-out text-red-500 text-xs absolute -bottom-9"
      >
        {errorMessage}
      </p>
    </div>
  );
}
