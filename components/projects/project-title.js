import PlusIcon from "@/public/icons/plus-icon.svg";
import MinusIcon from "@/public/icons/minus-icon.svg";

export default function ProjectTitle({ open }) {
  return (
    <summary
      className="group/title project-title focused-link py-6 md:py-7 flex justify-between"
      aria-label="Product Development"
    >
      <h4 className="inline-flex mb-0">Product Development</h4>
      {!open && (
        <span className="text-gold-700 h-5 md:h-6 w-5 md:w-6 mt-0.5 group-hover:rotate-180 group-focus-visible/title:rotate-180 motion-safe:duration-250 ease-linear">
          <PlusIcon />
        </span>
      )}
      {open && (
        <span className="text-gold-700 h-6 w-6 mt-0.5">
          <MinusIcon />
        </span>
      )}
    </summary>
  );
}
