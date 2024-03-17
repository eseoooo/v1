"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
export default function ExperienceList() {
  const QUERY = "job_id";
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!searchParams.has(QUERY)) {
      setActiveIndex(0);
    }
  }, [searchParams]);

  const jobs = ["Kellton", "SkipTheDishes", "BestEgg", "Covac"]; // import list and use id

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const onClickHandler = (index) => {
    pushQueryString(QUERY, index);
    setActiveIndex(index);
  };

  const pushQueryString = (name, value) => {
    router.push(
      pathname + "?" + createQueryString(name, value) + "#experience"
    );
  };

  return (
    <div className="flex justify-center mb-8">
      <menu
        role="menubar"
        aria-label="job list"
        className="scrollbar max-w-md sm:min-w-[448px] flex overflow-x-auto relative"
      >
        {jobs.map((job, index) => (
          <li
            role="menuitem"
            key={index}
            className="border-b-0.5 w-full min-w-40 border-dark-800 mb-2 font-montserrat"
          >
            <button
              type="button"
              aria-label={`Company Name: ${job}`}
              className={`focused-link py-3 w-full font-medium text-sm md:text-base-base border-b-2 border-transparent hover:border-gold-700 hover:text-gold-700 hover:bg-gold-700/10 focus-visible:text-gold-700 focus-visible:bg-gold-700/10 duration-300 ease-out tracking-wider uppercase ${
                activeIndex === index
                  ? "border-gold-700 text-gold-700 bg-gold-700/10"
                  : ""
              }`}
              onClick={() => onClickHandler(index)}
            >
              {job}
            </button>
          </li>
        ))}
        <div className="absolute bottom-0 w-full"></div>
      </menu>
    </div>
  );
}
