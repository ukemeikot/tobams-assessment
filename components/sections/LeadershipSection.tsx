import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FeatureList } from "@/components/ui/FeatureList";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { ceoHubBenefits, managementBenefits } from "@/lib/constants";

export function LeadershipSection() {
  return (
    <section className="bg-white py-6 sm:py-10">
      <Container className="max-w-[1440px] space-y-12 lg:px-16 sm:space-y-16">
        <article className="mx-auto w-full max-w-[1312px] rounded-[20px] bg-[#2C0922] p-5 sm:p-8 lg:min-h-[719px] lg:p-10">
          <div className="space-y-4 lg:grid lg:min-h-[639px] lg:grid-cols-[592px_minmax(0,1fr)] lg:items-stretch lg:gap-10 lg:space-y-0">
            <h2 className="px-2 text-[26px] font-semibold leading-[1.5] tracking-[0.03em] text-white sm:text-[30px] lg:hidden">
              Management Development Program
            </h2>
            <PlaceholderImage
              src="/images/management-development.jpg"
              alt="Team members collaborating in the management development program"
              className="aspect-[0.926/1] rounded-[8px] border border-white/12 lg:h-[639px] lg:w-[592px] lg:max-w-[592px]"
              overlay="none"
            />

            <div className="min-w-0 px-2 py-1 text-white sm:px-2 sm:py-2">
              <h2 className="hidden max-w-[560px] text-[28px] font-semibold leading-[1.5] tracking-[0.03em] text-white sm:text-[32px] lg:block lg:text-[40px]">
                Management Development Program
              </h2>
              <div className="space-y-4 text-[15px] leading-[1.5] font-normal tracking-[0] text-white sm:text-[16px] lg:mt-4 lg:text-[18px]">
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

        <article className="mx-auto w-full max-w-[1312px] rounded-[16px] bg-[rgba(239,67,83,0.2)] p-5 sm:p-8 lg:min-h-[652px] lg:p-10">
          <p className="text-[16px] leading-[1.3] font-semibold italic tracking-[0] text-[#1671D9] sm:text-[18px] lg:text-[20px]">
            Learning With Our CEO:
          </p>
          <h2 className="mt-2 max-w-[320px] text-[28px] leading-[1.3] font-semibold italic tracking-[0] text-[#571244] sm:max-w-none sm:text-[30px] lg:text-[32px]">
            Transformation Hub With Jite Newton
          </h2>
          <p className="mt-4 max-w-[980px] text-[15px] leading-[1.5] font-normal tracking-[0] text-[#151515] sm:text-[16px] lg:text-[18px]">
            Transformation Hub with Jite Newton is a flagship webinar series
            curated by the CEO, Dr. Jite Newton. Designed to educate career
            trajectories and leadership capabilities, this exclusive event
            offers invaluable insights and strategies for personal and
            professional growth.
          </p>

          <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 lg:mx-auto lg:min-h-[340px] lg:max-w-[1232px] lg:grid-cols-[560px_minmax(0,1fr)] lg:items-start lg:gap-8">
            <PlaceholderImage
              src="/images/learning-ceo.jpg"
              alt="Participant engaging with digital visuals in the CEO learning section"
              className="aspect-[1.647/1] rounded-[8px] lg:h-[340px] lg:w-[560px] lg:max-w-[560px]"
              overlay="light"
            />

            <div className="space-y-6 rounded-[8px] bg-white/30 px-5 py-8 lg:min-h-[340px] lg:w-full lg:max-w-[640px]">
              <div className="grid gap-y-3 sm:grid-cols-2 sm:gap-x-3 lg:grid-cols-2 lg:gap-x-4 min-[1440px]:grid-cols-[repeat(2,288px)] min-[1440px]:justify-between min-[1440px]:gap-x-6">
                {ceoHubBenefits.map((item) => (
                  <div
                    key={item}
                    className="flex min-h-[60px] w-full min-w-0 items-center gap-2 rounded-[12px] bg-white p-4 text-[13px] leading-[1.5] font-normal tracking-[0] text-[#151515] sm:text-[14px] lg:text-[14px] min-[1440px]:w-[288px]"
                  >
                    <span
                      aria-hidden="true"
                      className="shrink-0"
                    >
                      <svg
                        viewBox="0 0 12 12"
                        className="h-3 w-3"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.78 0.75L2.85 5.6H5.18L4.22 11.25L8.98 5.71H6.69L6.78 0.75Z"
                          fill="#571244"
                        />
                      </svg>
                    </span>
                    <span className="block whitespace-nowrap">{item}</span>
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
