"use client";
import { useState } from "react";
import ProjectTitle from "@/components/projects/project-title";
import ProjectDetails from "@/components/projects/project-details";

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
  // todo accessibility for expand/collapse

  return (
    <details
      name={name}
      open={open}
      onToggle={detailToggleHandler}
      className="group focused-link border-t border-b border-dark-800 cursor-pointer max-h-24 overflow-hidden open:max-h-150 hover:border-t-gold-700 motion-safe:duration-300 motion-safe:ease-out"
    >
      <ProjectTitle open={open} />
      <ProjectDetails detailClickHandler={detailClickHandler} />
    </details>
  );
}
