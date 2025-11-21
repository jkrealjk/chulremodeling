type LinkedinIconProps = {
  className?: string;
};

export function LinkedinIcon({ className }: LinkedinIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6C1.12 6 0 4.88 0 3.5C0 2.12 1.12 1 2.5 1C3.87 1 4.98 2.12 4.98 3.5ZM0.22 7H4.78V23H0.22V7ZM8.42 7H12.82V9.02H12.88C13.48 7.88 14.98 6.68 17.19 6.68C21.52 6.68 23.43 9.45 23.43 14.09V23H18.87V14.98C18.87 12.73 18.82 10.05 15.88 10.05C12.88 10.05 12.46 12.26 12.46 14.82V23H7.9V7H8.42Z" />
    </svg>
  );
}
