import Image from "next/image";
import TechnologiesUsedList from "@/components/shared/technologies-used-list";
import ProjectLink from "@/components/projects/project-link";

export default function ProjectDetails({ detailClickHandler }) {
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
      className="focused-link !-outline-offset-2  pb-6 md:pb-7 flex gap-x-4 lg:gap-x-8"
    >
      <div className="hidden relative md:block flex-1 max-h-24 min-w-36 mt-1">
        <Image
          src="/images/pexels-bri-schneiter-346529.jpg"
          alt="project image"
          fill
          sizes="150w"
          className="object-cover rounded border-2 border-dark-800"
        />
      </div>
      <div className="flex flex-col gap-y-3 max-w-xl">
        <p className="sub-text leading-normal">
          rem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
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
            sizes="180w"
            className="object-cover rounded border-2 border-dark-800"
          />
        </div>
        <div className="md:hidden block">
          <ProjectLink />
        </div>
      </div>
    </div>
  );
}
