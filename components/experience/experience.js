import HeadingDash from "@/components/ui/heading-dash";
import ExperienceList from "@/components/experience/experience-list";

export default function Experience() {
  return (
    <section id="experience" aria-label="where I've worked">
      <HeadingDash className="justify-center">
        where I&apos;ve worked
      </HeadingDash>
      <ExperienceList />
    </section>
  );
}
