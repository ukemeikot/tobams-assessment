import { Container } from "@/components/ui/Container";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonials } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <Container>
        <div className="text-center">
          <h2 className="text-[30px] font-semibold tracking-tight text-[#271c27] sm:text-[38px]">
            Testimonials
          </h2>
        </div>

        <div className="mt-8 overflow-x-auto pb-4">
          <div className="flex gap-4 sm:gap-5">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.author} {...testimonial} />
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-3 sm:justify-end">
          <button
            type="button"
            aria-label="Previous testimonials"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#efc7d4] text-plum-700 transition hover:bg-blush-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-700"
          >
            {"<"}
          </button>
          <button
            type="button"
            aria-label="Next testimonials"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#efc7d4] text-plum-700 transition hover:bg-blush-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-700"
          >
            {">"}
          </button>
        </div>
      </Container>
    </section>
  );
}
