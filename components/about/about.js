import HeadingDash from "@/components/ui/heading-dash";

export default function About() {
  const yearsOfExperience = new Date().getFullYear() - 2021;

  // TODO: Add sr-only sm:not-sr-only
  return (
    <section
      className="section-with-side-content"
      aria-label="About me"
      id="about"
    >
      <div>
        <p className="side-text hidden md:block mt-16 lg:mt-20">Experience</p>
        <p className="side-text md:hidden mt-16 lg:mt-20">Get to know me</p>
      </div>
      <div>
        <HeadingDash className="md:pl-[133px] lg:pl-[164px]">
          About me
        </HeadingDash>
        <div className="flex">
          <h1
            className="hidden md:flex flex-col gap-y-2 text-8xl lg:text-8.5xl tracking-normal mr-10 lg:mr-14"
            aria-label={`${yearsOfExperience} plus years of experience`}
          >
            <span className="flex">
              {yearsOfExperience}
              <span className="pt-4">+</span>
            </span>
            <span className="text-2xl lg:text-3xl -translate-y-4">Years</span>
          </h1>
          <div>
            <p className="leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
            </p>
            <p className="leading-relaxed">
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p className="leading-relaxed">
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It
              was popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
