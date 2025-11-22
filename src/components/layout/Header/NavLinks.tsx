import Link from "next/link";
import { cn } from "@/lib/utils";

export const navLinks = [
  { href: "#hero", label: "홈" },
  { href: "#about", label: "제품소개" },
  { href: "#projects", label: "금속정보" },
  { href: "#contact", label: "CONTACT" },
] as const;

type NavLinksProps = {
  className?: string;
};

export default function NavLinks({ className }: NavLinksProps) {
  return (
    <ul className={cn("flex items-center gap-4 text-white", className)}>
      {navLinks.map((link) => (
        <li key={link.href}>
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
}
