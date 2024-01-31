import { navLinks } from "@/lib/const";
import NavLink from "@/components/header/nav-link";
import MobileNavBar from "@/components/header/mobile-nav-bar";
import MenuIcon from "@/public/icons/menu-icon.svg";
import CloseIcon from "@/public/icons/close-icon.svg";

export default function NavBar() {
  return (
    <>
      <nav className="h-16 lg:h-17.5 w-lvw border-b border-dark-800 text-sm px-12 backdrop-blur backdrop-grayscale flex justify-end items-center">
        <ol className="hidden md:flex h-full justify-end items-center gap-x-2">
          {navLinks.map((link) => (
            <NavLink key={link.name} name={link.name} href={link.href} />
          ))}
        </ol>
        <button type="button" className="h-8 w-8 text-gold-700 md:hidden">
          {/* <MenuIcon /> */}
          <CloseIcon />
        </button>
      </nav>
      <MobileNavBar />
    </>
  );
}
