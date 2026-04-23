import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-plum-950">
      <div className="absolute inset-0">
        <PlaceholderImage
          src="/images/hero-image.jpg"
          alt="Training and development hero background"
          overlay="dark"
          priority
          className="h-full w-full"
          imageClassName="object-cover"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_42%),linear-gradient(180deg,rgba(13,3,9,0.1),rgba(13,3,9,0.82))]"
      />

      <Container className="relative flex min-h-75 items-center justify-center py-10 sm:min-h-110 sm:py-16 md:min-h-145 md:py-20">
        <div className="mx-auto max-w-[320px] text-center sm:max-w-105 md:max-w-301.25">
          <span className="inline-flex h-11.25 items-center justify-center gap-2.5 rounded-[100px] bg-white/10 px-12 py-3 text-center text-[14px] leading-normal font-semibold tracking-normal text-white">
            What We Do
          </span>
          <h1 className="mt-4 text-[28px] font-bold leading-[1.3] tracking-normal text-white sm:mt-5 sm:text-[40px] md:mx-auto md:max-w-301.25 md:text-[56px]">
            Training and Development
          </h1>
          <p className="mx-auto mt-3 max-w-75 text-[12px] leading-5 font-medium tracking-normal text-white sm:mt-4 sm:max-w-95 sm:text-sm sm:leading-6 md:max-w-249 md:text-[18px] md:leading-normal md:font-semibold">
            Our comprehensive range of programs and resources is designed to
            enhance skills, broaden knowledge, and propel careers forward in
            today&apos;s ever-evolving landscape.
          </p>
          <div className="mt-5 flex justify-center">
            <Button
              href="#consultation"
              variant="primary"
              className="h-12 gap-2.5 rounded-sm bg-[#571244] px-6 py-3 text-[18px] leading-normal font-semibold tracking-normal text-center text-white! md:min-w-53.5"
            >
              Book a Consultation
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
