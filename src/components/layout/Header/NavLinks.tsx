import Link from "next/link";

export const navLinks = [
  { href: "#hero", label: "홈" },
  { href: "#about", label: "제품소개" },
  { href: "#projects", label: "금속정보" },
  { href: "#contact", label: "Contact" },
] as const;

export default function NavLinks() {
  return (
    <ul className="flex items-center gap-4">
      {navLinks.map((link) => (
        <li key={link.href}>
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
}
