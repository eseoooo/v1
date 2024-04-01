"use client";
import { navLinks } from "@/lib/const";
import MobileNavLink from "@/components/header/mobile-nav-link";
import ButtonSolid from "@/components/ui/button-solid";
import { useRef, useEffect, useState, useContext } from "react";
import { FeatureContext } from "@/lib/context/feature-context";

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

  const { contactFormIsEnabled } = useContext(FeatureContext);

  const filteredNavLinks = navLinks.filter((link) => {
    if (!contactFormIsEnabled) {
      return link.name.toLowerCase() !== "contact";
    }
    return link;
  });

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
        {filteredNavLinks.map((link) => (
          <MobileNavLink
            key={link.name}
            name={link.name}
            href={link.href}
            aria-hidden={ariaHidden}
            tabIndex={ariaHidden ? -1 : 1}
          />
        ))}
      </ol>

      <div className="flex justify-end">
        <ButtonSolid
          type="button"
          popovertarget="menu"
          popovertargetaction="hide"
          aria-hidden={ariaHidden}
          tabIndex={ariaHidden ? -1 : 1}
        >
          Close
        </ButtonSolid>
      </div>
    </nav>
  );
}
