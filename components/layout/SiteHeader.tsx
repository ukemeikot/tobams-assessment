"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { BrandMark } from "@/components/ui/BrandMark";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navigationLinks } from "@/lib/constants";

function ChevronDownIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 12 12"
      className="h-3 w-3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 4.5L6 7.5L9 4.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UserBadgeIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 12C13.933 12 15.5 10.433 15.5 8.5C15.5 6.567 13.933 5 12 5C10.067 5 8.5 6.567 8.5 8.5C8.5 10.433 10.067 12 12 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M5.5 18.5C6.96 16.57 9.274 15.5 12 15.5C14.726 15.5 17.04 16.57 18.5 18.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLabel, setActiveLabel] = useState("About");

  useEffect(() => {
    const syncActiveLabel = () => {
      const currentHash = window.location.hash || "#about";
      const matchingLink = navigationLinks.find((link) => link.href === currentHash);

      if (matchingLink) {
        setActiveLabel(matchingLink.label);
      }
    };

    syncActiveLabel();
    window.addEventListener("hashchange", syncActiveLabel);

    return () => window.removeEventListener("hashchange", syncActiveLabel);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md">
      <div className="mx-auto w-full max-w-[1440px] md:border-b md:border-[#ead4dc]">
        <div className="px-4 py-3 md:h-[104px] md:px-16 md:py-6">
          <div className="flex items-center justify-between gap-4 md:h-full">
            <Link
              href="/"
              aria-label="TOBAMS Group home"
              className="w-fit rounded-[6px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-700"
              onClick={() => {
                setIsMenuOpen(false);
                setActiveLabel("About");
              }}
            >
              <BrandMark />
            </Link>

            <button
              type="button"
              aria-label="Open navigation menu"
              aria-controls="mobile-navigation"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="flex h-8 w-8 items-center justify-center rounded-[4px] border border-[#d8bfd0] text-plum-900 transition hover:bg-blush-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-700 md:hidden"
            >
              <span className="space-y-1">
                <span className="block h-0.5 w-3 rounded-full bg-current" />
                <span className="block h-0.5 w-3 rounded-full bg-current" />
                <span className="block h-0.5 w-3 rounded-full bg-current" />
              </span>
            </button>
            <div className="hidden md:flex md:items-center md:gap-3">
              <button
                type="button"
                className="inline-flex h-12 items-center justify-center gap-3 rounded-[8px] border border-[#571244] bg-[#571244] px-4 py-2 text-[18px] leading-[1.5] font-semibold text-white transition hover:bg-[#481039] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#571244]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-[16px] bg-[#DDD0DA] text-[#571244]">
                  <UserBadgeIcon />
                </span>
                <span>Account</span>
                <ChevronDownIcon />
              </button>
              <Button
                href="#consultation"
                variant="accent"
                className="h-12 rounded-[8px] px-5 py-2 text-[18px] leading-[1.5] !text-white"
              >
                Take Assessment
              </Button>
            </div>
          </div>

          <div
            id="mobile-navigation"
            className={`${isMenuOpen ? "block" : "hidden"} mt-3 border-t border-[#ead4dc] pt-3 md:hidden`}
          >
            <nav aria-label="Mobile navigation">
              <ul className="space-y-2">
                {navigationLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setActiveLabel(link.label);
                      }}
                      className="flex items-center justify-between rounded-[6px] bg-blush-50 px-3 py-3 text-[13px] font-medium text-plum-900 transition hover:bg-blush-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-700"
                    >
                      <span>{link.label}</span>
                      {link.hasDropdown ? <ChevronDownIcon /> : null}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-3 flex flex-col gap-2">
                <button
                  type="button"
                  className="inline-flex h-12 items-center justify-center gap-3 rounded-[8px] border border-[#571244] bg-[#571244] px-4 py-2 text-[18px] leading-[1.5] font-semibold text-white transition hover:bg-[#481039] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#571244]"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-[16px] bg-[#DDD0DA] text-[#571244]">
                    <UserBadgeIcon />
                  </span>
                  <span>Account</span>
                  <ChevronDownIcon />
                </button>
                <Button
                  href="#consultation"
                  variant="accent"
                  className="h-12 w-full rounded-[8px] px-5 py-2 text-[18px] leading-[1.5] !text-white"
                >
                  Take Assessment
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className="hidden border-t border-[#ead4dc] md:block">
        <div className="mx-auto flex min-h-[69px] w-full max-w-[1440px] items-center px-16 py-5">
          <nav aria-label="Primary navigation" className="w-full">
            <ul className="flex w-full items-end justify-between gap-6 text-[18px] leading-[1.5] font-semibold tracking-[0] text-[#151515]">
              {navigationLinks.map((link) => {
                const isActive = link.label === activeLabel;

                return (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      onClick={() => setActiveLabel(link.label)}
                      className={`inline-flex items-center gap-1.5 border-b pb-1.5 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-700 ${
                        isActive
                          ? "!border-[#571244] !text-[#571244]"
                          : "border-transparent text-[#151515] hover:border-[#571244]/35 hover:text-[#571244]"
                      }`}
                    >
                      <span
                        className={isActive ? "!text-[#571244]" : "text-[#151515]"}
                      >
                        {link.label}
                      </span>
                      {link.hasDropdown ? <ChevronDownIcon /> : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
