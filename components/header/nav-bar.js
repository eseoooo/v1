import MobileNavBar from "@/components/header/mobile-nav-bar";
import MenuIcon from "@/public/icons/menu-icon.svg";
import HomeLink from "@/components/header/home-link";
import NavLinks from "@/components/header/nav-links";

export default function NavBar() {
  return (
    <>
      <nav className="h-16 lg:h-17.5 w-lvw border-b border-dark-800 text-sm px-6 md:px-12 backdrop-blur-lg flex justify-between items-center">
        <HomeLink />
        <NavLinks />

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
