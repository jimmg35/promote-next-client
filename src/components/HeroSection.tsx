import Link from "next/link";

export default function HeroSection() {
  return (
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
          A modern curriculum that pairs geospatial analytics, UAV operations,
          and data storytelling so graduates design resilient cities, healthier
          communities, and responsive ecosystems.
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
  );
}
