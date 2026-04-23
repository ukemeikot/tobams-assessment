import Image from "next/image";

type TestimonialCardProps = {
  author: string;
  role: string;
  quote: string;
  avatarUrl: string;
};

export function TestimonialCard({
  author,
  role,
  quote,
  avatarUrl,
}: TestimonialCardProps) {
  return (
    <article className="min-w-[320px] max-w-[424px] rounded-[20px] border border-[#f5f1f3] border-l-[2px] border-l-[#ff4c5b] bg-white px-5 py-4 sm:min-w-[380px] sm:px-6 sm:py-5">
      <div className="flex items-start gap-4">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[#f4c546]">
          <Image
            src={avatarUrl}
            alt={`${author} profile photo`}
            fill
            loading="lazy"
            sizes="48px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-[16px] leading-[1.5] font-semibold tracking-[0] text-[#151515]">
            {author}
          </h3>
          <p className="mt-1 whitespace-nowrap text-[12px] leading-[1.35] font-normal tracking-[0] text-[#7d7d7d] sm:text-[14px]">
            {role}
          </p>
        </div>
      </div>
      <p className="mt-6 text-[16px] leading-[1.5] font-normal tracking-[0] text-[#151515] sm:text-[18px]">
        {quote}
      </p>
    </article>
  );
}
