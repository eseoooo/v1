import HeadingDash from "@/components/ui/heading-dash";
import ExperienceList from "@/components/experience/experience-list";
import JobTitlePanel from "@/components/experience/job-title-panel";
import JobDescriptionPanel from "@/components/experience/job-description-panel";
import TechnologiesUsedList from "@/components/shared/technologies-used-list";

export default function Experience({ searchParams }) {
  const { job_id: id } = searchParams;

  return (
    <section id="experience" aria-label="where I've worked">
      <HeadingDash aria-hidden>where I&apos;ve worked</HeadingDash>
      <ExperienceList />
      <div className="max-w-full flex overflow-x-hidden">
        {Array.from({ length: 4 }, (_, index) => (
          <div
            key={index}
            style={{ transform: `translateX(${id ? id * -100 : 0}%)` }}
            className="flex w-full min-w-full flex-col justify-center  md:flex-row gap-6 lgg:gap-x-10 duration-400 ease-out"
          >
            <JobTitlePanel>
              <TechnologiesUsedList
                technologies={["HTML", "CSS", "JavaScript"]}
                className="max-w-72"
              />
            </JobTitlePanel>
            <JobDescriptionPanel />
          </div>
        ))}
      </div>
    </section>
  );
}
