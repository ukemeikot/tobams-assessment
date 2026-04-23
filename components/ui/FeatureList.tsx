type FeatureListProps = {
  items: string[];
  columns?: 1 | 2;
  dense?: boolean;
  variant?: "default" | "panel";
};

type LightningBulletIconProps = {
  color?: string;
  className?: string;
};

function LightningBulletIcon({
  color = "#571244",
  className = "h-4.5 w-4.5",
}: LightningBulletIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 12 12"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.78 0.75L2.85 5.6H5.18L4.22 11.25L8.98 5.71H6.69L6.78 0.75Z"
        fill={color}
      />
    </svg>
  );
}

export function FeatureList({
  items,
  columns = 1,
  dense = false,
  variant = "default",
}: FeatureListProps) {
  const listClassName =
    variant === "panel"
      ? `grid gap-2 ${columns === 2 ? "sm:grid-cols-2" : ""}`
      : `grid gap-x-5 ${dense ? "gap-y-2" : "gap-y-3"} ${
          columns === 2 ? "sm:grid-cols-2" : ""
        }`;

  return (
    <ul className={listClassName}>
      {items.map((item) => (
        <li
          key={item}
          className={
            variant === "panel"
              ? "flex min-h-10 items-center gap-2 rounded-[8px] bg-[#8F6182] px-2 py-1 text-[15px] leading-[1.5] font-normal tracking-[0] text-white sm:text-[16px]"
              : "flex items-start gap-3 text-[14px] leading-6 font-normal tracking-[0] text-[#696969] sm:text-[16px] md:text-[18px] md:leading-[1.5]"
          }
        >
          {variant === "panel" ? (
            <span aria-hidden="true" className="shrink-0">
              <LightningBulletIcon color="#FFFFFF" className="h-4 w-4" />
            </span>
          ) : (
            <span aria-hidden="true" className="mt-0.5 shrink-0">
              <LightningBulletIcon />
            </span>
          )}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
