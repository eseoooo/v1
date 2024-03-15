import Link from "next/link";
import NotFoundImage from "@/public/images/not-found.svg";

export default function NotFound() {
  return (
    <section
      aria-label="Page not found"
      className="flex h-full max-h-dvh items-center justify-center"
    >
      <div className="max-w-xl w-full flex flex-col items-center gap-y-6">
        <NotFoundImage />
        <Link className="button-outline focused-button" href="/">
          Go Home
        </Link>
      </div>
    </section>
  );
}
