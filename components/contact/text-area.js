"use client";
import { useState } from "react";
import { validateText } from "@/lib/utils";

export default function TextArea({
  name,
  otherStyles,
  placeholder = "",
  maxLength,
  minLength,
  onChange = () => {},
  ...otherProps
}) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [characterCount, setCharacterCount] = useState(0);
  const [inputHasBeenBlurred, setInputHasBeenBlurred] = useState(false);

  const validateInput = (event) => {
    const error = validateText(event.target.value, minLength, maxLength);

    if (error) {
      setErrorMessage(error);
    } else {
      setErrorMessage(null);
    }
  };

  const blurHandler = (event) => {
    setInputHasBeenBlurred(true);
    validateInput(event);
  };

  const changeHandler = (event) => {
    if (inputHasBeenBlurred) validateInput(event);
    setCharacterCount(event.target.value.trimStart().trimEnd().length);
    onChange(event.target.value);
  };

  return (
    <div className={`relative ${otherStyles}`}>
      <textarea
        name={name}
        id={name}
        onBlur={blurHandler}
        onChange={changeHandler}
        placeholder={placeholder}
        aria-invalid={errorMessage ? "true" : "false"}
        className={`sub-text peer/input scrollbar outline-none w-full tracking-wide font-montserrat font-light pb-6 pr-6 bg-transparent border-b-0.5 border-dark-800 placeholder:font-montserrat placeholder:tracking-wide placeholder:font-medium placeholder:text-base-base placeholder:md:text-base focus:placeholder:opacity-0 focus:border-gold-700 hover:border-gold-700 motion-safe:duration-300 motion-safe:ease-out resize-none leading-relaxed autofill:bg-transparent ${
          errorMessage
            ? "text-red-500 placeholder:text-red-500 border-red-500 focus:border-red-500 hover:border-red-500"
            : ""
        }`}
        {...otherProps}
      />
      <label
        htmlFor={name}
        className={`absolute block opacity-0 mb-0 -top-3 translate-y-1/2 peer-focus/input:-translate-y-full peer-focus/input:text-xs peer-focus/input:opacity-100 motion-safe:duration-200 motion-safe:ease-out font-montserrat tracking-wide font-medium text-base-base md:text-base ${
          characterCount > 0 ? "!-translate-y-full !text-xs opacity-100" : ""
        } ${errorMessage ? "text-red-500" : ""}`}
      >
        {placeholder}
      </label>
      <p
        aria-label={`Character Count: ${characterCount}`}
        className={`text-xxs text-light-800 font-medium xs:text-xs absolute bottom-0 right-2 ${
          errorMessage ? "text-red-500" : ""
        }`}
      >
        {characterCount}
      </p>
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
