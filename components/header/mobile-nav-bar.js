"use client";
import { navLinks } from "@/lib/const";
import MobileNavLink from "@/components/header/mobile-nav-link";
import ButtonSolid from "@/components/ui/button-solid";
import { useRef, useEffect, useState } from "react";

export default function MobileNavBar() {
  const [ariaHidden, setAriaHidden] = useState(true);
  const menuRef = useRef();

  useEffect(() => {
    const menuElement = menuRef.current;
    if (!menuElement) return;
    menuElement.addEventListener("toggle", handlerMenuToggle);
    return () => {
      menuElement.removeEventListener("toggle", handlerMenuToggle);
    };
  }, []);

  const handlerMenuToggle = (event) => {
    if (event.newState === "open") {
      setAriaHidden(false);
    } else {
      setAriaHidden(true);
    }
  };

  return (
    <nav
      className="focused-link md:hidden px-6 py-12 sm:p-12 flex flex-col max-h-dvh h-dvh w-5/6 sm:w-2/3 bg-bg-gray-800 left-full"
      popover="auto"
      role="menu"
      id="menu"
      ref={menuRef}
      aria-hidden={ariaHidden}
      tabIndex={ariaHidden ? -1 : 1}
    >
      <ol className="flex flex-col flex-1 justify-center items-center">
        {navLinks.map((link) => (
          <MobileNavLink key={link.name} name={link.name} href={link.href} />
        ))}
      </ol>
      {/* TODO: Add resume */}

      <div className="flex justify-end">
        <ButtonSolid
          type="button"
          popovertarget="menu"
          popovertargetaction="hide"
        >
          Close
        </ButtonSolid>
      </div>
    </nav>
  );
}
