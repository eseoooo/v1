import navLinks from "@/const/navLinks";
import NavLink from "@/components/header/nav-link";

export default function NavBar() {
  return (
    <nav className="h-16 lg:h-17.5 w-lvw border-b border-dark-800 text-sm px-12 backdrop-blur backdrop-grayscale">
      <ol className="hidden md:flex h-full justify-end items-center gap-x-2">
        {navLinks.map((link) => (
          <NavLink key={link.name} name={link.name} href={link.href} />
        ))}
      </ol>
    </nav>
  );
}
