type TwitterIconProps = {
  className?: string;
};

export function TwitterIcon({ className }: TwitterIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23 2.999A10.94 10.94 0 0 1 20.24 4.2A4.48 4.48 0 0 0 22.4 1.8A9.06 9.06 0 0 1 19.42 2.95A4.48 4.48 0 0 0 11.4 7.8A12.73 12.73 0 0 1 1.67 2.1A4.48 4.48 0 0 0 2.88 8.09A4.42 4.42 0 0 1 .86 7.5V7.54A4.48 4.48 0 0 0 4.47 11.93A4.5 4.5 0 0 1 3 12A4.48 4.48 0 0 0 7.4 15.44A9 9 0 0 1 0 18.11A12.71 12.71 0 0 0 6.88 20C15.16 20 19.68 13 19.68 7.13C19.68 6.96 19.68 6.79 19.67 6.63A7.15 7.15 0 0 0 23 2.999Z" />
    </svg>
  );
}
