import CountUpNumber from "@/components/CountUpNumber";
import EmploymentDonut from "@/components/EmploymentDonut";

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

const partnerLogos = [
  "NASA JPL",
  "Esri",
  "World Bank",
  "NOAA",
  "Red Cross",
  "UN Habitat",
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
          <div className="rounded-3xl border border-[#E8DCC7] bg-white p-8 shadow-lg shadow-[#CEB888]/15 md:col-span-2 xl:col-span-1">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#B37A58]">
              Partners
            </p>
            <p className="mt-3 text-sm text-[#4F3224]">
              Students ship solutions with industry, civic, and humanitarian
              leaders on day one.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {partnerLogos.map((logo) => (
                <div
                  key={logo}
                  className="flex h-16 items-center justify-center rounded-2xl border border-[#E8DCC7] bg-[#fef9f2] text-center text-sm font-semibold text-[#782F40]"
                >
                  {logo}
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
                <p className="font-semibold text-[#782F40]">Smart City Strategist</p>
                <p className="mt-1 text-[#6C4C3A]">
                  Designs data-driven policy for mobility, housing, and infrastructure.
                </p>
              </li>
              <li className="rounded-2xl border border-[#F1E6D5] bg-[#fff9f1] p-4">
                <p className="font-semibold text-[#782F40]">Climate Intelligence Architect</p>
                <p className="mt-1 text-[#6C4C3A]">
                  Models compounding climate risks for global supply and finance teams.
                </p>
              </li>
              <li className="rounded-2xl border border-[#F1E6D5] bg-[#fff9f1] p-4">
                <p className="font-semibold text-[#782F40]">Health & Humanitarian Analyst</p>
                <p className="mt-1 text-[#6C4C3A]">
                  Builds early warning systems for disease, displacement, and recovery.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
