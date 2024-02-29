export default function ExperienceList() {
  const jobs = ["Kellton", "SkipTheDishes"];
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
              className="focused-link py-3 w-full font-medium text-sm md:text-base-base border-b-2 border-transparent hover:border-gold-700 hover:text-gold-700 hover:bg-gold-700/10 focus-visible:text-gold-700 focus-visible:bg-gold-700/10 duration-300 ease-out tracking-wider uppercase"
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
