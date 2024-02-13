"use client";
import { useState } from "react";

export default function ProjectItem({ name }) {
  const [open, setOpen] = useState(false);

  const toggleDetails = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <details
      name={name}
      open={open}
      onToggle={(event) => setOpen(event.target.open)}
      className="group border-t border-b border-dark-800 cursor-pointer max-h-24 overflow-hidden open:max-h-72 hover:border-t-gold-700 motion-safe:duration-400 motion-safe:ease-out"
    >
      <summary className="list-none py-7">
        <h4 className="inline-flex mb-0">Product Development</h4>
      </summary>
      <p onClick={toggleDetails} className="sub-text leading-normal">
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
