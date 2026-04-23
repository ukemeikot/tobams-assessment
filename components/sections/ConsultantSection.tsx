import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { consultantFeatures } from "@/lib/constants";

export function ConsultantSection() {
  return (
    <section id="consultation" className="bg-white py-8 sm:py-12">
      <Container className="space-y-10">
        <article className="rounded-[10px] bg-blush-100 px-4 py-6 sm:px-8 sm:py-9">
          <div className="max-w-[980px]">
            <h2 className="text-[30px] font-medium tracking-tight text-plum-700 sm:text-[34px]">
              Training The Consultant
            </h2>
            <p className="mt-2 text-[11px] font-medium text-ink-700 sm:text-[12px]">
              Maximise Your Potential as a Certified Trainer.
            </p>
            <p className="mt-4 text-[12px] leading-6 text-ink-700 sm:text-[13px]">
              With the help of our Training Consultants programme, take a
              revolutionary step toward becoming a distinguished certified
              training consultant. Learn from professionals in the field,
              immerse yourself in a thorough curriculum, and hone your training
              methods through interactive workshops.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:mt-7 sm:gap-4 md:grid-cols-2">
            {consultantFeatures.map((feature) => (
              <article
                key={feature.title}
                className="rounded-[6px] bg-plum-700 px-4 py-4 text-white"
              >
                <h3 className="text-[13px] font-semibold">{feature.title}</h3>
                <p className="mt-2 text-[12px] leading-6 text-white/84">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-4">
            <Button
              href="#consultation"
              variant="learnMore"
              className="h-12 gap-2 rounded-[4px] bg-[#571244] px-6 py-[10.5px] text-[18px] leading-[1.5] font-semibold tracking-[0] !text-white"
            >
              Learn More
            </Button>
          </div>
        </article>

        <div className="mx-auto max-w-[860px] rounded-[4px] bg-plum-700 px-5 py-7 text-center text-white shadow-[0_18px_36px_rgba(39,12,28,0.16)] sm:px-6 sm:py-8">
          <p className="mx-auto max-w-[280px] text-[14px] font-medium leading-6 text-white/82 sm:max-w-none sm:text-[13px]">
            Don&apos;t just dream it, let&apos;s build it. Click now and start
            your project with Tobams Group. Your journey to digital excellence
            begins here.
          </p>
          <div className="mt-5 flex justify-center">
            <Button href="#consultation" variant="light">
              Book a Consultation
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
