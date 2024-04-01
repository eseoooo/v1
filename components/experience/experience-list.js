"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
export default function ExperienceList({ jobs }) {
  const QUERY = "job_id";
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeIndex, setActiveIndex] = useState(0);

  const jobList = jobs.map((job) => job.company);

  useEffect(() => {
    if (searchParams.has(QUERY)) {
      setActiveIndex(+searchParams.get(QUERY));
    } else {
      setActiveIndex(0);
    }
  }, [searchParams]);

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const pushQueryString = (name, value) => {
    router.push(
      pathname + "?" + createQueryString(name, value) + "#experience"
    );
  };

  return (
    <div className="flex justify-center mb-8 relative">
      <div className="w-full max-w-md absolute border-b-0.5 border-dark-800 bottom-3 md:bottom-4"></div>
      <div
        role="tablist"
        aria-label="job list"
        className="scrollbar max-w-md sm:min-w-[448px] pb-3 flex overflow-x-auto relative"
      >
        {jobList.map((job, index) => (
          <button
            type="button"
            role="tab"
            key={index}
            aria-selected={activeIndex === index}
            aria-controls={`experience-panel-${index}`}
            id={`experience-tab-${index}`}
            aria-label={`Company Name: ${job}`}
            className={`focused-link font-montserrat py-3 w-full min-w-40 font-medium text-sm md:text-base-base  border-b-2 border-transparent hover:border-gold-700 hover:text-gold-700 hover:bg-gold-700/10 focus-visible:text-gold-700 focus-visible:bg-gold-700/10 duration-300 ease-out tracking-wider uppercase ${
              activeIndex === index
                ? "!border-gold-700 text-gold-700 bg-gold-700/10"
                : ""
            }`}
            onClick={() => pushQueryString(QUERY, index)}
          >
            {job}
          </button>
        ))}
      </div>
    </div>
  );
}
