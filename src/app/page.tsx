"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import jobData from "@/data/job-postings.json";

type JobPosting = {
  id: string;
  title: string;
  employer: string;
  city: string;
  salary: string;
  skills: string[];
  posted: string;
  type: string;
};

type SectorData = {
  label: string;
  value: number;
  color: string;
};

type SuccessStory = {
  name: string;
  role: string;
  company: string;
  impact: string;
  image: string;
  videoUrl: string;
};

type MapLayer = {
  id: string;
  title: string;
  problem: string;
  method: string;
  result: string;
  metric: string;
  image: string;
};

const jobPostings = jobData as JobPosting[];

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

const employmentSectors: SectorData[] = [
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

const skillCards = [
  {
    title: "GIS & Spatial Analysis",
    detail:
      "Map complex urban, environmental, and health patterns in hours, not weeks.",
  },
  {
    title: "Drone Remote Sensing",
    detail:
      "Plan UAV missions, capture multi-spectral imagery, and process 3D terrain models.",
  },
  {
    title: "Spatial Data Science",
    detail:
      "Blend Python, R, ML, and GeoAI pipelines for predictive decision intelligence.",
  },
  {
    title: "Disease & Risk Surveillance",
    detail:
      "Detect outbreaks early with spatial epidemiology dashboards and alerting.",
  },
  {
    title: "Climate & Sustainability Planning",
    detail:
      "Quantify mitigation scenarios and resilience strategies for communities.",
  },
  {
    title: "StoryMaps & Geo-Design",
    detail:
      "Translate analysis into immersive narratives and stakeholder-ready visuals.",
  },
];

const salaryBySkill = [
  {
    skill: "Spatial Data Science",
    range: "$88K - $122K",
    roles: "GeoAI Scientist, Spatial ML Engineer",
  },
  {
    skill: "Remote Sensing & UAV",
    range: "$72K - $98K",
    roles: "Imagery Analyst, Field Robotics Lead",
  },
  {
    skill: "Climate Risk Modeling",
    range: "$80K - $110K",
    roles: "Resilience Planner, ESG Strategist",
  },
  {
    skill: "Health & Bio-Surveillance",
    range: "$78K - $105K",
    roles: "Public Health GIS Analyst, Risk Intelligence Consultant",
  },
  {
    skill: "Geodesign & Storytelling",
    range: "$68K - $92K",
    roles: "Experience Designer, Civic Engagement Lead",
  },
];

const successStories: SuccessStory[] = [
  {
    name: "Avery Chen",
    role: "Geospatial Intelligence Specialist",
    company: "Planetary Response Network",
    impact:
      "Mapped post-disaster supply corridors that cut delivery times by 43% across island communities.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=640&q=80",
    videoUrl: "https://www.youtube.com/embed/iKzRIweSBLA",
  },
  {
    name: "Liam Ortiz",
    role: "Climate Risk Consultant",
    company: "Gradient Futures",
    impact:
      "Built AI-driven flood forecasts adopted by five coastal cities across Latin America.",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=640&q=80",
    videoUrl: "https://www.youtube.com/embed/0QXpU3p2U0Y",
  },
  {
    name: "Maya Singh",
    role: "Epidemiology Data Lead",
    company: "Global Health Watch",
    impact:
      "Launched a spatial surveillance hub now serving 28 countries with near real-time insights.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=640&q=80",
    videoUrl: "https://www.youtube.com/embed/e9vrfEoc8_g",
  },
];

const mapLayers: MapLayer[] = [
  {
    id: "disaster",
    title: "Disaster Recovery",
    problem: "Identify priority zones within 24 hours after landfall.",
    method: "Fuse drone lidar captures with flood-depth models.",
    result: "Direct 1.2M pounds of aid to coastal communities.",
    metric: "Response Time: 18 hrs",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "housing",
    title: "Housing Inequality",
    problem: "Surface displacement risk across fast growing metros.",
    method: "Analyze 12M parcel records with spatial equity indices.",
    result: "Unlock 48M dollars in inclusive zoning incentives.",
    metric: "Households Impacted: 210K",
    image:
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "climate",
    title: "Climate Risk",
    problem: "Model 2050 sea-level rise scenarios for island nations.",
    method: "Couple satellite altimetry with machine learned storm surge.",
    result: "Inspire national coastal defense investment roadmap.",
    metric: "Carbon Averted: 3.5Mt",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
];

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

const impactProjects = [
  {
    title: "Rapid Disaster Routing",
    description:
      "Optimized humanitarian supply corridors after Category 5 hurricanes in the Pacific.",
    kpi: "Communities Served",
    metric: "1.8M",
  },
  {
    title: "Epidemic Early Warning",
    description:
      "Spatial syndromic surveillance cut outbreak detection time to under 36 hours.",
    kpi: "Time Saved",
    metric: "62%",
  },
  {
    title: "Net-Zero Campus Playbook",
    description:
      "Campus digital twin delivered a pathway to 85% emission reduction by 2032.",
    kpi: "Carbon Reduced",
    metric: "14.2kt",
  },
];

const finalCtas = [
  {
    label: "Apply Now",
    href: "#",
    description: "Submit your application and join the fall 2025 cohort.",
  },
  {
    label: "Schedule a Visit",
    href: "#",
    description: "Walk through the Spatial Futures Lab and meet faculty.",
  },
  {
    label: "Meet Faculty",
    href: "mailto:spatial-futures@university.edu",
    description: "Book a 20-minute consult with a program lead.",
  },
  {
    label: "Join Mailing List",
    href: "#",
    description: "Get curated research spotlights and event invites.",
  },
];
function CountUpNumber({
  value,
  prefix = "",
  suffix = "",
  duration = 1500,
  className = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const frameRef = useRef<number | null>(null);
  const nodeRef = useRef<HTMLSpanElement | null>(null);
  const hasAnimatedRef = useRef(false);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const element = nodeRef.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayValue(Math.round(value * eased));
            if (progress < 1) {
              frameRef.current = requestAnimationFrame(animate);
            }
          };
          frameRef.current = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [duration, value]);

  const formatted = useMemo(() => {
    return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(
      displayValue
    );
  }, [displayValue]);

  return (
    <span ref={nodeRef} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

function EmploymentDonut({ data }: { data: SectorData[] }) {
  const gradient = useMemo(() => {
    if (data.length === 0) {
      return "transparent 0 360deg";
    }
    const total = data.reduce((sum, item) => sum + item.value, 0) || 1;
    let current = 0;
    return data
      .map((item) => {
        const start = (current / total) * 100;
        current += item.value;
        const end = (current / total) * 100;
        return item.color + " " + start + "% " + end + "%";
      })
      .join(", ");
  }, [data]);

  return (
    <div className="relative mx-auto flex h-56 w-56 items-center justify-center">
      <div
        className="h-full w-full rounded-full"
        style={{ background: "conic-gradient(" + gradient + ")" }}
        aria-hidden="true"
      />
      <div className="absolute inset-8 rounded-full bg-white" />
      <div className="absolute inset-16 flex items-center justify-center rounded-full bg-[#fdf2e5]">
        <span className="text-center text-xs uppercase tracking-[0.2em] text-[#782F40]">
          Employment
          <br />
          by Sector
        </span>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeLayerId, setActiveLayerId] = useState(
    mapLayers.length > 0 ? mapLayers[0].id : ""
  );
  const [activeStoryId, setActiveStoryId] = useState<string | null>(null);

  const activeLayer = useMemo(() => {
    return (
      mapLayers.find((layer) => layer.id === activeLayerId) || mapLayers[0]
    );
  }, [activeLayerId]);

  const activeStory = useMemo(() => {
    return successStories.find((story) => story.name === activeStoryId) || null;
  }, [activeStoryId]);

  return (
    <div className="min-h-screen bg-[#fdf6ec] text-[#2F1B16]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#E5D9C0] bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="#"
            className="text-sm font-semibold uppercase tracking-[0.4em] text-[#782F40]"
          >
            Spatial Futures
          </Link>
          <nav className="hidden gap-6 text-sm font-medium text-[#4F3224] md:flex">
            <Link href="#careers" className="transition hover:text-[#782F40]">
              Career Outcomes
            </Link>
            <Link href="#skills" className="transition hover:text-[#782F40]">
              Skills
            </Link>
            <Link href="#jobs" className="transition hover:text-[#782F40]">
              Job Market
            </Link>
            <Link href="#stories" className="transition hover:text-[#782F40]">
              Success Stories
            </Link>
            <Link href="#roadmap" className="transition hover:text-[#782F40]">
              Roadmap
            </Link>
            <Link href="#cta" className="transition hover:text-[#782F40]">
              Connect
            </Link>
          </nav>
          <Link
            href="#cta"
            className="inline-flex items-center gap-2 rounded-full border border-[#782F40] px-4 py-2 text-sm font-semibold text-[#782F40] transition hover:bg-[#782F40] hover:text-white"
          >
            Request Program Guide
          </Link>
        </div>
      </header>

      <main className="relative flex flex-col">
        <section
          id="hero"
          className="relative isolate flex min-h-screen items-center justify-center overflow-hidden"
        >
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="https://cdn.coverr.co/videos/coverr-operating-a-drone-1892/1080p.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-white/70" />
          <div
            className="absolute inset-x-0 -top-40 h-[420px] bg-gradient-to-b from-[#CEB888]/40 to-transparent blur-3xl"
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center md:items-start md:text-left">
            <span className="text-xs uppercase tracking-[0.6em] text-[#782F40]">
              Department of Geography @ Florida State University
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-[#2F1B16] md:text-6xl">
              Launch missions that blend earth intelligence, climate action, and
              human impact.
            </h1>
            <p className="max-w-2xl text-base text-[#4F3224] md:text-lg">
              A modern curriculum that pairs geospatial analytics, UAV
              operations, and data storytelling so graduates design resilient
              cities, healthier communities, and responsive ecosystems.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <Link
                href="#cta"
                className="rounded-full bg-[#782F40] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5f2432]"
              >
                Book a Consultation
              </Link>
              <Link
                href="#jobs"
                className="rounded-full border border-[#CEB888] px-6 py-3 text-sm font-semibold text-[#2F1B16] transition hover:border-[#782F40] hover:text-[#782F40]"
              >
                Explore Career Outcomes
              </Link>
              <Link
                href="#events"
                className="rounded-full border border-[#E5D9C0] px-6 py-3 text-sm font-semibold text-[#4F3224] transition hover:border-[#782F40] hover:text-[#782F40]"
              >
                Attend Drone Demo
              </Link>
            </div>
          </div>
        </section>

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
                innovation to build resilient infrastructures. Recruiters value
                the blend of technical mastery and human-centered practice.
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
                  <p className="mt-4 text-sm text-[#4F3224]">
                    {stat.description}
                  </p>
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
                      Models compounding climate risks for global supply and
                      finance teams.
                    </p>
                  </li>
                  <li className="rounded-2xl border border-[#F1E6D5] bg-[#fff9f1] p-4">
                    <p className="font-semibold text-[#782F40]">
                      Health & Humanitarian Analyst
                    </p>
                    <p className="mt-1 text-[#6C4C3A]">
                      Builds early warning systems for disease, displacement,
                      and recovery.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="relative border-t border-[#E5D9C0] bg-white py-24"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold text-[#2F1B16] md:text-4xl">
                Skills engineered for impact.
              </h2>
              <p className="mt-4 text-base text-[#4F3224]">
                Studio labs layer mission planning, computational pipelines, and
                storytelling so you can translate evidence into action across
                sectors.
              </p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {skillCards.map((skill) => (
                <article
                  key={skill.title}
                  className="group relative overflow-hidden rounded-3xl border border-[#E8DCC7] bg-[#fff8ef] p-7 transition hover:-translate-y-1 hover:border-[#782F40] hover:shadow-xl hover:shadow-[#CEB888]/30"
                >
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#CEB888]/20 opacity-0 transition group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <h3 className="text-lg font-semibold text-[#782F40]">
                    {skill.title}
                  </h3>
                  <p className="mt-4 text-sm text-[#4F3224]">{skill.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          id="jobs"
          className="relative border-t border-[#E5D9C0] bg-[#fff9f1] py-24"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold text-[#2F1B16] md:text-4xl">
                Real job market signals.
              </h2>
              <p className="mt-4 text-base text-[#4F3224]">
                We monitor live postings and alumni placement data to align
                coursework with emerging roles in climate, health, civic tech,
                and private innovation labs.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-[#B37A58]">
                  Latest roles
                </h3>
                <span className="text-xs text-[#6C4C3A]">
                  Updated weekly from employer partners
                </span>
              </div>
              <div className="mt-4 flex gap-4 overflow-x-auto pb-4">
                {jobPostings.map((job) => (
                  <article
                    key={job.id}
                    className="min-w-[260px] max-w-sm flex-1 rounded-3xl border border-[#E8DCC7] bg-white p-6 shadow-lg shadow-[#CEB888]/15"
                  >
                    <div className="flex items-center justify-between text-xs uppercase tracking-wide text-[#6C4C3A]">
                      <span>{job.type}</span>
                      <span>{job.posted}</span>
                    </div>
                    <h4 className="mt-3 text-lg font-semibold text-[#782F40]">
                      {job.title}
                    </h4>
                    <p className="mt-1 text-sm text-[#4F3224]">
                      {job.employer} - {job.city}
                    </p>
                    <p className="mt-4 text-sm font-semibold text-[#782F40]">
                      {job.salary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-[#E8DCC7] bg-[#fff8ef] px-3 py-1 text-xs text-[#4F3224]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[#E8DCC7] bg-white p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#B37A58]">
                Skill to salary range
              </h3>
              <div className="mt-6 overflow-x-auto">
                <table className="min-w-full text-left text-sm text-[#4F3224]">
                  <thead className="text-xs uppercase tracking-wide text-[#6C4C3A]">
                    <tr>
                      <th className="px-4 py-3 font-semibold text-[#2F1B16]">
                        Skill focus
                      </th>
                      <th className="px-4 py-3 font-semibold text-[#2F1B16]">
                        Typical salary range
                      </th>
                      <th className="px-4 py-3 font-semibold text-[#2F1B16]">
                        Common roles
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {salaryBySkill.map((row) => (
                      <tr key={row.skill} className="border-t border-[#F1E6D5]">
                        <td className="px-4 py-4 font-semibold text-[#782F40]">
                          {row.skill}
                        </td>
                        <td className="px-4 py-4 text-[#B37A58] font-medium">
                          {row.range}
                        </td>
                        <td className="px-4 py-4 text-[#4F3224]">
                          {row.roles}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <section
          id="stories"
          className="relative border-t border-[#E5D9C0] bg-white py-24"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold text-[#2F1B16] md:text-4xl">
                Mission-ready alumni.
              </h2>
              <p className="mt-4 text-base text-[#4F3224]">
                Our alumni design equitable futures at space agencies,
                humanitarian orgs, and frontier tech companies. Explore their
                impact and connect for mentorship.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {successStories.map((story) => (
                <article
                  key={story.name}
                  className="group overflow-hidden rounded-3xl border border-[#E8DCC7] bg-[#fff8ef]"
                >
                  <div className="relative h-56 w-full">
                    <Image
                      src={story.image}
                      alt={story.name + " - " + story.role}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <p className="text-xs uppercase tracking-wide text-[#6C4C3A]">
                      {story.company}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-[#782F40]">
                      {story.name}
                    </h3>
                    <p className="text-sm text-[#B37A58]">{story.role}</p>
                    <p className="mt-4 text-sm text-[#4F3224]">
                      {story.impact}
                    </p>
                    <button
                      type="button"
                      onClick={() => setActiveStoryId(story.name)}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#782F40] transition hover:text-[#5f2432]"
                    >
                      Watch 30-sec story -&gt;
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-[#CEB888]/60 bg-[#fdf2e5] px-8 py-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#B37A58]">
                  Mentor network
                </p>
                <p className="mt-1 text-sm text-[#4F3224]">
                  Tap into alumni across NASA, WHO, UNICEF, Esri, and frontier
                  startups.
                </p>
              </div>
              <Link
                href="mailto:alumni-grid@spatialfutures.edu?subject=Connect%20me%20with%20an%20alumnus"
                className="rounded-full bg-[#782F40] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#5f2432]"
              >
                Contact an Alumnus
              </Link>
            </div>
          </div>

          {activeStory ? (
            <StoryModal
              story={activeStory}
              onClose={() => setActiveStoryId(null)}
            />
          ) : null}
        </section>
        <section
          id="map"
          className="relative border-t border-[#E5D9C0] bg-[#fff9f1] py-24"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-3xl border border-[#E8DCC7] bg-white p-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-[#B37A58]">
                      Interactive map showcase
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-[#2F1B16]">
                      Toggle real missions and see our spatial thinking in
                      action.
                    </h2>
                  </div>
                  <Link
                    href="#cta"
                    className="rounded-full border border-[#782F40] px-4 py-2 text-sm font-semibold text-[#782F40] transition hover:bg-[#782F40] hover:text-white"
                  >
                    Explore Studio Briefs
                  </Link>
                </div>
                <div className="mt-6 flex gap-3 overflow-x-auto pb-2">
                  {mapLayers.map((layer) => {
                    const isActive = layer.id === activeLayerId;
                    const baseClass =
                      "rounded-full px-4 py-2 text-sm transition";
                    const activeClass = isActive
                      ? " bg-[#782F40] text-white"
                      : " border border-[#E8DCC7] text-[#4F3224] hover:border-[#782F40] hover:text-[#782F40]";
                    return (
                      <button
                        key={layer.id}
                        type="button"
                        onClick={() => setActiveLayerId(layer.id)}
                        className={baseClass + activeClass}
                      >
                        {layer.title}
                      </button>
                    );
                  })}
                </div>
                <div className="mt-8 grid gap-6 text-sm text-[#4F3224] md:grid-cols-3">
                  <div className="rounded-2xl border border-[#F1E6D5] bg-[#fff9f1] p-4">
                    <p className="text-xs uppercase tracking-wide text-[#6C4C3A]">
                      Problem
                    </p>
                    <p className="mt-2 text-[#2F1B16]">
                      {activeLayer ? activeLayer.problem : ""}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[#F1E6D5] bg-[#fff9f1] p-4">
                    <p className="text-xs uppercase tracking-wide text-[#6C4C3A]">
                      Method
                    </p>
                    <p className="mt-2 text-[#2F1B16]">
                      {activeLayer ? activeLayer.method : ""}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[#F1E6D5] bg-[#fff9f1] p-4">
                    <p className="text-xs uppercase tracking-wide text-[#6C4C3A]">
                      Result
                    </p>
                    <p className="mt-2 text-[#2F1B16]">
                      {activeLayer ? activeLayer.result : ""}
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-[#E8DCC7] bg-white">
                <div className="relative h-full min-h-[360px]">
                  {activeLayer ? (
                    <Image
                      src={activeLayer.image}
                      alt={activeLayer.title + " map overlay"}
                      fill
                      className="object-cover"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-[#CEB888]/30" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-sm font-semibold uppercase tracking-wide text-[#B37A58]">
                      {activeLayer ? activeLayer.title : ""}
                    </p>
                    <p className="mt-2 text-sm text-[#2F1B16]">
                      {activeLayer ? activeLayer.metric : ""}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                Build momentum each semester with stacked credentials,
                fieldwork, and industry proof points that translate directly
                into roles.
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
                      <span className="text-xs text-[#6C4C3A]">
                        Stage {index + 1}
                      </span>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-[#782F40]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#4F3224]">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-6 rounded-3xl border border-[#CEB888]/60 bg-[#fdf2e5] p-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#B37A58]">
                    Course plan
                  </p>
                  <p className="mt-1 text-sm text-[#4F3224]">
                    Download the full four semester flight plan including studio
                    rotations and credentials.
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
                  From drone flight ranges to high-performance compute clusters,
                  the Spatial Futures Lab gives you hardware, data, and coaching
                  to test bold ideas.
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
                      <p className="text-sm font-semibold text-[#782F40]">
                        {item.title}
                      </p>
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
                  <p className="mt-3 text-sm text-[#4F3224]">
                    {event.description}
                  </p>
                  <Link
                    href="#cta"
                    className="mt-6 inline-flex text-sm font-semibold text-[#782F40] transition hover:text-[#5f2432]"
                  >
                    {event.cta} -&gt;
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
                    <p className="text-sm font-semibold text-[#782F40]">
                      {support.title}
                    </p>
                    <p className="mt-2 text-sm text-[#4F3224]">
                      {support.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section
          id="impact"
          className="relative border-t border-[#E5D9C0] bg-white py-24"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold text-[#2F1B16] md:text-4xl">
                Sustainability & impact in motion.
              </h2>
              <p className="mt-4 text-base text-[#4F3224]">
                Students co-create resilient futures alongside communities,
                agencies, and global coalitions.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {impactProjects.map((project) => (
                <article
                  key={project.title}
                  className="rounded-3xl border border-[#E8DCC7] bg-[#fff8ef] p-6"
                >
                  <p className="text-xs uppercase tracking-wide text-[#6C4C3A]">
                    {project.kpi}
                  </p>
                  <p className="mt-2 text-4xl font-semibold text-[#782F40]">
                    {project.metric}
                  </p>
                  <h3 className="mt-4 text-lg font-semibold text-[#2F1B16]">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#4F3224]">
                    {project.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="cta"
          className="relative border-t border-[#E5D9C0] bg-[#fff9f1] py-24"
        >
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 text-center">
            <p className="text-xs uppercase tracking-[0.6em] text-[#B37A58]">
              Choose your next move
            </p>
            <h2 className="text-4xl font-semibold text-[#2F1B16] md:text-5xl">
              Ready to pilot a career in spatial intelligence?
            </h2>
            <p className="max-w-2xl text-base text-[#4F3224]">
              Whether you are exploring climate adaptation, digital twins, or
              humanitarian tech, we will help you architect a path from core
              courses to mission deployment.
            </p>
            <div className="grid w-full gap-4 md:grid-cols-2">
              {finalCtas.map((cta) => (
                <Link
                  key={cta.label}
                  href={cta.href}
                  className="rounded-3xl border border-[#E8DCC7] bg-white p-6 text-left transition hover:border-[#782F40] hover:shadow-xl hover:shadow-[#CEB888]/25"
                >
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#B37A58]">
                    {cta.label}
                  </p>
                  <p className="mt-2 text-sm text-[#4F3224]">
                    {cta.description}
                  </p>
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#6C4C3A]">
              <Link href="#map" className="hover:text-[#782F40]">
                StoryMaps Showcase
              </Link>
              <Link
                href="https://www.linkedin.com"
                className="hover:text-[#782F40]"
              >
                LinkedIn
              </Link>
              <Link
                href="https://www.youtube.com"
                className="hover:text-[#782F40]"
              >
                YouTube
              </Link>
              <Link
                href="https://www.instagram.com"
                className="hover:text-[#782F40]"
              >
                Instagram
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#E5D9C0] bg-white/90 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-[#4F3224] md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#782F40]">
              Spatial Futures Department
            </p>
            <p className="mt-2 text-[#6C4C3A]">
              University Innovation District - 401 Innovation Way - Portland, OR
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="#cta" className="hover:text-[#782F40]">
              Scholarships
            </Link>
            <Link href="#events" className="hover:text-[#782F40]">
              Upcoming Events
            </Link>
            <Link
              href="mailto:hello@spatialfutures.edu"
              className="hover:text-[#782F40]"
            >
              hello@spatialfutures.edu
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

type StoryModalProps = {
  story: SuccessStory;
  onClose: () => void;
};

function StoryModal({ story, onClose }: StoryModalProps) {
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [onClose]);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-[#782F40]/70 px-4 backdrop-blur"
      role="dialog"
      aria-modal="true"
      aria-label={story.name + " impact video"}
    >
      <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-[#E8DCC7] bg-white">
        <button
          type="button"
          ref={closeRef}
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full border border-[#E8DCC7] bg-white/90 px-3 py-1 text-xs font-semibold text-[#4F3224] hover:border-[#782F40] hover:text-[#782F40]"
        >
          Close
        </button>
        <div className="relative aspect-video w-full">
          <iframe
            src={story.videoUrl}
            title={story.name + " impact video"}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="border-t border-[#E8DCC7] bg-[#fff8ef] p-6 text-sm text-[#4F3224]">
          <p className="text-xs uppercase tracking-wide text-[#6C4C3A]">
            {story.company}
          </p>
          <p className="mt-1 font-semibold text-[#782F40]">{story.name}</p>
          <p className="mt-1 text-[#4F3224]">{story.role}</p>
        </div>
      </div>
    </div>
  );
}
