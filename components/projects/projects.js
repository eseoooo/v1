import HeadingDash from "@/components/ui/heading-dash";
import AsteriskIcon from "@/public/icons/asterisk-icon.svg";
import ProjectItem from "@/components/projects/project-item";
import { projectContent } from "@/lib/const";

export default function Projects() {
  return (
    <section
      className="section-with-side-content"
      id="projects"
      aria-label="Things I've built"
    >
      <div className="section-side-content">
        <div
          aria-hidden
          className="flex justify-end pt-0.5 h-6 lg:h-7 w-full text-gold-700 "
        >
          <AsteriskIcon />
        </div>
      </div>
      <div>
        <HeadingDash aria-hidden>Things I&apos;ve built</HeadingDash>
        <div className="max-w-3xl pt-3">
          {projectContent.projects.map((project, index) => (
            <ProjectItem name="project-item" key={index} project={project} />
          ))}
        </div>
      </div>

      {/* <ProjectList /> */}
    </section>
  );
}
