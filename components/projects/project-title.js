import PlusIcon from "@/public/icons/plus-icon.svg";
import MinusIcon from "@/public/icons/minus-icon.svg";

export default function ProjectTitle({ open }) {
  return (
    <summary
      className="group/title project-title focused-link py-6 md:py-7 px-4 md:px-6 flex justify-between"
      aria-label="Project title: Product Development"
    >
      <h4 aria-hidden className="inline-flex mb-0 font-normal">
        Product Development
      </h4>
      {!open && (
        <span
          aria-hidden
          className="text-gold-700 h-5 md:h-6 w-5 md:w-6 mt-0.5 group-hover:rotate-180 group-focus-visible/title:rotate-180 motion-safe:duration-250 ease-linear"
        >
          <PlusIcon />
        </span>
      )}
      {open && (
        <span aria-hidden className="text-gold-700 h-6 w-6 mt-0.5">
          <MinusIcon />
        </span>
      )}
    </summary>
  );
}
