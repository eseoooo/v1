"use client";
import { useState } from "react";
import { validateText, validateEmail } from "@/lib/utils";

export default function TextField({
  name,
  type,
  onChange = () => {},
  otherStyles,
  maxLength = 50,
  minLength = 3,
  placeholder = "",
  ...otherProps
}) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [inputHasBeenTouched, setInputHasBeenTouched] = useState(false);
  const [hasInput, setHasInput] = useState(false);

  const validateInput = (event) => {
    let error = null;

    if (event.target.getAttribute("type") === "text") {
      error = validateText(event.target.value, minLength, maxLength);
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
    setInputHasBeenTouched(true);
    validateInput(event);
  };

  const inputChangeHandler = (event) => {
    if (inputHasBeenTouched) validateInput(event);
    onChange(event.target.value);
    setHasInput(event.target.value.trim().length > 0);
  };

  return (
    <div className={`relative ${otherStyles}`}>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onBlur={inputBlurHandler}
        onChange={inputChangeHandler}
        onKeyUp={inputBlurHandler}
        aria-invalid={errorMessage ? "true" : "false"}
        className={`sub-text peer/input w-full outline-none tracking-wide font-montserrat font-light py-5 mt-2 bg-transparent border-b-0.5 border-dark-800 placeholder:font-montserrat placeholder:tracking-wide placeholder:font-medium placeholder:text-base-base placeholder:md:text-base focus:placeholder:opacity-0 focus:border-gold-700 hover:border-gold-700 motion-safe:duration-300 motion-safe:ease-out autofill:bg-transparent ${
          errorMessage
            ? "text-red-500 placeholder:text-red-500 border-red-500 focus:border-red-500 hover:border-red-500"
            : ""
        }`}
        {...otherProps}
      />
      <label
        htmlFor={name}
        className={`absolute block opacity-0 mb-0 top-1/2 -translate-y-1/2 peer-focus/input:-translate-y-[200%] peer-focus/input:text-xs peer-focus/input:opacity-100 motion-safe:duration-200 motion-safe:ease-out font-montserrat tracking-wide font-medium text-base-base md:text-base ${
          hasInput ? "-translate-y-[200%] !text-xs opacity-100" : ""
        } ${errorMessage ? "text-red-500" : ""}`}
      >
        {placeholder}
      </label>
      <p
        role="alert"
        aria-live="assertive"
        className={`${
          errorMessage ? "block" : "hidden"
        } motion-safe:duration-300 motion-safe:ease-out text-red-500 text-[0.6875rem] xs:text-xs absolute top-full pt-1`}
      >
        {errorMessage}
      </p>
    </div>
  );
}
