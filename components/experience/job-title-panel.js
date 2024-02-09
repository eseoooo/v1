"use client";
import Link from "next/link";
import { useRef } from "react";

export default function JobTitlePanel() {
  const linkRef = useRef();
  const linkClickHandler = (event) => {
    linkRef.current.click();
  };

  return (
    <div className="w-80 h-120 lgg:w-100 lgg:h-150 border border-dark-900 flex items-center justify-center">
      <div
        className="group w-[86%] h-[90%] p-5 rounded-sm flex flex-col justify-end bg-bg-gray-800 cursor-pointer  border border-transparent hover:border-gold-700 hover:bg-gold-700/5 duration-200 ease-out"
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
            <span className="mb-1 group-hover:text-gold-700 group-focus-visible/link:text-gold-700 duration-200 ease-out">
              Front-end Developer (Intermediate)
            </span>
            <span className="text-light-600 group-hover:text-gold-800 group-focus-visible/link:text-gold-800 duration-200 ease-out">
              Kellton
            </span>
          </Link>
        </h4>
        <h6 aria-label="May 2018 to Present" className="uppercase">
          May 2018 &nbsp;—&nbsp; Present
        </h6>
      </div>
    </div>
  );
}
