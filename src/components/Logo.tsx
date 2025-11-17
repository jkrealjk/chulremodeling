import Image from "next/image";
import logo from "@/assets/logo.svg"; // 문자열(경로)로 들어옴

export default function Logo() {
  return <Image src={logo} alt="Logo" width={120} height={40} preload={true} />;
}
