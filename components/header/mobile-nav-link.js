"use client";
import Link from "next/link";
import { useEffect } from "react";

let menu;
export default function MobileNavLink({ name, href }) {
  useEffect(() => {
    menu = document.getElementById("menu");
  }, []);

  return (
    <li className="w-4/5" onClick={() => menu.hidePopover()}>
      <Link
        href={href}
        className="p-5 inline-flex tracking-widest uppercase border-l border-dark-800 font-medium w-full"
      >
        {name}
      </Link>
    </li>
  );
}
