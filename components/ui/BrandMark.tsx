import Image from "next/image";

type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  const width = compact ? 148 : 132;
  const height = compact ? 49 : 44;

  return (
    <Image
      src="/images/logo-tobams.png"
      alt="TOBAMS Group logo"
      width={width}
      height={height}
      priority
      style={{ height: "auto" }}
      className={compact ? "h-auto w-[148px]" : "h-auto w-[132px] sm:w-[142px]"}
    />
  );
}
