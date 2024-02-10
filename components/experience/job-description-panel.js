export default function JobDescriptionPanel() {
  return (
    <div className="scrollbar h-full overflow-y-auto max-h-120 lgg:max-h-150">
      <ul className="max-w-xl list-disc h-full flex flex-col justify-end">
        {Array.from({ length: 10 }, (index) => (
          <li key={index} className="mb-3 ml-8 md:ml-4 pl-3 lgg:pl-5">
            <p className="mb-0 text-base-sm xs:text-sm lgg:text-base-base leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
