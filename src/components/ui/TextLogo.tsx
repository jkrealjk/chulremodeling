type TextLogoProps = {
  className?: string;
};

export function TextLogo({ className }: TextLogoProps) {
  return (
    <span
      className={`inline-block font-bold tracking-tight text-2xl leading-none ${className}`}
    >
      티앤소재
    </span>
  );
}
