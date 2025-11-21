import Image from "next/image";
import logo from "@/assets/logo.svg"; // 문자열(경로)로 들어옴

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Image
      src={logo}
      alt="Logo"
      width={120}
      height={40}
      preload={true}
      className={className}
    />
  );
}
