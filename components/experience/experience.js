import HeadingDash from "@/components/ui/heading-dash";
import ExperienceList from "@/components/experience/experience-list";
import JobTitlePanel from "@/components/experience/job-title-panel";

export default function Experience() {
  return (
    <section id="experience" aria-label="where I've worked">
      <HeadingDash>where I&apos;ve worked</HeadingDash>
      <ExperienceList />
      <div className="flex w-full">
        <JobTitlePanel />
      </div>
    </section>
  );
}
