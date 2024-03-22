import Image from "next/image";
import TechnologiesUsedList from "@/components/shared/technologies-used-list";
import ProjectLink from "@/components/projects/project-link";
import { parseMarkdownLinks } from "@/lib/utils";

export default function ProjectDetails({
  detailClickHandler,
  imagePath,
  imageAlt,
  description,
  technologies,
  github,
  url,
  name,
}) {
  const keydownHandler = (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    detailClickHandler();
  };

  return (
    <div
      tabIndex="0"
      role="button"
      onClick={detailClickHandler}
      onKeyDown={keydownHandler}
      aria-label="Project details expanded (click to collapse)"
      className="focused-link !-outline-offset-2 px-4 md:px-6 pb-6 md:pb-7 flex gap-x-4 lg:gap-x-6"
    >
      <div className="hidden relative md:block max-h-24 min-w-36 mt-1">
        <Image
          src={imagePath}
          alt={imageAlt}
          fill
          sizes="150w"
          className="object-cover rounded border-0.5 border-dark-800"
        />
      </div>
      <div className="flex flex-col gap-y-3 max-w-xl">
        <p className="sub-text leading-normal">
          {parseMarkdownLinks(description)}
        </p>
        <TechnologiesUsedList showHeader={false} technologies={technologies} />
        <div className="hidden md:block">
          <ProjectLink github={github} url={url} name={name} />
        </div>

        <div className="md:hidden relative block h-24 w-40 mt-2">
          <Image
            src={imagePath}
            alt={imageAlt}
            fill
            sizes="180w"
            className="object-cover rounded border-0.5 border-dark-800"
          />
        </div>
        <div className="md:hidden block">
          <ProjectLink github={github} url={url} name={name} />
        </div>
      </div>
    </div>
  );
}
