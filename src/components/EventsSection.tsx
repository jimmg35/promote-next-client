import Link from "next/link";

const events = [
  {
    name: "GIS Day & Innovation Expo",
    date: "Nov 20",
    location: "Spatial Futures Lab",
    description:
      "Showcase 40+ student prototypes with live ArcGIS and drone demos.",
    cta: "Reserve a Badge",
  },
  {
    name: "Autonomous Drone Flight Demo",
    date: "Oct 12",
    location: "UAV Test Range",
    description:
      "Observe BVLOS operations and airborne lidar acquisition in real time.",
    cta: "Secure a Spot",
  },
  {
    name: "GeoAI Hackathon",
    date: "Feb 8-9",
    location: "Data Foundry",
    description:
      "48-hour sprint blending policy, health, and climate datasets.",
    cta: "Join a Squad",
  },
];

const labHighlights = [
  {
    title: "UAV Fleet & Sensor Pods",
    detail:
      "VTOL, fixed-wing, thermal, lidar, and hyperspectral payloads for any mission profile.",
  },
  {
    title: "GNSS & Field Kits",
    detail:
      "Centimeter-resolution RTK rovers, rugged tablets, and real-time telemetry dashboards.",
  },
  {
    title: "Immersive Visualization Suite",
    detail:
      "CAVE, 8K volumetric wall, and AR headsets for stakeholder-ready storytelling.",
  },
];

const supportItems = [
  {
    title: "Career Navigation",
    detail:
      "Dedicated strategists for role targeting, negotiation, and employer matching.",
  },
  {
    title: "Portfolio Studios",
    detail:
      "Design reviews with product, policy, and research pros every sprint.",
  },
  {
    title: "Alumni Grid",
    detail:
      "Global mentor network from NASA to UNICEF on-call for project feedback.",
  },
];

export default function EventsSection() {
  return (
    <section
      id="events"
      className="relative border-t border-[#E5D9C0] bg-[#fff9f1] py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-3xl font-semibold text-[#2F1B16] md:text-4xl">
              Experience the lab.
            </h2>
            <p className="mt-4 text-base text-[#4F3224]">
              From drone flight ranges to high-performance compute clusters, the Spatial Futures Lab gives you hardware, data, and coaching to test bold ideas.
            </p>
          </div>
          <div className="rounded-3xl border border-[#E8DCC7] bg-white p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#B37A58]">
              Lab and equipment highlights
            </p>
            <ul className="mt-4 space-y-4 text-sm text-[#4F3224]">
              {labHighlights.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-[#F1E6D5] bg-[#fff8ef] p-4"
                >
                  <p className="text-sm font-semibold text-[#782F40]">{item.title}</p>
                  <p className="mt-1 text-[#4F3224]">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.name}
              className="rounded-3xl border border-[#E8DCC7] bg-white p-6"
            >
              <p className="text-xs uppercase tracking-wide text-[#6C4C3A]">
                {event.date} - {event.location}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-[#782F40]">
                {event.name}
              </h3>
              <p className="mt-3 text-sm text-[#4F3224]">{event.description}</p>
              <Link
                href="#cta"
                className="mt-6 inline-flex text-sm font-semibold text-[#782F40] transition hover:text-[#5f2432]"
              >
                {`${event.cta} ->`}
              </Link>
            </article>
          ))}
        </div>

        <div className="rounded-3xl border border-[#E8DCC7] bg-white p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#B37A58]">
            Support systems
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {supportItems.map((support) => (
              <div
                key={support.title}
                className="rounded-2xl border border-[#F1E6D5] bg-[#fff8ef] p-4"
              >
                <p className="text-sm font-semibold text-[#782F40]">{support.title}</p>
                <p className="mt-2 text-sm text-[#4F3224]">{support.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
