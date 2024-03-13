import { navLinks } from "@/lib/const";
import NavLink from "@/components/header/nav-link";
import MobileNavBar from "@/components/header/mobile-nav-bar";
import MenuIcon from "@/public/icons/menu-icon.svg";
import HomeLink from "@/components/header/home-link";

export default function NavBar() {
  return (
    <>
      <nav className="h-16 lg:h-17.5 w-lvw border-b border-dark-800 text-sm px-6 md:px-12 backdrop-blur-lg flex justify-between items-center">
        <HomeLink />
        <ol className="hidden md:flex h-full justify-end items-center gap-x-2">
          {navLinks.map((link) => (
            <NavLink key={link.name} name={link.name} href={link.href} />
          ))}
        </ol>

        {/* TODO: Add resume */}
        <button
          aria-label="menu"
          popovertarget="menu"
          type="button"
          className="focused-link h-10 w-10 text-gold-700 md:hidden rotate-180"
        >
          <MenuIcon />
        </button>
      </nav>
      <MobileNavBar />
    </>
  );
}
