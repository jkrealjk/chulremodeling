"use client";

import { useState } from "react";
import { Burger, Close } from "@/components/ui";
import NavLinks from "./NavLinks";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="md:hidden">
      <button onClick={handleClick} type="button" className="md:hidden">
        {isOpen ? (
          <Close className="w-6 h-6" />
        ) : (
          <Burger className="w-6 h-6" />
        )}
      </button>
      {isOpen && <NavLinks />}
    </nav>
  );
}
