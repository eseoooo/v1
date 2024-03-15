"use client";
import NavLink from "@/components/header/nav-link";
import { navLinks } from "@/lib/const";
import { useContext } from "react";
import { FeatureContext } from "@/lib/context/feature-context";

export default function NavLinks() {
  const { contactFormIsEnabled } = useContext(FeatureContext);

  const filteredNavLinks = navLinks.filter((link) => {
    if (!contactFormIsEnabled) {
      return link.name.toLowerCase() !== "contact";
    }
    return link;
  });

  return (
    <ol className="hidden md:flex h-full justify-end items-center gap-x-2">
      {filteredNavLinks.map((link) => (
        <NavLink key={link.name} name={link.name} href={link.href} />
      ))}
    </ol>
  );
}
