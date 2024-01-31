import Link from "next/link";

export default function NavLink({ name, href }) {
  return (
    <li className="h-full">
      <Link
        className="p-3 inline-flex tracking-widest uppercase h-full items-center border-b-2 border-r-2 border-transparent  hover:border-gold-700 hover:text-gold-700 "
        href={href}
      >
        {name}
      </Link>
    </li>
  );
}
