"use client";
import { useRef, useState } from "react";

export default function TextArea({ name, otherStyles, ...otherProps }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [characterCount, setCharacterCount] = useState(0);
  const textareaRef = useRef();

  const triggerValidState = () => {
    textareaRef.current.setCustomValidity("");
    textareaRef.current.reportValidity();
  };

  const triggerInvalidState = () => {
    textareaRef.current.setCustomValidity(" ");
    textareaRef.current.reportValidity();
  };

  const validateText = (text, minLength = 3, maxLength = 600) => {
    if (text.trim() === "") {
      return "This field is required";
    }
    if (text.trimStart().trimEnd().length < minLength) {
      return `Please lengthen this text to at least ${minLength} characters`;
    }
    if (text.trimStart().trimEnd().length > maxLength) {
      return `Please shorten this text to at most ${maxLength} characters`;
    }
    return null;
  };

  const blurHandler = (event) => {
    const error = validateText(event.target.value);

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
      <textarea
        name={name}
        onBlur={blurHandler}
        onInput={(event) =>
          setCharacterCount(event.target.value.trimStart().trimEnd().length)
        }
        aria-invalid={errorMessage ? "true" : "false"}
        className={`sub-text scrollbar peer outline-none w-full tracking-wide font-montserrat font-light mt-3 pb-6 pr-6 bg-transparent border-b-0.5 border-dark-800 placeholder:font-montserrat placeholder:tracking-wide placeholder:font-medium placeholder:text-base-base placeholder:md:text-base focus:border-gold-700 hover:border-gold-700 motion-safe:duration-300 motion-safe:ease-out resize-none leading-relaxed invalid:text-red-500 invalid:placeholder:text-red-500 invalid:border-red-500 invalid:focus:border-red-500 invalid:hover:border-red-500`}
        {...otherProps}
        ref={textareaRef}
      />
      <p
        aria-label={`Character Count: ${characterCount}`}
        className="text-xxs text-light-800 font-medium peer-invalid:text-red-500 xs:text-xs absolute bottom-0 right-2"
      >
        {characterCount}
      </p>
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
