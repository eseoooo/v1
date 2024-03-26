import Link from "next/link";
import GitHubIcon from "@/public/icons/github-icon.svg";
import { heroContent } from "@/lib/const";

export default function GithubLink() {
  return (
    <Link
      href={heroContent.github}
      target="_blank"
      aria-label={`Github Repo (opens in a new tab)`}
      className="focused-link !outline-offset-1 hover:text-gold-700 focus-visible:text-gold-700 duration-300 motion-safe:ease-out h-5 w-5"
    >
      <GitHubIcon aria-hidden />
    </Link>
  );
}
