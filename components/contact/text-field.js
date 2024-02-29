"use client";
import { useRef, useState } from "react";

export default function TextField({ name, type, otherStyles, ...otherProps }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const inputRef = useRef();

  const triggerValidState = () => {
    inputRef.current.setCustomValidity("");
    inputRef.current.reportValidity();
  };

  const triggerInvalidState = () => {
    inputRef.current.setCustomValidity(" ");
    inputRef.current.reportValidity();
  };

  const validateName = (name, minLength = 3) => {
    if (name.trim() === "") {
      return "This field is required";
    }
    if (name.length < minLength) {
      return `Please lengthen this text to at least ${minLength} characters`;
    }
    return null;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.match(emailRegex) || email.trim() === "") {
      return "Please provide a valid email";
    }
    return null;
  };

  const inputBlurHandler = (event) => {
    let error = null;
    if (event.target.getAttribute("type") === "text") {
      error = validateName(event.target.value);
    }
    if (event.target.getAttribute("type") === "email") {
      error = validateEmail(event.target.value);
    }

    if (error) {
      setErrorMessage(error);
      triggerInvalidState();
    } else {
      setErrorMessage(null);
      triggerValidState();
    }
  };

  return (
    <div className={`relative ${otherStyles}`}>
      <input
        type={type}
        name={name}
        onBlur={inputBlurHandler}
        className={`peer sub-text w-full outline-none tracking-wide font-montserrat font-light py-5 bg-transparent border-b-0.5 border-dark-800 placeholder:font-montserrat placeholder:tracking-wide placeholder:font-medium placeholder:text-base-base placeholder:md:text-base focus:border-gold-700 hover:border-gold-700 motion-safe:duration-300 motion-safe:ease-out invalid:text-red-500 invalid:placeholder:text-red-500 invalid:border-red-500 invalid:focus:border-red-500 invalid:hover:border-red-500`}
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
