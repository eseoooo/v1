import ArrowTopOpenSquareIcon from "@/public/icons/arrow-top-open-square-icon.svg";
import ArrowLongUpIcon from "@/public/icons/arrow-long-up-icon.svg";

export default function AnimatedLinkIcon({
  className,
  transitionTimingFunction = "ease-out",
  duration = "200",
  applyGroupHover = true,
}) {
  // transition-timing-function and duration might need to match with parent transition-timing-function and duration
  return (
    <div className={`h-5 w-5 relative text-inherit inline-block ${className}`}>
      <ArrowTopOpenSquareIcon />
      <ArrowLongUpIcon
        className={`h-full w-full absolute bottom-1 left-1 ${
          applyGroupHover
            ? "group-hover:bottom-[6.5px] group-hover:left-1.5"
            : "hover:bottom-[6.5px] hover:left-1.5"
        } rotate-45 motion-safe:duration-${duration} motion-safe:${transitionTimingFunction}`}
      />
    </div>
  );
}
