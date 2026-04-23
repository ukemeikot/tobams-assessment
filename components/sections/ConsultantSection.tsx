import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { consultantFeatures } from "@/lib/constants";

export function ConsultantSection() {
  return (
    <section id="consultation" className="bg-white py-8 sm:py-12">
      <article className="w-full bg-[rgba(87,18,68,0.1)]">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-8 sm:py-10 lg:min-h-[642px] lg:px-16 lg:py-12">
          <Reveal className="space-y-[10px]">
            <div className="max-w-[1220px]">
              <h2 className="text-[30px] leading-[1.3] font-semibold tracking-[0] text-[#571244] sm:text-[34px] lg:text-[40px]">
                Training The Consultant
              </h2>
              <p className="mt-2 text-[15px] leading-[1.5] font-semibold tracking-[0] text-[#571244] sm:text-[16px] lg:text-[18px]">
                Maximise Your Potential as a Certified Trainer.
              </p>
              <p className="mt-4 text-[15px] leading-[1.5] font-normal tracking-[0] text-[#151515] sm:text-[16px] lg:text-[18px]">
                With the help of our Training Consultants program, take a
                revolutionary step toward becoming a distinguished certified
                training consultant. Learn from professionals in the field,
                immerse yourself in a thorough curriculum, and hone your
                training methods through interactive workshops. Participating in
                our program will enable you to gain expertise in diverse
                courses while also developing the abilities to mentor and
                encourage others in their career advancement.
              </p>
            </div>

            <div className="rounded-[6px] bg-[#571244] px-4 py-5 sm:px-6 sm:py-6">
              <div className="grid gap-x-8 gap-y-5 md:grid-cols-2">
                {consultantFeatures.map((feature) => (
                  <article key={feature.title} className="text-white">
                    <h3 className="text-[15px] leading-[1.5] font-bold tracking-[0] text-white sm:text-[16px] lg:text-[18px]">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-[1.5] font-normal tracking-[0] text-white sm:text-[16px] lg:text-[18px]">
                      {feature.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <Button
                href="#consultation"
                variant="learnMore"
                className="h-12 gap-2 rounded-[4px] bg-[#571244] px-6 py-[10.5px] text-[18px] leading-[1.5] font-semibold tracking-[0] !text-white"
              >
                Learn More
              </Button>
            </div>
          </Reveal>
        </div>
      </article>

      <Container className="max-w-[1440px] pt-6 sm:pt-8 lg:px-16 lg:pt-10">
        <Reveal
          delay={1}
          className="mx-auto flex w-full max-w-[1134px] flex-col gap-8 rounded-[8px] bg-[#571244] px-5 py-8 text-center text-white sm:px-8 lg:px-16 lg:py-8"
        >
          <p className="mx-auto max-w-[720px] text-center text-[16px] leading-[1.5] font-semibold tracking-[0.03em] text-white sm:text-[18px] lg:text-[20px]">
            Want to accelerate professional growth and development at your
            organisation? See how we can help.
          </p>
          <div className="flex justify-center">
            <Button
              href="#consultation"
              variant="light"
              className="h-12 w-[214px] whitespace-nowrap rounded-[4px] border border-[#571244] bg-white px-6 py-3 text-center text-[18px] leading-[1.2] font-semibold tracking-[0] !text-[#571244] hover:bg-white"
            >
              Book a Consultation
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
