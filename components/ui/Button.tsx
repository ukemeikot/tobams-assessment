import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "light" | "learnMore";
  className?: string;
  endIcon?: React.ReactNode;
};

const variantClasses = {
  primary:
    "bg-plum-700 text-white hover:bg-plum-600 focus-visible:outline-plum-700",
  secondary:
    "border border-plum-700 bg-transparent text-plum-700 hover:bg-plum-700 hover:text-white focus-visible:outline-plum-700",
  accent:
    "bg-[#EF4353] text-white hover:bg-[#db3c4b] focus-visible:outline-[#EF4353]",
  light:
    "bg-white text-plum-900 hover:bg-blush-100 focus-visible:outline-white",
  learnMore:
    "bg-[#571244] text-white hover:bg-[#481039] focus-visible:outline-[#571244]",
};

function SlantedArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 17L17 7"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
      />
      <path
        d="M9 7H17V15"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  endIcon,
}: ButtonProps) {
  const resolvedEndIcon =
    endIcon ?? (variant === "learnMore" ? <SlantedArrowIcon /> : null);

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-[10px] rounded-[4px] px-4 py-2.5 text-[13px] font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variantClasses[variant]} ${className}`}
    >
      {children}
      {resolvedEndIcon}
    </Link>
  );
}
