import Link from "next/link";

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

export default function FinalCtaSection() {
  return (
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
          Whether you are exploring climate adaptation, digital twins, or humanitarian tech, we will help you architect a path from core courses to mission deployment.
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
              <p className="mt-2 text-sm text-[#4F3224]">{cta.description}</p>
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#6C4C3A]">
          <Link href="#map" className="hover:text-[#782F40]">
            StoryMaps Showcase
          </Link>
          <Link href="https://www.linkedin.com" className="hover:text-[#782F40]">
            LinkedIn
          </Link>
          <Link href="https://www.youtube.com" className="hover:text-[#782F40]">
            YouTube
          </Link>
          <Link href="https://www.instagram.com" className="hover:text-[#782F40]">
            Instagram
          </Link>
        </div>
      </div>
    </section>
  );
}
