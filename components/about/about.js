import HeadingDash from "@/components/ui/heading-dash";
import { aboutContent } from "@/lib/const";
import { parseMarkdownLinks } from "@/lib/utils";

export default function About() {
  const yearsOfExperience = new Date().getFullYear() - 2021;
  const { description, sideDescription } = aboutContent;

  return (
    <section
      className="section-with-side-content"
      aria-label="About me"
      id="about"
    >
      <div className="section-side-content">
        <p className="side-text hidden md:block mt-24 lg:mt-28">
          {sideDescription[0]}
        </p>
        <p className="side-text md:hidden mt-24 lg:mt-28">
          {sideDescription[1]}
        </p>
      </div>

      <div>
        <HeadingDash className="md:pl-[133px] lg:pl-[204px]">
          About me
        </HeadingDash>
        <div className="flex">
          <h1
            className="hidden md:flex flex-col gap-y-2 text-8xl lg:text-9xl tracking-normal mr-10 lg:mr-20"
            aria-label={`${yearsOfExperience} plus years of experience`}
          >
            <span className="flex">
              {yearsOfExperience}
              <span className="pt-4">+</span>
            </span>
            <span className="text-2xl lg:text-3xl -translate-y-4">Years</span>
          </h1>
          <div>
            {description.length &&
              description.map((text, index) => (
                <p className="leading-relaxed max-w-xl" key={index}>
                  {parseMarkdownLinks(text)}
                </p>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
