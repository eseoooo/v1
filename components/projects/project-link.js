import AnimatedLinkIcon from "@/components/ui/animated-link-icon";
import GitHubIcon from "@/public/icons/github-icon.svg";
import Link from "next/link";

export default function ProjectLink({ name, href }) {
  return (
    <div className="mt-1 flex gap-x-3">
      <Link
        href="https://kellton.com/"
        target="_blank"
        aria-label="Product Development Github Repo (opens in a new tab)"
        className="focused-link hover:text-gold-700 focus-visible:text-gold-700 duration-300 motion-safe:ease-out h-5 w-5 pt-1"
      >
        <GitHubIcon aria-hidden />
      </Link>
      <Link
        href="https://kellton.com/"
        target="_blank"
        aria-label="Product Development (opens in a new tab)"
        className="focused-link focus-visible:text-gold-700"
      >
        <AnimatedLinkIcon
          applyGroupHover={false}
          className="hover:text-gold-700  h-6 w-6"
        />
      </Link>
    </div>
  );
}
