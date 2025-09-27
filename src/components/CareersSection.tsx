import type { ReactElement } from "react";
import CountUpNumber from "@/components/CountUpNumber";
import EmploymentDonut from "@/components/EmploymentDonut";

type PartnerLogo = {
  name: string;
  accent: string;
  Logo: (props: { className?: string }) => ReactElement;
};

const statistics = [
  {
    title: "Average starting salary",
    value: 84000,
    prefix: "$",
    suffix: "+",
    description: "Across the 2024 graduating class",
  },
  {
    title: "Employment within 6 months",
    value: 96,
    suffix: "%",
    description: "Hired by mission-driven partners globally",
  },
  {
    title: "Paid internships",
    value: 88,
    suffix: "%",
    description: "Complete real-world, funded field placements",
  },
];

const employmentSectors = [
  { label: "Geospatial Tech", value: 28, color: "#782F40" },
  { label: "Government & Policy", value: 22, color: "#CEB888" },
  { label: "Consulting", value: 18, color: "#9C5A4D" },
  { label: "NGO / Non-profit", value: 12, color: "#E5CDA1" },
  { label: "Graduate School", value: 20, color: "#B37A58" },
];

const partnerLogos: PartnerLogo[] = [
  {
    name: "NASA JPL",
    accent: "from-[#FEF6E7] via-[#F4E0B6] to-[#782F40]/20",
    Logo: ({ className = "h-full w-full" }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className={className}
        aria-hidden="true"
      >
        <rect width="64" height="64" rx="12" fill="#C42026" />
        <text
          x="50%"
          y="58%"
          textAnchor="middle"
          fontSize="24"
          fontWeight="700"
          fill="#fff"
          fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif"
        >
          JPL
        </text>
      </svg>
    ),
  },
  {
    name: "Esri",
    accent: "from-[#E0F4F1] via-[#B6E4D4] to-[#2E8B57]/20",
    Logo: ({ className = "h-full w-full" }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className={className}
        aria-hidden="true"
      >
        <circle cx="32" cy="32" r="30" fill="#2E8B57" />
        <path
          d="M44 24c-4-4-10-6-14-4s-6 6-8 11c-2 4-4 8-8 9"
          fill="none"
          stroke="#fff"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="26" cy="26" r="4" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "World Bank",
    accent: "from-[#EEF2FF] via-[#CBD5F5] to-[#1D4ED8]/20",
    Logo: ({ className = "h-full w-full" }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className={className}
        aria-hidden="true"
      >
        <circle cx="32" cy="32" r="30" fill="#1D4ED8" />
        <g stroke="#fff" strokeWidth="3" fill="none">
          <ellipse cx="32" cy="32" rx="18" ry="28" />
          <ellipse cx="32" cy="32" rx="28" ry="18" />
          <circle cx="32" cy="32" r="12" />
        </g>
      </svg>
    ),
  },
  {
    name: "NOAA",
    accent: "from-[#E8F5FF] via-[#B6D9FF] to-[#2563EB]/20",
    Logo: ({ className = "h-full w-full" }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className={className}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="noaaGradient" x1="0%" x2="0%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#0EA5E9" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="30" fill="url(#noaaGradient)" />
        <path
          d="M16 40c4-6 10-10 16-10s12 4 16 10"
          fill="none"
          stroke="#fff"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M20 24c3 2 7 4 12 4s9-2 12-4"
          fill="none"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "American Red Cross",
    accent: "from-[#FFEAEA] via-[#F9CACA] to-[#DC2626]/20",
    Logo: ({ className = "h-full w-full" }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className={className}
        aria-hidden="true"
      >
        <rect width="64" height="64" rx="12" fill="#fff" />
        <rect x="26" y="14" width="12" height="36" fill="#DC2626" />
        <rect x="14" y="26" width="36" height="12" fill="#DC2626" />
      </svg>
    ),
  },
  {
    name: "UN-Habitat",
    accent: "from-[#E6F6FF] via-[#B6E4FA] to-[#0EA5E9]/20",
    Logo: ({ className = "h-full w-full" }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className={className}
        aria-hidden="true"
      >
        <rect width="64" height="64" rx="12" fill="#0EA5E9" />
        <circle cx="32" cy="24" r="10" fill="#fff" />
        <path
          d="M16 48c4-10 10-16 16-16s12 6 16 16"
          fill="none"
          stroke="#fff"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function CareersSection() {
  return (
    <section
      id="careers"
      className="relative border-t border-[#E5D9C0] bg-[#fff9f1] py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold text-[#2F1B16] md:text-4xl">
            Career outcomes with altitude.
          </h2>
          <p className="mt-4 text-base text-[#4F3224]">
            Graduates unite climate intelligence, public health, and civic
            innovation to build resilient infrastructures. Recruiters value the
            blend of technical mastery and human-centered practice.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {statistics.map((stat) => (
            <div
              key={stat.title}
              className="rounded-3xl border border-[#E8DCC7] bg-white p-8 shadow-lg shadow-[#CEB888]/20"
            >
              <CountUpNumber
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                className="text-4xl font-semibold text-[#782F40]"
              />
              <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-[#B37A58]">
                {stat.title}
              </p>
              <p className="mt-4 text-sm text-[#4F3224]">{stat.description}</p>
            </div>
          ))}
          <div className="rounded-3xl border border-[#E8DCC7] bg-white p-8 shadow-lg shadow-[#CEB888]/15 md:col-span-2 xl:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#B37A58]">
              Partners
            </p>
            <p className="mt-3 text-sm text-[#4F3224]">
              Students ship solutions with industry, civic, and humanitarian
              leaders on day one.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {partnerLogos.map((partner) => (
                <div
                  key={partner.name}
                  className="group relative overflow-hidden rounded-2xl border border-[#E8DCC7] bg-[#fef9f2] p-4 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#CEB888]/30"
                >
                  <div
                    className={`pointer-events-none absolute -inset-[1px] bg-gradient-to-br opacity-0 transition group-hover:opacity-100 ${partner.accent}`}
                  />
                  <div className="relative flex flex-col items-center gap-3 text-center">
                    <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-white/40 bg-white/80 shadow-inner">
                      <partner.Logo className="h-10 w-10" />
                    </div>
                    <p className="text-sm font-semibold text-[#782F40]">
                      {partner.name}
                    </p>
                    <span className="text-xs uppercase tracking-wide text-[#B37A58]">
                      Strategic partner
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-[#E8DCC7] bg-white p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#B37A58]">
              Employment by sector
            </p>
            <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-center">
              <EmploymentDonut data={employmentSectors} />
              <ul className="flex-1 space-y-4 text-sm text-[#4F3224]">
                {employmentSectors.map((entry) => (
                  <li
                    key={entry.label}
                    className="flex items-center justify-between rounded-2xl border border-[#F1E6D5] bg-[#fff9f1] px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: entry.color }}
                        aria-hidden="true"
                      />
                      <span>{entry.label}</span>
                    </div>
                    <span className="font-semibold text-[#782F40]">
                      {entry.value}%
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rounded-3xl border border-[#E8DCC7] bg-white p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#B37A58]">
              Career pathways
            </p>
            <ul className="mt-6 space-y-4 text-sm text-[#4F3224]">
              <li className="rounded-2xl border border-[#F1E6D5] bg-[#fff9f1] p-4">
                <p className="font-semibold text-[#782F40]">
                  Smart City Strategist
                </p>
                <p className="mt-1 text-[#6C4C3A]">
                  Designs data-driven policy for mobility, housing, and
                  infrastructure.
                </p>
              </li>
              <li className="rounded-2xl border border-[#F1E6D5] bg-[#fff9f1] p-4">
                <p className="font-semibold text-[#782F40]">
                  Climate Intelligence Architect
                </p>
                <p className="mt-1 text-[#6C4C3A]">
                  Models compounding climate risks for global supply and finance
                  teams.
                </p>
              </li>
              <li className="rounded-2xl border border-[#F1E6D5] bg-[#fff9f1] p-4">
                <p className="font-semibold text-[#782F40]">
                  Health & Humanitarian Analyst
                </p>
                <p className="mt-1 text-[#6C4C3A]">
                  Builds early warning systems for disease, displacement, and
                  recovery.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
