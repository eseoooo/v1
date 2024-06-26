export default function TechnologiesUsedList({
  technologies,
  showHeader = true,
  className = "",
}) {
  return (
    <div className={`${className}`}>
      {showHeader && <h5 className="mb-4">Technologies:</h5>}
      <ul
        role="list"
        aria-label="Technologies Used"
        className="flex flex-wrap gap-2"
      >
        {technologies.map((technology, index) => (
          <li
            key={index}
            className="text-xs font-montserrat text-gold-700 bg-gold-700/10 px-3 py-1.5 rounded-3xl font-light"
          >
            {technology}
          </li>
        ))}
      </ul>
    </div>
  );
}
