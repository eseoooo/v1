import Link from "next/link";

export default function ResumeLink() {
  return (
    <div className="mt-8 flex justify-center">
      <Link
        href="/resume.pdf"
        target="_blank"
        aria-label={`View Full Resume (opens in a new tab)`}
        className="focused-button button-solid text-center"
      >
        Full Resume
      </Link>
    </div>
  );
}
