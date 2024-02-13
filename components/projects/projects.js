import HeadingDash from "@/components/ui/heading-dash";
import AsteriskIcon from "@/public/icons/asterisk-icon.svg";

export default function Projects() {
  return (
    <section
      className="section-with-side-content"
      id="projects"
      aria-label="Things I've built"
    >
      <div>
        <div className="flex justify-end pt-0.5 h-6 lg:h-7 w-full text-gold-700">
          <AsteriskIcon />
        </div>
      </div>
      <div>
        <HeadingDash>Things I&apos;ve built</HeadingDash>
      </div>

      {/* <ProjectList /> */}
    </section>
  );
}
