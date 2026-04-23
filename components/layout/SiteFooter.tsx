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

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-[20px] w-[20px] text-[#151515]"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.94 8.5H3.56V20H6.94V8.5ZM5.25 3C4.17 3 3.3 3.87 3.3 4.95C3.3 6.03 4.17 6.9 5.25 6.9C6.33 6.9 7.2 6.03 7.2 4.95C7.2 3.87 6.33 3 5.25 3ZM20.7 12.72C20.7 9.65 19.05 8.23 16.86 8.23C15.09 8.23 14.3 9.2 13.86 9.88V8.5H10.63C10.67 9.41 10.63 20 10.63 20H13.86V13.58C13.86 13.24 13.89 12.89 13.98 12.65C14.25 11.96 14.86 11.24 15.9 11.24C17.26 11.24 17.81 12.28 17.81 13.79V20H21.04V13.41C21.04 13.05 21.01 12.86 20.7 12.72Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-[20px] w-[20px] text-[#151515]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-[20px] w-[20px] text-[#151515]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.5 4.5L19.5 19.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M19.5 4.5L4.5 19.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0 text-[#ef4353]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 7.5H19C19.5523 7.5 20 7.94772 20 8.5V15.5C20 16.0523 19.5523 16.5 19 16.5H5C4.44772 16.5 4 16.0523 4 15.5V8.5C4 7.94772 4.44772 7.5 5 7.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4.5 8L12 13L19.5 8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0 text-[#ef4353]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.8 4.8L10.2 7.2C10.6 7.6 10.68 8.22 10.39 8.71L9.31 10.54C9.09 10.91 9.13 11.38 9.41 11.71C10.14 12.57 11.43 13.86 12.29 14.59C12.62 14.87 13.09 14.91 13.46 14.69L15.29 13.61C15.78 13.32 16.4 13.4 16.8 13.8L19.2 16.2C19.79 16.79 19.82 17.75 19.15 18.24C18.04 19.06 16.74 19.5 15.39 19.5C8.83 19.5 4.5 15.17 4.5 8.61C4.5 7.26 4.94 5.96 5.76 4.85C6.25 4.18 7.21 4.21 7.8 4.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FooterLinkColumn({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h3 className="text-[16px] leading-[1.5] font-semibold tracking-[0] text-white">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5 text-[16px] leading-[1.5] font-normal tracking-[0.03em] text-[#F8F8F8]">
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
      <section className="bg-plum-900">
        <Container className="flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between md:py-6">
          <div>
            <p className="text-[15px] leading-[1.5] font-normal tracking-[0] text-white sm:text-[16px] md:text-[18px]">
              Ready to be a part of something extraordinary?
            </p>
            <h2 className="mt-1 max-w-[260px] text-[26px] leading-[1.3] font-semibold tracking-[0] text-white md:max-w-none lg:text-[32px]">
              Let&apos;s work together to create a difference
            </h2>
          </div>
          <Button
            href="#consultation"
            variant="primary"
            className="h-12 w-[151px] rounded-[4px] bg-[#571244] px-6 py-3 text-center text-[18px] leading-[1.2] font-semibold tracking-[0] !text-white hover:bg-[#481039]"
          >
            Get In Touch
          </Button>
        </Container>
      </section>

      <Container className="py-8 sm:py-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_2fr] lg:gap-10">
          <div className="space-y-6">
            <BrandMark compact />
            <p className="max-w-sm text-[16px] leading-[1.5] font-normal tracking-[0.03em] text-[#F8F8F8]">
              Tobams Group is an innovative consultancy firm reshaping the
              future of tech talent development in Africa through learning,
              advisory, and skills development with a global perspective.
            </p>

            <div className="flex gap-3">
              {[
                { label: "LinkedIn", icon: <LinkedInIcon /> },
                { label: "Instagram", icon: <InstagramIcon /> },
                { label: "X", icon: <XIcon /> },
              ].map((item) => (
                <Link
                  key={item.label}
                  href="/"
                  aria-label={`Visit our ${item.label} page`}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-plum-950 transition hover:bg-[#f5e6ee] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {item.icon}
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

        <div className="mt-8">
          <div className="mx-auto flex w-full max-w-[1312px] flex-col gap-6 rounded-[8px] bg-[rgba(255,255,255,0.06)] p-6 lg:min-h-[181px] lg:flex-row lg:items-start lg:justify-between lg:gap-6">
            <div className="flex-1">
              <h3 className="text-[14px] leading-[1.4] font-semibold tracking-[0] text-white">
                Registered Offices
              </h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2 lg:gap-6">
                {officeLocations.map((office, index) => (
                  <div
                    key={office.country}
                    className={
                      index === 0
                        ? "lg:border-r lg:border-white/10 lg:pr-6"
                        : ""
                    }
                  >
                    <p className="text-[12px] leading-[1.4] font-semibold tracking-[0] text-[#ef4353]">
                      {office.country}
                    </p>
                    <p className="mt-2 whitespace-pre-line text-[12px] leading-[1.5] font-normal tracking-[0] text-white/78">
                      {office.address}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-[300px] lg:border-l lg:border-white/10 lg:pl-6">
              <h3 className="text-[14px] leading-[1.4] font-semibold tracking-[0] text-white">
                Contact Information
              </h3>
              <div className="mt-4 space-y-3 text-[12px] leading-[1.5] font-normal tracking-[0] text-white/78">
                <p className="flex items-center gap-2.5">
                  <MailIcon />
                  <span>theteam@tobamsgroup.com</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <PhoneIcon />
                  <span>+44788600748</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-center text-[12px] leading-[1.5] font-normal tracking-[0] text-white/52 md:flex-row md:items-center md:justify-between md:text-left">
          <p>Copyright © Tobams Group, 2024. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6 md:justify-end">
            {footerNoteLinks.map((item) => (
              <Link
                key={item}
                href="/"
                className="underline underline-offset-2 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
