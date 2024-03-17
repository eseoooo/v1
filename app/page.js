import Hero from "@/components/hero/hero";
import About from "@/components/about/about";
import Experience from "@/components/experience/experience";
import Projects from "@/components/projects/projects";
import Contact from "@/components/contact/contact";

export default function Home({ searchParams }) {
  return (
    <>
      <Hero />
      <About />
      <Experience searchParams={searchParams} />
      <Projects />
      <Contact />
    </>
  );
}
