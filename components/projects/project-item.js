"use client";
import { useState } from "react";
import PlusIcon from "@/public/icons/plus-icon.svg";
import MinusIcon from "@/public/icons/minus-icon.svg";
import Image from "next/image";
import TechnologiesUsedList from "@/components/shared/technologies-used-list";
import ProjectLink from "@/components/projects/project-link";

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
      <summary
        className="group/title project-title focused-link py-6 md:py-7 flex justify-between"
        aria-label="Product Development"
      >
        <h4 className="inline-flex mb-0">Product Development</h4>
        {!open && (
          <span className="text-gold-700 h-5 md:h-6 w-5 md:w-6 mt-0.5 group-hover:rotate-180 group-focus-visible/title:rotate-180 motion-safe:duration-250 ease-linear">
            <PlusIcon />
          </span>
        )}
        {open && (
          <span className="text-gold-700 h-6 w-6 mt-0.5">
            <MinusIcon />
          </span>
        )}
      </summary>

      <div
        onClick={detailClickHandler}
        className="pb-6 md:pb-7 flex gap-x-4 lg:gap-x-8"
      >
        <div className="hidden relative md:block flex-1 max-h-24 min-w-36 mt-1">
          <Image
            src="/images/pexels-bri-schneiter-346529.jpg"
            alt="project image"
            fill
            className="object-cover rounded border-2 border-dark-800"
          />
        </div>

        <div className="flex flex-col gap-y-3 max-w-xl">
          <p className="sub-text leading-normal">
            rem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>

          <TechnologiesUsedList
            showHeader={false}
            technologies={[
              "HTML",
              "CSS",
              "JavaScript",
              "HTML",
              "CSS",
              "JavaScript",
              "HTML",
            ]}
          />
          <div className="hidden md:block">
            <ProjectLink />
          </div>

          <div className="md:hidden relative block h-28 w-44 mt-2">
            <Image
              src="/images/pexels-bri-schneiter-346529.jpg"
              alt="project image"
              fill
              className="object-cover rounded border-2 border-dark-800"
            />
          </div>
          <div className="md:hidden block">
            <ProjectLink />
          </div>
        </div>
      </div>
    </details>
  );
}
