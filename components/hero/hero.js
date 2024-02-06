import { heroContent } from "@/lib/const";
import ArrowDownRightIcon from "@/public/icons/arrow-down-right-icon.svg";
import Link from "next/link";
import { parseMarkdownLinks } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="section-with-side-content h-full">
      <div className="flex flex-col h-full justify-between">
        <p className="side-text">{heroContent.sideDescription}</p>
        <Link
          href="/#about"
          aria-label="About me"
          className="focused-link text-gold-700 w-full motion-safe:animate-bounce"
        >
          <ArrowDownRightIcon />
        </Link>
      </div>
      <div className="flex flex-col h-full justify-end">
        <h1 className="mb-3">
          {heroContent.firstName} {heroContent.lastName}.
        </h1>
        <h2>{heroContent.title}.</h2>
        <p className="max-w-xl leading-relaxed">
          {parseMarkdownLinks(heroContent.description)}
        </p>
        {/* TODO: Add github link */}
      </div>
    </section>
  );
}
