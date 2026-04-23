import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal } from "@/components/ui/Reveal";
import { learningManagementCourses } from "@/lib/constants";

export function LearningManagementSection() {
  return (
    <section id="about" className="bg-[rgba(87,18,68,0.10)]">
      <div className="h-4 w-full bg-white sm:h-5" aria-hidden="true" />
      <div className="py-12 md:px-16 md:py-12">
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-8 px-4 sm:px-6 md:min-h-[664px] md:grid-cols-[0.92fr_1.08fr] md:gap-12 md:px-0">
          <Reveal delay={1} className="flex justify-center md:justify-start">
            <PlaceholderImage
              src="/images/learning-management.jpg"
              alt="Learning management system section image"
              className="aspect-square w-full max-w-[240px] rounded-full sm:max-w-[320px] lg:max-w-[400px]"
              overlay="none"
            />
          </Reveal>

          <Reveal
            delay={2}
            className="mx-auto w-full max-w-[675px] text-center md:mx-0 md:max-w-none md:text-left"
          >
            <h2 className="mx-auto max-w-[675px] text-[24px] font-semibold leading-[1.5] tracking-[0.03em] text-[#571244] sm:text-[30px] md:mx-0 md:text-[40px]">
              Learning Management System
            </h2>
            <div className="mt-4 flex flex-col gap-5 rounded-lg bg-[rgba(87,18,68,0.10)] p-6 text-left sm:mt-5">
              <p className="text-[14px] leading-6 font-normal tracking-[0] text-[#151515] sm:text-[16px] md:text-[18px] md:leading-[1.5]">
                TG Academy is a hub of knowledge and skill-building resources
                designed to empower tech talents on their learning journey. From
                technical courses covering the latest programming languages and
                development frameworks to soft skills training in leadership,
                effective communication, and project management, TG Academy
                offers a wide range of courses to cater to diverse learning
                needs.
              </p>
              <p className="text-[14px] font-bold leading-[1.5] tracking-[0] text-[#571244] sm:text-[16px] md:text-[18px]">
                Some of our courses include:
              </p>
              <ul className="grid gap-x-4 gap-y-2 text-[14px] leading-6 font-normal tracking-[0] text-[#151515] sm:grid-cols-2 sm:text-[15px] md:text-[16px] md:leading-[1.5] xl:grid-cols-3">
                {learningManagementCourses.map((course) => (
                  <li key={course} className="flex items-start gap-2 whitespace-nowrap">
                    <span
                      aria-hidden="true"
                      className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#151515]"
                    />
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 flex justify-center sm:mt-5 md:justify-start">
              <Button
                href="#consultation"
                variant="learnMore"
                className="h-12 gap-2 rounded-sm bg-[#571244] px-6 py-[10.5px] text-[18px] leading-[1.5] font-semibold tracking-[0] !text-white"
              >
                Learn More
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
