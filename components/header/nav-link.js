"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavLink({ name, href }) {
  const [hash, setHash] = useState(null);

  useEffect(() => {
    setHash(window.location.hash);
  }, []);

  const handleClick = (event) => {
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("active-nav-link");
    });
    event.target.classList.add("active-nav-link");
  };

  return (
    <li className="h-full">
      <Link
        onClick={handleClick}
        className={`focused-link nav-link font-medium p-3 inline-flex tracking-widest uppercase h-full items-center border-b-2 border-transparent  hover:border-gold-700 hover:text-gold-700 hover:bg-gold-700/10 focus-visible:text-gold-700 focus-visible:bg-gold-700/10 duration-300 ease-out ${
          hash === href.slice(1) ? "active-nav-link" : ""
        }`}
        href={href}
      >
        {name}
      </Link>
    </li>
  );
}
