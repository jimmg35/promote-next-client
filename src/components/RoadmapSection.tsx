import Link from "next/link";

const roadmapSteps = [
  {
    title: "Core Foundations",
    subtitle: "Year 1",
    description:
      "Spatial thinking, data storytelling, and design sprints build the launchpad.",
  },
  {
    title: "Technical Modules",
    subtitle: "Year 2",
    description:
      "Dive into UAV flight school, Python for GeoAI, and advanced GIS lab studios.",
  },
  {
    title: "Application Studios",
    subtitle: "Year 3",
    description:
      "Partner with cities, NGOs, and health orgs on live design challenges.",
  },
  {
    title: "Internship + Research",
    subtitle: "Summer",
    description:
      "Paid placements map satellite, climate, and epidemiology missions.",
  },
  {
    title: "Career Launch",
    subtitle: "Year 4",
    description:
      "Capstone plus micro-credentials signal tactical readiness to employers.",
  },
];

const badges = [
  { label: "FAA Part 107 UAV Pilot", sub: "Flight Certified" },
  { label: "Esri Technical Certification", sub: "ArcGIS Pro and Enterprise" },
  { label: "Python Data Science", sub: "NumPy, GeoPandas, ML" },
];

export default function RoadmapSection() {
  return (
    <section
      id="roadmap"
      className="relative border-t border-[#E5D9C0] bg-white py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold text-[#2F1B16] md:text-4xl">
            Courses to careers roadmap.
          </h2>
          <p className="mt-4 text-base text-[#4F3224]">
            Build momentum each semester with stacked credentials, fieldwork, and industry proof points that translate directly into roles.
          </p>
        </div>

        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto]">
          <div className="space-y-6">
            {roadmapSteps.map((step, index) => (
              <div
                key={step.title}
                className="relative rounded-3xl border border-[#E8DCC7] bg-[#fff8ef] p-6"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#B37A58]">
                    {step.subtitle}
                  </p>
                  <span className="text-xs text-[#6C4C3A]">Stage {index + 1}</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-[#782F40]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-[#4F3224]">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6 rounded-3xl border border-[#CEB888]/60 bg-[#fdf2e5] p-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-[#B37A58]">
                Course plan
              </p>
              <p className="mt-1 text-sm text-[#4F3224]">
                Download the full four semester flight plan including studio rotations and credentials.
              </p>
            </div>
            <Link
              href="/course-plan.pdf"
              className="inline-flex items-center justify-center rounded-full bg-[#782F40] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#5f2432]"
            >
              Download Course Plan
            </Link>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-[#B37A58]">
                Micro-credentials
              </p>
              <div className="mt-4 space-y-3">
                {badges.map((badge) => (
                  <div
                    key={badge.label}
                    className="rounded-2xl border border-[#E8DCC7] bg-white p-4"
                  >
                    <p className="text-sm font-semibold text-[#782F40]">
                      {badge.label}
                    </p>
                    <p className="text-xs uppercase tracking-wide text-[#6C4C3A]">
                      {badge.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
