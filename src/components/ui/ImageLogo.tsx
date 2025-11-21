import Image from "next/image";
import logo from "@/assets/logo.svg";

type LogoProps = {
  className?: string;
};

export default function ImageLogo({ className }: LogoProps) {
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
