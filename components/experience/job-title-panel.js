"use client";
import Link from "next/link";
import { useRef } from "react";

export default function JobTitlePanel() {
  const linkRef = useRef();
  const linkClickHandler = (event) => {
    linkRef.current.click();
  };

  return (
    <>
      <div className="hidden w-80 h-120 lgg:w-100 lgg:h-150 border border-dark-900 md:flex items-center justify-center">
        <div
          className="group w-[86%] h-[90%] p-5 rounded-sm flex flex-col justify-end bg-bg-gray-800 cursor-pointer  border border-transparent hover:border-gold-700 hover:bg-gold-700/5 motion-safe:duration-200 motion-safe:ease-out"
          onClick={linkClickHandler}
        >
          <h4>
            <Link
              className="focused-link group/link flex flex-col w-full text-pretty"
              aria-label="Intermediate Front-end Developer at Kellton (opens in a new tab)"
              href="https://kellton.com/"
              target="_blank"
              ref={linkRef}
            >
              <span className="mb-1 group-hover:text-gold-700 group-focus-visible/link:text-gold-700 motion-safe:duration-200 motion-safe:ease-out">
                Front-end Developer (Intermediate)
              </span>
              <span className="text-light-600 group-hover:text-gold-800 group-focus-visible/link:text-gold-800 motion-safe:duration-200 motion-safe:ease-out">
                Kellton
              </span>
            </Link>
          </h4>
          <h6 aria-label="May 2018 to Present" className="uppercase">
            May 2018 &nbsp;—&nbsp; Present
          </h6>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <h4 className="group">
          <Link
            className="focused-link group/link flex flex-col w-full text-pretty"
            aria-label="Intermediate Front-end Developer at Kellton (opens in a new tab)"
            href="https://kellton.com/"
            target="_blank"
            ref={linkRef}
          >
            <span className="mb-1 group-hover:text-gold-700 group-focus-visible/link:text-gold-700 motion-safe:duration-200 motion-safe:ease-out">
              Front-end Developer (Intermediate)
            </span>
            <span className="text-light-600 group-hover:text-gold-800 group-focus-visible/link:text-gold-800 motion-safe:duration-200 motion-safe:ease-out">
              Kellton
            </span>
          </Link>
        </h4>
        <h6 aria-label="May 2018 to Present" className="uppercase">
          May 2018 &nbsp;—&nbsp; Present
        </h6>
      </div>
    </>
  );
}