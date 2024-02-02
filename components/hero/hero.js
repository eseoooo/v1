import { personalInfo } from "@/lib/const";

export default function Hero() {
  return (
    <section className="flex flex-col h-full justify-end">
      <h1 className="mb-3">
        {personalInfo.firstName} {personalInfo.LastName}.
      </h1>
      <h2>{personalInfo.title}.</h2>
      <p>{personalInfo.description}</p>
    </section>
  );
}
