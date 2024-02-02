import { personalInfo } from "@/lib/const";
import ArrowDownRightIcon from "@/public/icons/arrow-down-right-icon.svg";

export default function Hero() {
  return (
    <section className="h-full flex">
      <div className="side-content hidden sm:flex flex-col h-full justify-between">
        <p className="side-text">{personalInfo.sideDescription}</p>
        <div className="text-gold-700 w-full">
          <ArrowDownRightIcon />
        </div>
      </div>
      <div className="flex flex-col flex-1 h-full justify-end">
        <h1 className="mb-3">
          {personalInfo.firstName} {personalInfo.LastName}.
        </h1>
        <h2>{personalInfo.title}.</h2>
        <p className="max-w-xl">{personalInfo.description}</p>
      </div>
    </section>
  );
}
