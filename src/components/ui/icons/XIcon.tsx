// components/ui/icons/XIcon.tsx  (새 X 로고)
type XIconProps = {
  className?: string;
};

export function XIcon({ className }: XIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M5 4L10.8 13.1L5.3 20H7.4L11.8 14.4L15 20H19L13.1 10.7L18.3 4H16.2L12.2 9.4L9.3 4H5Z"
        fill="currentColor"
      />
    </svg>
  );
}
