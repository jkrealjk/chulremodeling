import Link from "next/link";
import { Logo } from "@/components/ui";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="flex flex-col gap-2">
        {/* Left: brand */}
        <div className="space-y-2">
          <Link href="/" className="inline-flex items-center gap-2">
            <Logo className="h-6" />
          </Link>
          <p className="text-xs text-muted-foreground max-w-xs">
            간단한 소개 설명 텍스트를 여기에 넣으면 됩니다.
          </p>
        </div>

        {/* Middle: navigation */}
        <nav className="text-sm">
          <ul className="flex flex-wrap gap-4">
            <li>
              <Link href="#about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" className="hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right: social + copyright */}
        <div className="flex flex-col">
          <SocialLinks />
          <p>© {year} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
