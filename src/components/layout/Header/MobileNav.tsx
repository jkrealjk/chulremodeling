"use client";

import { useState } from "react";
import { Burger, Close } from "@/components/ui";
import NavLinks from "./NavLinks";
import { cn } from "@/lib/utils";

type MobileNavProps = {
  className?: string;
};

export default function MobileNav({ className }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className={cn("md:hidden", className)}>
      <button onClick={handleClick} type="button" className="md:hidden">
        {isOpen ? (
          <Close className="w-6 h-6" />
        ) : (
          <Burger className="w-6 h-6" />
        )}
      </button>
      {isOpen && <NavLinks className={className} />}
    </nav>
  );
}
