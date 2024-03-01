"use client";
import { useState } from "react";
import { validateTextArea } from "@/lib/utils";

export default function TextArea({ name, otherStyles, ...otherProps }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [characterCount, setCharacterCount] = useState(0);
  const [inputHasBeenBlurred, setInputHasBeenBlurred] = useState(false);

  const validateInput = (event) => {
    const error = validateTextArea(event.target.value);

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
  };

  return (
    <div className={`relative ${otherStyles}`}>
      <textarea
        name={name}
        onBlur={blurHandler}
        onChange={changeHandler}
        aria-invalid={errorMessage ? "true" : "false"}
        className={`sub-text scrollbar outline-none w-full tracking-wide font-montserrat font-light mt-3 pb-6 pr-6 bg-transparent border-b-0.5 border-dark-800 placeholder:font-montserrat placeholder:tracking-wide placeholder:font-medium placeholder:text-base-base placeholder:md:text-base focus:border-gold-700 hover:border-gold-700 motion-safe:duration-300 motion-safe:ease-out resize-none leading-relaxed ${
          errorMessage
            ? "text-red-500 placeholder:text-red-500 border-red-500 focus:border-red-500 hover:border-red-500"
            : ""
        }`}
        {...otherProps}
      />
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
        }motion-safe:duration-300 motion-safe:ease-out text-red-500 text-[0.65625rem] xs:text-xs absolute top-full pt-3`}
      >
        {errorMessage}
      </p>
    </div>
  );
}
