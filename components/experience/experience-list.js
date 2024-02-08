export default function ExperienceList() {
  const jobs = ["Kellton", "SkipTheDishes"];
  return (
    <div className="flex justify-center">
      <menu
        aria-label="job list"
        className="scrollbar max-w-md sm:min-w-[448px] flex overflow-x-auto relative"
      >
        {jobs.map((job, index) => (
          <li
            key={index}
            className="border-b w-full min-w-36 border-dark-800 mb-2"
          >
            <button
              type="button"
              className="focused-link py-2 w-full text-sm md:text-base border-b-2 border-transparent hover:border-gold-700 hover:text-gold-700 hover:bg-gold-700/10 focus-visible:text-gold-700 focus-visible:bg-gold-700/10 duration-300 ease-out tracking-wide"
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
