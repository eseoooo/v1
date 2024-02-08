"use client";
import Link from "next/link";
import { useEffect } from "react";

let menu;
export default function MobileNavLink({ name, href }) {
  useEffect(() => {
    menu = document.getElementById("menu");
  }, []);

  const handleMenuClose = () => {
    if (!menu) return;
    menu.hidePopover();
  };

  return (
    <li className="w-4/5" onClick={handleMenuClose}>
      <Link
        href={href}
        className="focused-link p-5 inline-flex tracking-widest uppercase border-l border-dark-800 font-medium w-full hover:text-gold-700 hover:border-gold-700 hover:bg-gold-700/10
        focus-visible:text-gold-700 focus-visible:bg-gold-700/10 duration-300 ease-out"
      >
        {name}
      </Link>
    </li>
  );
}
