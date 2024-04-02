import GithubLink from "@/components/footer/github-link";
import EmailLink from "@/components/footer/email-link";
import { footerContent } from "@/lib/const";
import { parseMarkdownLinks } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center pt-12 md:pt-24 pb-12 w-full">
      <p className="sub-text max-w-md text-center leading-normal">
        {parseMarkdownLinks(footerContent.description)}
      </p>
      <div className="flex gap-x-2 items-center justify-center">
        <EmailLink />
        <GithubLink />
      </div>
    </footer>
  );
}
