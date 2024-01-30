import Link from "next/link";

export default function NavLink({ name, href }) {
  return (
    <li className="h-full tracking-widest">
      <Link
        className="p-3 inline-flex h-full items-center border-b-2 border-b-transparent hover:border-b-2 hover:border-b-gold-700 hover:text-gold-700"
        href={href}
      >
        {name}
      </Link>
    </li>
  );
}
