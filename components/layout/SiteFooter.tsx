import Link from "next/link";

import { BrandMark } from "@/components/ui/BrandMark";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  companyLinks,
  footerNoteLinks,
  officeLocations,
  solutionLinks,
  whatWeDoLinks,
} from "@/lib/constants";

function FooterLinkColumn({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-[13px] text-white/68">
        {items.map((item) => (
          <li key={item}>
            <Link
              href="/"
              className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-plum-950 text-white">
      <section className="border-t-4 border-[#2777c9] bg-plum-900">
        <Container className="flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between md:py-6">
          <div>
            <p className="text-[11px] text-white/70 md:text-sm">
              Ready to be a part of something extraordinary?
            </p>
            <h2 className="mt-1 max-w-[260px] text-[24px] font-medium tracking-tight text-white md:max-w-none">
              Let&apos;s work together to create a difference
            </h2>
          </div>
          <Button
            href="#consultation"
            variant="primary"
            className="w-fit bg-plum-600 px-5"
          >
            Get In Touch
          </Button>
        </Container>
      </section>

      <Container className="py-8 sm:py-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_2fr] lg:gap-10">
          <div className="space-y-6">
            <BrandMark compact />
            <p className="max-w-sm text-[13px] leading-6 text-white/68">
              Tobams Group is an innovative consultancy firm reshaping the
              future of tech talent development in Africa through learning,
              advisory, and skills development with a global perspective.
            </p>

            <div className="flex gap-3">
              {["in", "ig", "x"].map((icon) => (
                <Link
                  key={icon}
                  href="/"
                  aria-label={`Visit our ${icon} page`}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-xs uppercase text-white transition hover:border-white hover:bg-white hover:text-plum-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <FooterLinkColumn title="What We Do" items={whatWeDoLinks} />
            <FooterLinkColumn title="Company" items={companyLinks} />
            <FooterLinkColumn title="Solution" items={solutionLinks} />
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_2fr]">
          <div className="order-1 rounded-[6px] border border-white/10 bg-white/4 p-5 lg:order-2">
            <h3 className="text-sm font-semibold text-white">
              Contact Information
            </h3>
            <div className="mt-4 space-y-3 text-[13px] text-white/72">
              <p>theteam@tobamsgroup.com</p>
              <p>+447869690748</p>
            </div>
          </div>

          <div className="order-2 rounded-[6px] border border-white/10 bg-white/4 p-5 lg:order-1">
            <h3 className="text-sm font-semibold text-white">
              Registered Offices
            </h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {officeLocations.map((office) => (
                <div key={office.country}>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-rose-500">
                    {office.country}
                  </p>
                  <p className="mt-2 whitespace-pre-line text-[13px] leading-6 text-white/72">
                    {office.address}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 border-t border-white/10 pt-5 text-center text-[12px] text-white/48 md:flex-row md:justify-between md:text-left">
          <div className="flex flex-wrap justify-center gap-4">
            {footerNoteLinks.map((item) => (
              <Link
                key={item}
                href="/"
                className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {item}
              </Link>
            ))}
          </div>
          <p>Copyright (c) Tobams Group, 2024. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
