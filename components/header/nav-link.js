import Link from "next/link";

export default function NavLink({ name, href }) {
  return (
    <li className="h-full">
      <Link
        className="focused-link p-3 inline-flex tracking-widest uppercase h-full items-center border-b-2 border-transparent  hover:border-gold-700 hover:text-gold-700 hover:bg-gold-700/10
         focus-visible:text-gold-700 focus-visible:bg-gold-700/10 duration-300 ease-out"
        href={href}
      >
        {name}
      </Link>
    </li>
  );
}
