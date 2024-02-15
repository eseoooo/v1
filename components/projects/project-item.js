"use client";
import { useState } from "react";
import PlusIcon from "@/public/icons/plus-icon.svg";
import MinusIcon from "@/public/icons/minus-icon.svg";

export default function ProjectItem({ name }) {
  const [open, setOpen] = useState(false);

  const detailToggleHandler = (event) => {
    setOpen(event.target.open);
  };

  const detailClickHandler = (event) => {
    if (!document.startViewTransition) {
      setOpen((prevState) => !prevState);
      return;
    }
    document.startViewTransition(() => {
      setOpen((prevState) => !prevState);
    });
  };

  return (
    <details
      name={name}
      open={open}
      onToggle={detailToggleHandler}
      className="group focused-link border-t border-b border-dark-800 cursor-pointer max-h-24 overflow-hidden open:max-h-120 hover:border-t-gold-700 motion-safe:duration-300 motion-safe:ease-out"
    >
      <summary
        className="group/link list-none project-title focused-link py-6 md:py-7 flex justify-between"
        aria-label="Product Development"
      >
        <h4 className="inline-flex mb-0">Product Development</h4>
        {!open && (
          <span className="text-gold-700 h-5 md:h-6 w-5 md:w-6 mt-0.5 group-hover:rotate-180 group-focus-visible/link:rotate-180 motion-safe:duration-250 ease-linear">
            <PlusIcon />
          </span>
        )}
        {open && (
          <span className="text-gold-700 h-6 w-6 mt-0.5">
            <MinusIcon />
          </span>
        )}
      </summary>
      <p
        onClick={detailClickHandler}
        className="sub-text leading-normal py-6 md:pb-7"
      >
        rem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the standard dummy text ever since the 1500s, when
        an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the
        leap into electronic typesetting, remaining essentially unchanged. It
        was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>
    </details>
  );
}
