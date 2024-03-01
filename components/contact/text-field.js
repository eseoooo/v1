"use client";
import { useState } from "react";
import { validateText, validateEmail } from "@/lib/utils";

export default function TextField({ name, type, otherStyles, ...otherProps }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [inputHasBeenBlurred, setInputHasBeenBlurred] = useState(false);

  const validateInput = (event) => {
    let error = null;

    if (event.target.getAttribute("type") === "text") {
      error = validateText(event.target.value);
    }
    if (event.target.getAttribute("type") === "email") {
      error = validateEmail(event.target.value);
    }

    if (error) {
      setErrorMessage(error);
    } else {
      setErrorMessage(null);
    }
  };

  const inputBlurHandler = (event) => {
    setInputHasBeenBlurred(true);
    validateInput(event);
  };

  const inputChangeHandler = (event) => {
    if (inputHasBeenBlurred) validateInput(event);
  };

  return (
    <div className={`relative ${otherStyles}`}>
      <input
        type={type}
        name={name}
        onBlur={inputBlurHandler}
        onChange={inputChangeHandler}
        aria-invalid={errorMessage ? "true" : "false"}
        className={`sub-text w-full outline-none tracking-wide font-montserrat font-light py-5 bg-transparent border-b-0.5 border-dark-800 placeholder:font-montserrat placeholder:tracking-wide placeholder:font-medium placeholder:text-base-base placeholder:md:text-base focus:border-gold-700 hover:border-gold-700 motion-safe:duration-300 motion-safe:ease-out ${
          errorMessage
            ? "text-red-500 placeholder:text-red-500 border-red-500 focus:border-red-500 hover:border-red-500"
            : ""
        }`}
        {...otherProps}
      />
      <p
        role="alert"
        aria-live="assertive"
        className={`${
          errorMessage ? "block" : "hidden"
        } motion-safe:duration-300 motion-safe:ease-out text-red-500 text-[0.65625rem] xs:text-xs absolute top-full pt-3`}
      >
        {errorMessage}
      </p>
    </div>
  );
}
