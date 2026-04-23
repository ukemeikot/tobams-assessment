import Image from "next/image";

type PlaceholderImageProps = {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  overlay?: "dark" | "light" | "none";
};

const overlayClassNames = {
  dark: "bg-[linear-gradient(180deg,rgba(24,7,18,0.18),rgba(24,7,18,0.72))]",
  light:
    "bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(113,36,81,0.12))]",
  none: "",
};

export function PlaceholderImage({
  src,
  alt,
  label,
  className = "",
  imageClassName = "",
  priority = false,
  overlay = "light",
}: PlaceholderImageProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        loading={priority ? undefined : "lazy"}
        sizes="(max-width: 768px) 100vw, 50vw"
        className={`object-cover ${imageClassName}`}
      />
      {overlay !== "none" ? (
        <div
          aria-hidden="true"
          className={`absolute inset-0 ${overlayClassNames[overlay]}`}
        />
      ) : null}
      {label ? (
        <span className="absolute bottom-4 left-4 rounded-full bg-white/78 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-plum-700 backdrop-blur-sm">
          {label}
        </span>
      ) : null}
    </div>
  );
}
