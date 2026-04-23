import { Container } from "@/components/ui/Container";
import { FeatureList } from "@/components/ui/FeatureList";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { programHighlights } from "@/lib/constants";

export function ProgramsSection() {
  return (
    <section id="projects" className="bg-white py-10 sm:py-16 lg:py-20">
      <Container className="max-w-[1440px] space-y-10 sm:space-y-14 lg:px-16 lg:space-y-16">
        {programHighlights.map((program, index) => (
          <article
            key={program.title}
            className={`space-y-4 lg:grid lg:items-center lg:space-y-0 ${
              index === 1
                ? "lg:grid-cols-[minmax(0,599px)_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[599px_minmax(0,1fr)] xl:gap-10 min-[1440px]:mx-auto min-[1440px]:w-full min-[1440px]:max-w-[1312px] min-[1440px]:grid-cols-[599px_629px] min-[1440px]:gap-[81px] min-[1440px]:pr-[3px]"
                : "lg:grid-cols-2 lg:gap-12"
            }`}
          >
            <h2 className="text-[28px] font-semibold leading-[1.5] tracking-[0.03em] text-[#151515] sm:text-[32px] md:text-[40px] lg:hidden">
              {program.title}
            </h2>

            <div
              className={index % 2 === 0 ? "lg:order-2" : "lg:order-1"}
            >
              <PlaceholderImage
                src={
                  index === 0
                    ? "/images/corporate-training.jpg"
                    : index === 1
                    ? "/images/personal.jpg"
                    : "/images/capacity-development.jpg"
                }
                alt={`${program.title} section image`}
                label={undefined}
                className={`mx-auto w-full overflow-hidden rounded-[18px] border ${
                  index === 0
                    ? "aspect-[1.74/1] border-transparent md:h-[346px] md:w-[602px] md:max-w-[602px] md:rounded-tl-[56px] md:rounded-tr-[24px] md:rounded-br-[23px] md:rounded-bl-[12px]"
                    : index === 1
                      ? "aspect-[1.74/1] border-transparent lg:h-[378px] lg:w-[599px] lg:max-w-[599px] lg:rounded-tl-[33px] lg:rounded-tr-[8px] lg:rounded-br-[8px] lg:rounded-bl-[8px]"
                      : "aspect-[1.48/1] border-transparent lg:h-[405px] lg:w-[601px] lg:max-w-[601px] lg:rounded-tl-[40px] lg:rounded-tr-[8px] lg:rounded-br-[8px] lg:rounded-bl-[8px]"
                }`}
                overlay="light"
              />
            </div>

            <div
              className={`space-y-4 ${
                index % 2 === 0 ? "lg:order-1" : "lg:order-2"
              } ${index === 1 ? "min-w-0 lg:w-full lg:space-y-[21px] min-[1440px]:max-w-[629px]" : ""}`}
            >
              <h2
                className={`hidden text-[40px] font-semibold leading-[1.5] tracking-[0.03em] text-[#151515] lg:block ${
                  index === 1 ? "xl:whitespace-nowrap" : ""
                }`}
              >
                {program.title}
              </h2>
              <div className={index === 1 ? "w-full" : ""}>
                <p
                  className={`text-[14px] leading-6 font-normal tracking-[0] text-[#696969] sm:text-[16px] md:text-[18px] md:leading-[1.5] ${
                    index === 1 ? "w-full max-w-none" : "max-w-[500px]"
                  }`}
                >
                  {program.description}
                </p>
              </div>
              <div className={index === 1 ? "lg:pl-2" : ""}>
                <FeatureList items={program.items} />
              </div>
            </div>
          </article>
        ))}
      </Container>
    </section>
  );
}
