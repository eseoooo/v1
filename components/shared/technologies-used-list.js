export default function TechnologiesUsedList({ technologies, className }) {
  const techs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind",
    "Git",
    "GitHub",
    "Figma",
  ];

  return (
    <div className={`${className}`}>
      <h6 className="pt-4 mb-4 border-t border-dark-800">Technologies:</h6>
      <ul className="flex flex-wrap gap-2">
        {techs.map((technology, index) => (
          <li
            key={index}
            className="text-xs font-montserrat text-gold-700 bg-gold-700/10 px-3 py-1.5 rounded-3xl"
          >
            {technology}
          </li>
        ))}
      </ul>
    </div>
  );
}
