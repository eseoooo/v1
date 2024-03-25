import Link from "next/link";
import EmailIcon from "@/public/icons/email-icon.svg";
import { heroContent } from "@/lib/const";

export default function EmailLink() {
  return (
    <Link
      href={`mailto:${heroContent.email}`}
      target="_blank"
      aria-label={`Send email to ${heroContent.email} (opens in a new tab)`}
      className="focused-link hover:text-gold-700 focus-visible:text-gold-700 duration-300 motion-safe:ease-out h-5 w-5"
    >
      <EmailIcon aria-hidden />
    </Link>
  );
}
