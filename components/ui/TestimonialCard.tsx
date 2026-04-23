type TestimonialCardProps = {
  author: string;
  role: string;
  quote: string;
};

export function TestimonialCard({
  author,
  role,
  quote,
}: TestimonialCardProps) {
  return (
    <article className="min-w-[280px] max-w-[320px] rounded-2xl border border-[#f1d2dc] bg-white p-4 shadow-[0_20px_35px_rgba(31,12,24,0.06)] sm:min-w-[260px] sm:max-w-[340px] sm:p-5">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f8c983] text-xs font-bold text-plum-900">
          {author
            .split(" ")
            .map((part) => part[0])
            .join("")
            .slice(0, 2)}
        </div>
        <div>
          <h3 className="text-sm font-semibold text-plum-900">{author}</h3>
          <p className="mt-0.5 text-[11px] text-ink-500">{role}</p>
        </div>
      </div>
      <p className="mt-4 text-[12px] leading-6 text-ink-700 sm:text-[13px]">
        {quote}
      </p>
    </article>
  );
}
