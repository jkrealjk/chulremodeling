// import Link from "next/link";
// import { Logo } from "@/components";

// export default function Header() {
//   return (
//     <header className="h-20 border px-2">
//       <nav className="relative flex items-center justify-between h-full">
//         {/* 왼쪽메뉴 */}
//         <ul className="flex gap-4 border">
//           <li>
//             <Link href="/">Home</Link>
//           </li>
//           <li>
//             <Link href="/about">About</Link>
//           </li>
//           <li>
//             <Link href="/work">Work</Link>
//           </li>
//         </ul>

//         {/* 로고 */}
//         <Link href="/" className="absolute left-1/2 -translate-x-1/2">
//           <Logo />
//         </Link>

//         {/* 오른쪽 Contact 버튼 */}
//         <Link
//           href="/contact"
//           className="px-4 py-2 bg-primary text-primary-foreground rounded-full"
//         >
//           Contact
//         </Link>
//       </nav>
//     </header>
//   );
// }

import Link from "next/link";
import { Logo } from "@/components/ui";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="">
      <div className="flex items-center justify-between">
        {/* 로고 */}
        <Link href="/">
          <Logo className="h-12" />
        </Link>

        {/* 네비게이션 */}
        <div className="flex items-center gap-4">
          <DesktopNav />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
