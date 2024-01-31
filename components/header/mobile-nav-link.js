import Link from "next/link";

export default function MobileNavLink({ name, href }) {
  return (
    <li className="w-4/5">
      <Link
        className="p-5 inline-flex tracking-widest uppercase border-l border-dark-800 font-medium"
        href={href}
      >
        {name}
      </Link>
    </li>
  );
}
