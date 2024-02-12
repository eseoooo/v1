import ArrowTopOpenSquareIcon from "@/public/icons/arrow-top-open-square-icon.svg";
import ArrowLongUpIcon from "@/public/icons/arrow-long-up-icon.svg";

export default function AnimatedLinkIcon({
  className,
  transitionTimingFunction = "ease-out",
  duration = "200",
}) {
  // transition-timing-function and duration might need to match with parent transition-timing-function and duration
  return (
    <div
      className={`group h-5 w-5 relative text-inherit inline-block ${className}`}
    >
      <ArrowTopOpenSquareIcon />
      <ArrowLongUpIcon
        className={`h-5 w-5 absolute bottom-1 left-1 group-hover:bottom-1.5 group-hover:left-1.5 rotate-45 motion-safe:duration-${duration} motion-safe:${transitionTimingFunction}`}
      />
    </div>
  );
}
