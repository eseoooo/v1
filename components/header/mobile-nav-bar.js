import { navLinks } from "@/lib/const";
import MobileNavLink from "@/components/header/mobile-nav-link";
import ButtonSolid from "@/components/ui/button-solid";

export default function MobileNavBar() {
  return (
    <nav
      popover="auto"
      role="menu"
      id="menu"
      className="md:hidden px-6 py-12 sm:p-12 flex flex-col max-h-dvh h-dvh w-5/6 sm:w-2/3 bg-bg-gray-800 left-full"
    >
      <ol className="flex flex-col flex-1 justify-center items-center">
        {navLinks.map((link) => (
          <MobileNavLink key={link.name} name={link.name} href={link.href} />
        ))}
      </ol>
      <div className="flex justify-end">
        <ButtonSolid
          type="button"
          popovertarget="menu"
          popovertargetaction="hide"
        >
          Close
        </ButtonSolid>
      </div>
    </nav>
  );
}
