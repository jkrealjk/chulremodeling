import Link from "next/link";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  XIcon,
  YoutubeIcon,
} from "@/components/ui/icons";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      <Link href="https://github.com" target="_blank" aria-label="GitHub">
        <GithubIcon className="w-5 h-5 hover:text-primary transition-colors" />
      </Link>
      <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
        <LinkedinIcon className="w-5 h-5 hover:text-primary transition-colors" />
      </Link>
      <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
        <TwitterIcon className="w-5 h-5 hover:text-primary transition-colors" />
      </Link>
      <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
        <InstagramIcon className="w-5 h-5 hover:text-primary transition-colors" />
      </Link>
      <Link href="https://youtube.com" target="_blank" aria-label="Youtube">
        <YoutubeIcon className="w-5 h-5 hover:text-primary transition-colors" />
      </Link>
      <Link href="https://x.com" target="_blank" aria-label="X">
        <XIcon className="w-5 h-5 hover:text-primary transition-colors" />
      </Link>
    </div>
  );
}
