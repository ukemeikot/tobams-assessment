"use client";

import { useRef } from "react";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonials } from "@/lib/constants";

export function TestimonialsSection() {
  const railRef = useRef<HTMLDivElement | null>(null);

  function scrollTestimonials(direction: "prev" | "next") {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    const scrollAmount = Math.max(rail.clientWidth * 0.78, 320);

    rail.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  }

  return (
    <section className="w-full border-b border-[rgba(196,196,196,0.3)] bg-white py-10 sm:py-12 lg:py-16">
      <Container className="max-w-[1440px] lg:px-16">
        <Reveal className="text-center">
          <h2 className="text-[30px] leading-[1.3] font-bold tracking-[0] text-[#151515] sm:text-[34px] lg:text-[40px]">
            Testimonials
          </h2>
        </Reveal>

        <Reveal delay={1} className="mt-8">
          <div
            ref={railRef}
            className="overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="flex gap-4 sm:gap-5">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.author} {...testimonial} />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={2} className="mt-4 flex justify-center gap-3 sm:justify-end">
          <button
            type="button"
            aria-label="Previous testimonials"
            onClick={() => scrollTestimonials("prev")}
            className="flex h-12 w-12 items-center justify-center rounded-[6px] bg-[#fde7ed] text-[#ef4353] transition hover:bg-[#f9d7e1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ef4353]"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-7 w-7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5 5L7.5 12L14.5 19"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next testimonials"
            onClick={() => scrollTestimonials("next")}
            className="flex h-12 w-12 items-center justify-center rounded-[6px] bg-[#fde7ed] text-[#ef4353] transition hover:bg-[#f9d7e1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ef4353]"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-7 w-7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 5L16.5 12L9.5 19"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Reveal>
      </Container>
    </section>
  );
}
