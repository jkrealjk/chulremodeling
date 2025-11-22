import NavLinks from "./NavLinks";

type DesktopNavProps = {
  className?: string;
};

export default function DesktopNav({ className }: DesktopNavProps) {
  return (
    <nav className="hidden md:block">
      <NavLinks className={className} />
    </nav>
  );
}
