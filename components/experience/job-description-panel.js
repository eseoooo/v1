import ChevronDoubleRightIcon from "@/public/icons/chevron-double-right-icon.svg";

export default function JobDescriptionPanel() {
  return (
    <div className="scrollbar h-full overflow-y-auto max-h-120 lgg:max-h-150">
      <ul
        role="list"
        className="max-w-xl list-disc min-h-120 lgg:min-h-150 flex flex-col md:justify-end marker:text-transparent"
      >
        {Array.from({ length: 4 }, (_, index) => (
          <li
            key={index}
            role="listitem"
            aria-label="A job role"
            className="mb-3 ml-8 md:ml-4 pl-5 relative"
          >
            <p className="mb-0 sub-text leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim
            </p>
            <div
              aria-hidden="true"
              className="h-4 w-4 absolute top-3 -left-5 text-gold-700"
            >
              <ChevronDoubleRightIcon aria-hidden="true" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
