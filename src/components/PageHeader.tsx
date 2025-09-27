import Link from "next/link";

export default function PageHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#E5D9C0] bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="#"
          className="text-sm font-semibold uppercase tracking-[0.4em] text-[#782F40]"
        >
          Department of Geography
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
  );
}
