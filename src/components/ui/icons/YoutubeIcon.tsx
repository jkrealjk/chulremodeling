// components/ui/icons/YoutubeIcon.tsx
type YoutubeIconProps = {
  className?: string;
};

export function YoutubeIcon({ className }: YoutubeIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M21.5 8.3C21.32 7.6 20.77 7.04 20.07 6.86C18.88 6.56 15.5 6.5 12 6.5C8.5 6.5 5.12 6.56 3.93 6.86C3.23 7.04 2.68 7.6 2.5 8.3C2.19 9.5 2.12 11 2.12 12C2.12 13 2.19 14.5 2.5 15.7C2.68 16.4 3.23 16.96 3.93 17.14C5.12 17.44 8.5 17.5 12 17.5C15.5 17.5 18.88 17.44 20.07 17.14C20.77 16.96 21.32 16.4 21.5 15.7C21.81 14.5 21.88 13 21.88 12C21.88 11 21.81 9.5 21.5 8.3Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M10.2 14.4L14 12L10.2 9.6V14.4Z" fill="currentColor" />
    </svg>
  );
}
