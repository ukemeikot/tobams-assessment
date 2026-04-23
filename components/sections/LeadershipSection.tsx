import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FeatureList } from "@/components/ui/FeatureList";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { ceoHubBenefits, managementBenefits } from "@/lib/constants";

export function LeadershipSection() {
  return (
    <section className="bg-white py-6 sm:py-10">
      <Container className="space-y-12 sm:space-y-16">
        <article className="rounded-[12px] bg-plum-850 p-3 shadow-[0_18px_40px_rgba(28,8,20,0.16)] sm:p-5">
          <div className="space-y-4 lg:grid lg:grid-cols-[1.02fr_1.1fr] lg:items-center lg:gap-6 lg:space-y-0">
            <h2 className="px-2 text-[26px] font-medium leading-tight tracking-tight text-white sm:text-[30px] lg:hidden">
              Management Development Program
            </h2>
            <PlaceholderImage
              src="/images/placeholder-landscape.svg"
              alt="Placeholder image for the management development program"
              label="Management Program"
              className="aspect-[1.12/1] rounded-[8px] border border-white/12"
              overlay="none"
            />

            <div className="px-2 py-1 text-white sm:px-2 sm:py-2">
              <h2 className="hidden max-w-[420px] text-[28px] font-medium leading-tight tracking-tight sm:text-[40px] lg:block">
                Management Development Program
              </h2>
              <div className="space-y-4 text-[12px] leading-6 text-white/80 lg:mt-4 lg:text-[13px]">
                <p>
                  Tobams Group offers a comprehensive Management Development
                  Program designed to equip corporate organisations with the
                  high-performing leaders they need to thrive.
                </p>
                <p>
                  Our program includes workshops, seminars, coaching sessions,
                  online courses, and experiential learning opportunities
                  designed to improve leadership, strategic thinking,
                  communication, and other essential managerial competencies.
                </p>
              </div>
              <div className="mt-5">
                <FeatureList items={managementBenefits} variant="panel" />
              </div>
            </div>
          </div>
        </article>

        <article className="rounded-[12px] bg-[#f8dfe6] p-4 sm:p-8">
          <p className="text-[13px] italic text-plum-600">Learning With Our CEO:</p>
          <h2 className="mt-2 max-w-[320px] text-[28px] font-medium tracking-tight text-plum-700 sm:max-w-none sm:text-[30px]">
            Transformation Hub With Jite Newton
          </h2>
          <p className="mt-4 max-w-[980px] text-[12px] leading-6 text-ink-700 sm:text-[13px]">
            Transformation Hub with Jite Newton is a flagship webinar series
            curated by the CEO, Dr. Jite Newton. Designed to educate career
            trajectories and leadership capabilities, this exclusive event
            offers invaluable insights and strategies for personal and
            professional growth.
          </p>

          <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <PlaceholderImage
              src="/images/placeholder-innovation.svg"
              alt="Placeholder image for the transformation hub section"
              label="Transformation Hub"
              className="aspect-[1.08/0.78] rounded-[8px]"
              overlay="light"
            />

            <div className="space-y-5">
              <div className="grid gap-3 sm:grid-cols-2">
                {ceoHubBenefits.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-[6px] bg-white px-4 py-3 text-[11px] font-medium text-ink-700 shadow-[0_12px_24px_rgba(44,17,33,0.06)] sm:text-[12px]"
                  >
                    <span
                      aria-hidden="true"
                      className="inline-block h-2.5 w-2.5 rotate-45 rounded-[2px] bg-plum-700"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Button
                href="#consultation"
                variant="learnMore"
                className="h-12 w-fit gap-2 rounded-[4px] bg-[#571244] px-6 py-[10.5px] text-[18px] leading-[1.5] font-semibold tracking-[0] !text-white"
              >
                Learn More
              </Button>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}
