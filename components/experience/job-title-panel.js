"use client";
import Link from "next/link";
import { useRef } from "react";
import AnimatedLinkIcon from "@/components/ui/animated-link-icon";

export default function JobTitlePanel({ children, duration, title, company }) {
  const linkRef = useRef();
  const linkClickHandler = (event) => {
    linkRef.current.click();
  };

  return (
    <>
      <div className="hidden rounded-sm min-w-80 max-w-80 h-120 lgg:min-w-100 lgg:max-w-100 lgg:h-150 border-0.5 border-dark-900 md:flex items-center justify-center">
        <div
          className="group w-[93%] h-[96%] p-5 rounded-sm flex flex-col justify-end bg-bg-gray-800 cursor-pointer  border-0.5 border-transparent hover:border-gold-700 hover:bg-gold-700/5 motion-safe:duration-200 motion-safe:ease-out"
          onClick={linkClickHandler}
        >
          <h4>
            <Link
              className="focused-link group/link flex flex-col w-full text-pretty text-slate-50"
              aria-label="Intermediate Front-end Developer at Kellton (opens in a new tab)"
              href="https://kellton.com/"
              target="_blank"
              ref={linkRef}
            >
              <span className="mb-1 group-hover:text-gold-700 group-focus-visible/link:text-gold-700 motion-safe:duration-200 motion-safe:ease-out">
                {title}
              </span>
              <span className="text-light-600 group-hover:text-gold-800 group-focus-visible/link:text-gold-800 motion-safe:duration-200 motion-safe:ease-out">
                {company} <AnimatedLinkIcon className="top-0.5" />
              </span>
            </Link>
          </h4>
          <h6
            aria-label="May 2018 to Present"
            className="uppercase border-b-0.5 border-dark-800 pb-4 group-hover:border-gold-700 motion-safe:duration-200 motion-safe:ease-out"
          >
            {duration.from} &nbsp;—&nbsp; {duration.to}
          </h6>
          {children} {/* Technologies used */}
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <h4 className="group">
          <Link
            className="focused-link group/link flex flex-col w-full text-pretty text-slate-50"
            aria-label="Intermediate Front-end Developer at Kellton (opens in a new tab)"
            href="https://kellton.com/"
            target="_blank"
            ref={linkRef}
          >
            <span className="mb-1 group-hover:text-gold-700 group-focus-visible/link:text-gold-700 motion-safe:duration-200 motion-safe:ease-out">
              {title}
            </span>
            <span className="text-light-600 group-hover:text-gold-800 group-focus-visible/link:text-gold-800 motion-safe:duration-200 motion-safe:ease-out">
              {company} <AnimatedLinkIcon className="top-0.5" />
            </span>
          </Link>
        </h4>
        <h6
          aria-label="May 2018 to Present"
          className="uppercase border-b-0.5 border-dark-800 pb-4 max-w-72"
        >
          {duration.from} &nbsp;—&nbsp; {duration.to}
        </h6>
        {children} {/* Technologies used */}
      </div>
    </>
  );
}
