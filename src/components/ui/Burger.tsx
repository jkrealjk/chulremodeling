import { cn } from "@/lib/utils";

type BurgerProps = {
  className?: string;
};

export default function Burger({ className }: BurgerProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-6 h-6", className)}
      aria-hidden="true"
    >
      <g clipPath="url(#clip0_105_1866)">
        <path
          d="M18 3.00098L18 21.001M12 3.00098L12 21.001M6 3.00098L6 12.001"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_105_1866">
          <rect
            fill="white"
            height="24"
            transform="translate(0 0.000976562)"
            width="24"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
