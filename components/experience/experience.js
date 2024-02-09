import HeadingDash from "@/components/ui/heading-dash";
import ExperienceList from "@/components/experience/experience-list";
import JobTitlePanel from "@/components/experience/job-title-panel";

export default function Experience() {
  return (
    <section id="experience" aria-label="where I've worked">
      <HeadingDash>where I&apos;ve worked</HeadingDash>
      <ExperienceList />
      <div className="flex w-full gap-x-6 lgg:gap-x-10">
        <JobTitlePanel />

        <p className="max-w-xl flex-1 flex items-end text-sm lgg:text-base-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
}
