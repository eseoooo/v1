"use client";
import Link from "next/link";
export default function SkipToContent() {
  const handleClick = (event) => {
    event.target.blur();
    document.getElementById("content").click();
  };

  return (
    <Link
      onClick={handleClick}
      href="#content"
      className="absolute left-0 top-0 block -translate-x-full focus-visible:translate-x-0 px-4 py-3 text-sm font-bold uppercase tracking-wider bg-gold-700 text-bg-gray-800
      translate-y-16 lg:translate-y-17.5 font-montserrat"
    >
      Skip to content
    </Link>
  );
}
